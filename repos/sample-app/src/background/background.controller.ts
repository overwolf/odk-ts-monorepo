import { inject, singleton } from 'tsyringe';
import { LoggerService } from '../shared/services/logger.service';
import { IWindowManagerServiceDelegate } from '../shared/interfaces/window-manager-service.interface';
import { IWindowManagerService } from '../shared/interfaces/window-manager-service.interface';
import { OWApplicationWrapper } from './ow-odk-wrappers/ow-application-wrapper';
import {
  IUserActionServiceDelegate,
  kNameOfUserActionService,
} from '../shared/interfaces/user-action-service.interface';
import { UserActionService } from './services/user-action-service';
import { kNameOfWindowManagerService } from './services/window-manager-service';
import {
  kDesktopWindowName,
  kOsrInGameWindowName,
  kOsrWindowName,
} from './constants';
import { OSRType } from '@overwolf/odk-ts/window/enums/osr_window_type';

//------------------------------------------------------------------------------
@singleton()
export class BackgroundController
  implements IWindowManagerServiceDelegate, IUserActionServiceDelegate
{
  private readonly logger = LoggerService.getCategory('BackgroundController');

  //----------------------------------------------------------------------------
  public constructor(
    @inject(kNameOfWindowManagerService)
    private readonly windowManagerService: IWindowManagerService,
    @inject(kNameOfUserActionService)
    private readonly userActionService: UserActionService,
    private readonly owApplicationWrapper: OWApplicationWrapper
  ) {
    this.registerListeners();
  }

  //----------------------------------------------------------------------------
  public run(): void {
    this.logger.info('BackgroundController is running');

    this.logger.info('Showing desktop window(main window)...');
    this.openDesktopWindow();
  }

  //----------------------------------------------------------------------------
  private registerListeners(): void {
    this.windowManagerService.addListener(this);
    this.userActionService.addListener(this);
  }

  //----------------------------------------------------------------------------
  private unregisterListeners(): void {
    this.windowManagerService.removeListener(this);
    this.userActionService.removeListener(this);
  }

  //----------------------------------------------------------------------------
  private async shutdown(): Promise<void> {
    this.logger.info('Shutting down...');
    this.unregisterListeners();
    this.closeBackgroundWithDelay();
  }

  //----------------------------------------------------------------------------
  private async closeBackgroundWithDelay(): Promise<void> {
    // Delay to allow any pending operations to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.owApplicationWrapper.shutdown();
  }

  //----------------------------------------------------------------------------
  private openDesktopWindow(): void {
    this.logger.info('Opening Desktop Window');

    this.windowManagerService.openDesktopWindow({
      id: kDesktopWindowName,
      url: '../../../dist/desktop/desktop.html',
      visible: true,
      width: 600,
      height: 600,
      autoDpi: true,
      resizable: true,
      // autoZoom: true,
    });
  }

  //----------------------------------------------------------------------------
  private openOsrWindow(): void {
    this.logger.info('Opening OSR Window');

    this.windowManagerService.openOsrWindow({
      id: kOsrWindowName,
      type: OSRType.Default,
      url: '../../../dist/osr/osr.html',
      visible: true,
      width: 600,
      height: 440,
      autoDpi: true,
      resizable: true,
      showInTaskBar: true,
      // autoZoom: true,
    });
  }

  // ---------------------------------------------------------------------------
  private openOsrInGameWindow(): void {
    this.logger.info('Opening OSR In-Game Window');

    this.windowManagerService.openOsrInGameWindow({
      id: kOsrInGameWindowName,
      type: OSRType.InGameOnly,
      url: '../../../dist/osr-in-game/osr-in-game.html',
      visible: true,
      width: 600,
      height: 440,
      autoDpi: true,
      resizable: true,
      // autoZoom: true,
    });
  }

  //----------------------------------------------------------------------------
  // IWindowManagerServiceDelegate
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  onAllWindowsClosed(): void {
    this.logger.info('All windows have been closed');
    this.shutdown();
  }

  //----------------------------------------------------------------------------
  // IUserActionServiceDelegate
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------
  onOpenOsrWindowRequested(): void {
    this.logger.info('Open OSR Window requested');
    this.openOsrWindow();
  }

  //----------------------------------------------------------------------------
  onOpenOsrInGameWindowRequested(): void {
    this.logger.info('Open OSR In-Game Window requested');
    this.openOsrInGameWindow();
  }
}
