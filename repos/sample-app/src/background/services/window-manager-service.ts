import { IWindowManagerService } from '../../shared/interfaces/window-manager-service.interface';
import { IWindowManagerServiceDelegate } from '../../shared/interfaces/window-manager-service.interface';
import { DesktopWindow, OSRWindow, WindowBase } from '@overwolf/odk-ts';
import { FunctionPropertyNames } from '../types';
import { DesktopWindowOptions } from '@overwolf/odk-ts/window/options/desktop_window_options';
import { OSRWindowOptions } from '@overwolf/odk-ts/window/options/osr_window_options';
import { LoggerService } from '../../shared/services/logger.service';
import { singleton } from 'tsyringe';
import { Event } from '@overwolf/odk-ts/lib/event_emitter';
import { Size } from '@overwolf/odk-ts/window/interfaces/size';
import { Point } from '@overwolf/odk-ts/window/interfaces/point';

export const kNameOfWindowManagerService = 'WindowManagerService';

//------------------------------------------------------------------------------
@singleton()
export class WindowManagerService implements IWindowManagerService {
  private readonly logger = LoggerService.getCategory('WindowManagerService');
  private listeners: Set<IWindowManagerServiceDelegate>;

  private desktopWindow!: WindowBase;
  private osrWindow!: WindowBase;
  private osrInGameWindow!: WindowBase;

  //----------------------------------------------------------------------------
  public constructor() {
    this.listeners = new Set<IWindowManagerServiceDelegate>();
  }

  //----------------------------------------------------------------------------
  // IWindowManagerService
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  public async openDesktopWindow(options: DesktopWindowOptions): Promise<void> {
    if (this.desktopWindow && (await this.desktopWindow.isOpen())) {
      this.logger.info('Desktop window already open, showing it again');
      this.desktopWindow.show();
      return;
    }

    this.desktopWindow = new DesktopWindow(options);
    await this.desktopWindow.assureCreated();

    this.initializeWindowEvents(this.desktopWindow);
  }

  //----------------------------------------------------------------------------
  public async openOsrWindow(options: OSRWindowOptions): Promise<void> {
    if (this.osrWindow && (await this.osrWindow.isOpen())) {
      this.logger.info('OSR window already open, showing it again');
      this.osrWindow.show();
      return;
    }

    this.osrWindow = new OSRWindow(options);
    await this.osrWindow.assureCreated();

    this.initializeWindowEvents(this.osrWindow);
  }

  //----------------------------------------------------------------------------
  public async openOsrInGameWindow(options: OSRWindowOptions): Promise<void> {
    if (this.osrInGameWindow && (await this.osrInGameWindow.isOpen())) {
      this.logger.info('OSR In-Game window already open, showing it again');
      this.osrInGameWindow.show();
      return;
    }

    this.osrInGameWindow = new OSRWindow(options);
    await this.osrInGameWindow.assureCreated();

    this.initializeWindowEvents(this.osrInGameWindow);
  }

  // ---------------------------------------------------------------------------
  // Private Functions
  // ---------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  private initializeWindowEvents(window: WindowBase): void {
    window.once('ready-to-show', () => {
      this.logger.info('Window (' + window.Id() + ') is ready to show');
    });

    window.on('show', () => {
      this.logger.info('Window (' + window.Id() + ') shown');
    });

    window.on('hide', () => {
      this.logger.info('Window (' + window.Id() + ') hidden');
    });

    window.on('closed', () => {
      this.logger.info('Window (' + window.Id() + ') closed');
      this.verifyOpenWindows();
    });

    window.on('restore', () => {
      this.logger.info('Window (' + window.Id() + ') restored');
    });

    window.on('minimized', () => {
      this.logger.info('Window (' + window.Id() + ') minimized');
    });

    window.on('maximized', () => {
      this.logger.info('Window (' + window.Id() + ') maximized');
    });

    window.on('resized', (evt: Event, newSize: Size) => {
      this.logger.info(
        'Window (' +
          window.Id() +
          ') resized to (' +
          newSize.width +
          ', ' +
          newSize.height +
          ')'
      );
    });

    window.on('moved', (evt: Event, newPosition: Point) => {
      this.logger.info(
        'Window (' +
          window.Id() +
          ') moved to (' +
          newPosition.x +
          ', ' +
          newPosition.y +
          ')'
      );
    });
  }

  // ---------------------------------------------------------------------------
  private async verifyOpenWindows() {
    if (
      (await this.desktopWindow?.isOpen()) ||
      (await this.osrWindow?.isOpen()) ||
      (await this.osrInGameWindow?.isOpen())
    ) {
      this.logger.info('There are still open windows');
      return;
    }

    this.logger.info('All windows are closed');
    this.triggerListenerEvent('onAllWindowsClosed');
  }

  // ---------------------------------------------------------------------------
  private triggerListenerEvent(
    eventName: FunctionPropertyNames<IWindowManagerServiceDelegate>,
    ...params: any[]
  ) {
    if (!eventName) {
      return;
    }

    for (const listener of this.listeners) {
      if (!listener[eventName]) {
        continue;
      }

      // eslint-disable-next-line prefer-spread
      listener[eventName].apply(listener, params);
    }
  }

  //----------------------------------------------------------------------------
  // DelegateProvider
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  addListener(listener: IWindowManagerServiceDelegate) {
    this.listeners.add(listener);
  }

  //----------------------------------------------------------------------------
  removeListener(listener: IWindowManagerServiceDelegate) {
    this.listeners.delete(listener);
  }
}
