/* eslint-disable max-len */
import { Event, EventEmitter, EventHandler } from '../lib/event_emitter';
import { Edge } from './enums/edge';
import { Point } from './interfaces/point';
import { Rectangle } from './interfaces/rectangle';
import { Size } from './interfaces/size';
import { WindowState } from './enums/window_state';
import { WindowType } from './enums/window_type';
import { WindowStateController } from './internal/window_state_controller';
import { Options } from './options/window_options';
import { WindowPositioning } from './positioning/window_positioning';
import { applyDefaultOptions } from './utils/default_options';
import { Monitor } from './interfaces/monitor';
import { MonitorStateController } from './internal/monitor_state_controller';
import { MonitorHelper } from './utils/monitor_helper';
import { WindowRuntimeOptions } from './options/window_runtime_options';
import { LoggerService } from '../common/logging/logger_service';
import { AnchorMarginOptions } from './options/anchor_margin_options';

declare global {
  interface Window {
    // used for sync WindowBase 'WindowRuntimeOptions'
    ___odkinternal___: { [id: string]: WindowRuntimeOptions };
  }
}

export abstract class WindowBase extends EventEmitter {
  protected readonly logger =
    LoggerService.getLogger().getChildCategory('WindowBase');

  protected id: string;
  protected options: WindowRuntimeOptions;
  protected closed: boolean;

  protected isDragging: boolean;
  protected owWindowInfo: overwolf.windows.WindowInfo;

  private windowStateController: WindowStateController;
  private monitorStateController: MonitorStateController;

  private creationPromise: Promise<void>;

  private backgroundWindow: Window;

  /**
   * WindowBase C'tor
   * @param options new window options (null when open existing window)
   * @param id when open existing window (for internal use)
   */
  constructor(options: Options | null, id: string | null) {
    super();

    // open existing
    if (id != null) {
      this.id = id;
      return;
    }

    this.setDefaultOption(options);

    // when options is null, create for current
    if (options == null) {
      this.creationPromise = this.openInternal();
      return;
    }

    // if (!options?.url) {
    //   this.options = options;
    //   return;
    // }

    this.creationPromise = this.createInternal(options);
  }

  // ---------------------------------------------------------------------------
  abstract type(): WindowType;

  // ---------------------------------------------------------------------------
  protected setDefaultOption(options: Options): void {
    applyDefaultOptions(options, this.type());
  }

  // ---------------------------------------------------------------------------
  /**
   * Gets the window ID.
   *
   * @returns The window ID(string).
   */
  public Id(): string {
    return this.id;
  }

  // ---------------------------------------------------------------------------
  /**
   * Ensures that the window has been created.
   *
   * @throws Error if the window is closed or not created.
   */
  public async assureCreated(): Promise<void> {
    if (this.creationPromise) {
      await this.creationPromise;
    }

    if (this.closed) {
      throw new Error('Window closed');
    }

    if (!this.id) {
      throw new Error('Window not created');
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Loads the specified URL into the window.
   *
   * @param url The URL to load.
   * @returns `true` if the URL was loaded successfully; otherwise, `false`.
   * @throws Error if the URL loading fails.
   */
  public async loadUrl(url: string): Promise<boolean> {
    if (!url) {
      return false;
    }

    this.options.url = url;

    // window not created yet, create it
    if (!this.id) {
      await this.createInternal(this.options);
      return !!this.id;
    }

    // window already created, load url
    const res = await new Promise<overwolf.Result>(resolve => {
      // @ts-ignore
      overwolf.windows2.loadUrl(this.id, url, resolve);
    });

    return res.success;
  }

  // ---------------------------------------------------------------------------
  /**
   * Sets or unsets the window as topmost.
   *
   * @param isTopmost `true` to set the window as topmost; `false` to unset it.
   * @throws Error if the operation fails.
   */
  public async setTopmost(isTopmost: boolean): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.setTopmost(this.id, isTopmost, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Brings the window to the front without focusing it.
   *
   * @throws Error if the operation fails.
   */
  public async bringToFront(): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.bringToFront(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Brings the window to the front and focuses it.
   *
   * * @throws Error if the operation fails.
   */
  public async bringToFrontWithFocus(): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.bringToFront(this.id, true, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Centers the window on its current monitor.
   *
   * @returns `true` if centering was applied successfully.
   * @throws Error if centering fails.
   */
  public async center(): Promise<boolean> {
    await this.assureCreated();

    const monitor = await MonitorHelper.getWindowMonitor(this);

    this.logger.info(
      `centering on current monitor: ${JSON.stringify(monitor)}`
    );
    return WindowPositioning.centerWindow(this, monitor);
  }

  // ---------------------------------------------------------------------------
  /**
   * Centers the window on the specified monitor.
   *
   * @param monitor The monitor on which to center the window.
   * @returns `true` if centering was applied successfully.
   * @throws Error if centering fails.
   */
  public async centerOnMonitor(monitor: Monitor): Promise<boolean> {
    if (!monitor) {
      return this.center();
    }

    await this.assureCreated();

    this.logger.info(`centering on monitor: ${JSON.stringify(monitor)}`);
    return WindowPositioning.centerWindow(this, monitor);
  }

  // ---------------------------------------------------------------------------
  /**
   * Sets the zoom factor for the window.
   *
   * @param factor The zoom factor to set.
   * @throws Error if setting the zoom factor fails.
   */
  public async zoom(factor: number): Promise<void> {
    await this.assureCreated();

    overwolf.windows.setZoom(factor, this.id);
  }

  // ---------------------------------------------------------------------------
  /**
   * Set current window Mute state/ mute all windows.
   *
   * @param mute `true` to mute the window; `false` to unmute.
   * @param all `true` to mute all windows;
   * @throws Error if the operation fails.
   */
  public async mute(mute: boolean, all?: boolean): Promise<void> {
    await this.assureCreated();

    let res: overwolf.Result;

    if (all) {
      res = await new Promise<overwolf.Result>(resolve =>
        overwolf.windows.muteAll(resolve)
      );
    } else {
      res = await new Promise<overwolf.Result>(resolve =>
        overwolf.windows.setMute(mute, resolve)
      );
    }

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Closes the window.
   *
   * @throws Error if closing the window fails.
   */
  public async close(): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.close(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Shows the window.
   *
   * * @returns `true` if the window was shown successfully.
   * * @throws Error if showing the window fails.
   */
  public async show(): Promise<boolean> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.restore(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  /**
   * Hides the window.
   *
   * @throws Error if hiding the window fails.
   */
  public async hide(): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.hide(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Minimizes the window.
   *
   * @throws Error if minimizing the window fails.
   */
  public async minimize(): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.minimize(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Maximizes the window.
   *
   * @throws Error if maximizing the window fails.
   */
  public async maximize(): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.maximize(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Restores the window.
   *
   * @throws Error if restoring the window fails.
   */
  public async restore(): Promise<void> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.restore(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Sets the position of the window.
   *
   * @param point The new position for the window(top-left corner).
   * @returns `true` if the position was set successfully.
   * @throws Error if setting the position fails.
   */
  public async setPosition(point: Point): Promise<boolean> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.changePosition(
        this.id,
        Math.trunc(point.x),
        Math.trunc(point.y),
        resolve
      )
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  /**
   * Sets the size of the window.
   *
   * @param size The new size for the window.
   * @returns `true` if the size was set successfully.
   * @throws Error if setting the size fails.
   */
  public async setSize(size: Size): Promise<boolean> {
    await this.assureCreated();

    const res = await new Promise<overwolf.Result>(resolve =>
      overwolf.windows.changeSize(
        {
          window_id: this.id,
          width: Math.trunc(size.width),
          height: Math.trunc(size.height),
        },
        resolve
      )
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  /**
   * Sets the bounds of the window(position and size).
   *
   * @param rect The new bounds for the window.
   * @returns `true` if the bounds were set successfully.
   * @throws Error if setting the bounds fails.
   */
  public async setBounds(rect: Rectangle): Promise<boolean> {
    await this.assureCreated();
    // const bounds = this.getBounds();

    const res = await new Promise<overwolf.Result>(resolve =>
      overwolf.windows.setBounds(
        {
          window_id: this.id,
          bounds: {
            width: !isNaN(rect.width) ? Math.trunc(rect.width) : null,
            height: !isNaN(rect.height) ? Math.trunc(rect.height) : null,
            x: !isNaN(rect.x) ? Math.trunc(rect.x) : null,
            y: !isNaN(rect.y) ? Math.trunc(rect.y) : null,
          },
          auto_dpi_resize: this.options?.autoDpi,
        },
        resolve
      )
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  /**
   * Docks the window to the specified edge of the monitor.
   *
   * This is a one-time operation: the window will be positioned at the specified edge,
   * but if the user moves or resizes the window afterwards, it will not remain docked.
   * Use {@link anchor} for persistent edge anchoring that is maintained after move/resize events.
   *
   * @param dock The edge to which to dock the window.
   * @param margin Optional margin options.
   * @param monitor Optional monitor on which to dock the window. If not provided, the current monitor of the window will be used.
   * @returns `true` if docking was applied successfully.
   * @throws Error if docking fails.
   */
  public async dock(
    dock: Edge,
    margin?: AnchorMarginOptions,
    monitor?: Monitor
  ): Promise<boolean> {
    if (!dock || dock === Edge.None) {
      return false;
    }

    await this.assureCreated();

    if (!monitor) {
      monitor = await MonitorHelper.getWindowMonitor(this);
    }

    return WindowPositioning.setDockPosition({
      window: this,
      edge: dock,
      marginOptions: margin,
      monitor: monitor,
    });
  }

  // ---------------------------------------------------------------------------
  /**
   * Anchors the window to the specified edge of the monitor with margin options.
   *
   * This is a persistent operation: after anchoring, the window will remain attached to the specified edge
   * with the given margin, even if the user moves or resizes the window. The anchoring will be reapplied automatically
   * on window move/resize events.
   *
   * @param dock The edge to which to anchor the window.
   * @param marginOptions The margin options for anchoring.
   * @throws Error if anchoring fails.
   */
  public async anchor(
    dock: Edge,
    marginOptions: AnchorMarginOptions
  ): Promise<void> {
    if (!dock || dock === Edge.None) {
      this.options.anchoring = null;
      this.monitorStateController?.dispose();
      this.monitorStateController = null;
      return;
    }

    await this.assureCreated();

    if (!this.monitorStateController) {
      this.monitorStateController = new MonitorStateController(this);
    }

    this.options.anchoring = {
      window: this,
      edge: dock,
      marginOptions: marginOptions,
    };

    await this.performAnchoring();
  }

  // ---------------------------------------------------------------------------
  /**
   * Gets the bounds of the window.
   *
   * @returns The bounds of the window.
   * @throws Error if getting the bounds fails.
   */
  public async getBounds(): Promise<Rectangle> {
    await this.assureCreated();

    const logicalBounds = this.owWindowInfo?.logicalBounds;

    const width = logicalBounds?.width ?? NaN;
    const height = logicalBounds?.height ?? NaN;
    const left = logicalBounds?.left ?? NaN;
    const top = logicalBounds?.top ?? NaN;
    const dpiScale = this.owWindowInfo?.dpiScale ?? NaN;

    return {
      x: left,
      y: top,
      width: width,
      height: height,
      dpiAwareWidth: !isNaN(width) && !isNaN(dpiScale) ? width * dpiScale : NaN,
      dpiAwareHeight:
        !isNaN(height) && !isNaN(dpiScale) ? height * dpiScale : NaN,
    };
  }

  // ---------------------------------------------------------------------------
  /**
   * Starts dragging the window.
   *
   * @returns `true` if dragging was completed successfully.
   * @throws Error if starting dragging fails.
   */
  public async move(): Promise<boolean> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.DragMovedResult>(resolve =>
      overwolf.windows.dragMove(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  /**
   * Starts resizing the window by dragging.
   *
   * @returns `true` if resizing was completed successfully.
   * @throws Error if starting resizing fails.
   */
  public async dragResize(
    edge: overwolf.windows.enums.WindowDragEdge
  ): Promise<boolean> {
    await this.assureCreated();

    const res = await new Promise<overwolf.windows.DragResizeResult>(resolve =>
      overwolf.windows.dragResize(this.id, edge, null, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  /**
   * Checks if the window is open.
   *
   * @returns `true` if the window is open; otherwise, `false`.
   * @throws Error if checking the window state fails.
   */
  public async isOpen(): Promise<boolean> {
    if (this.closed) {
      return false;
    }

    await this.assureCreated();

    const res = await new Promise<overwolf.windows.GetWindowStateResult>(
      resolve => overwolf.windows.getWindowState(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return res?.window_state_ex !== overwolf.windows.enums.WindowStateEx.closed;
  }

  // ---------------------------------------------------------------------------
  /**
   * Gets the current state of the window.
   *
   * @returns The current state of the window.
   * @throws Error if getting the window state fails.
   */
  public async getWindowState(): Promise<overwolf.windows.enums.WindowStateEx> {
    if (this.closed) {
      return overwolf.windows.enums.WindowStateEx.closed;
    }

    await this.assureCreated();

    const res = await new Promise<overwolf.windows.GetWindowStateResult>(
      resolve => overwolf.windows.getWindowState(this.id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    return res.window_state_ex;
  }

  // ---------------------------------------------------------------------------
  // create for existing window
  get desktopOnly(): boolean {
    return this.type() === WindowType.Desktop;
  }

  // ---------------------------------------------------------------------------
  /**
   * Handles window resize events, firing the 'resized' event with the new size.
   */
  protected onWindowResized = async (
    window: overwolf.windows.WindowInfo
  ): Promise<void> => {
    if (window.id !== this.id) {
      return;
    }

    this.owWindowInfo = window;

    await this.performAnchoring();

    if (!window.logicalBounds) {
      return;
    }

    this.fire('resized', {
      width: window.logicalBounds.width,
      height: window.logicalBounds.height,
    });
  };

  // ---------------------------------------------------------------------------
  /**
   * Handles window move events, firing the 'moved' event with the new position.
   */
  protected onWindowMoved = async (
    window: overwolf.windows.WindowInfo
  ): Promise<void> => {
    if (window.id !== this.id) {
      return;
    }

    this.owWindowInfo = window;
    this.isDragging = false;

    await this.performAnchoring();

    if (!window.logicalBounds) {
      return;
    }

    this.fire('moved', {
      x: window.logicalBounds.left,
      y: window.logicalBounds.top,
    });
  };

  // ---------------------------------------------------------------------------
  /**
   * Handles DPI changes for the window.
   */
  protected onWindowDPIChanged = async (
    args: overwolf.windows2.DPIChangedArgs
  ): Promise<void> => {
    if (args?.window?.id !== this.id) {
      return;
    }

    const { window, prevDPI, newDPI } = args;
    this.owWindowInfo = window;

    await this.performAutoZoom(prevDPI, newDPI);
  };

  // ---------------------------------------------------------------------------
  /**
   * Handles the start of window dragging.
   */
  protected onWindowDragStarted = (
    window: overwolf.windows.WindowInfo
  ): void => {
    if (window.id !== this.id) {
      return;
    }

    this.owWindowInfo = window;
    this.isDragging = true;
  };

  // ---------------------------------------------------------------------------
  /**
   * Handles the 'ready to show' event for the window and fires the corresponding event.
   */
  protected onWindowReadyToShow = (window): void => {
    if (window.id !== this.id) {
      return;
    }

    this.fire('ready-to-show');
  };

  // ---------------------------------------------------------------------------
  /**
   * Handles the 'load error' event for the window and fires the corresponding event.
   */
  protected onWindowLoadError = (window): void => {
    if (window.id !== this.id) {
      return;
    }

    this.fire('load-error');
  };

  // ---------------------------------------------------------------------------
  // Private Functions
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // create for existing window
  private openInternal(): Promise<void> {
    this.logger.debug('open existing window');

    if (this.id) {
      throw new Error('Window already created');
    }

    this.backgroundWindow = overwolf.windows.getMainWindow();

    this.creationPromise = new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      overwolf.windows2.create(null, null, result => {
        this.logger.debug(
          `open existing window result: ${JSON.stringify(result)}`
        );
        if (!result.success) {
          this.clearWindowOptions();
          this.id = null;
          reject(result.error);
        } else {
          this.readWindowOptions(result.window.id);
          this.onWindowCreated(result.window);
          resolve();
        }
      });
    });

    return this.creationPromise;
  }

  // ---------------------------------------------------------------------------
  // create new window
  private createInternal(options: Options): Promise<void> {
    this.logger.debug('create new window');

    if (this.id) {
      throw new Error('Window already created');
    }

    if (!options?.id) {
      throw new Error('ID must be provided');
    }

    const { id } = options;
    // creating new window, save setting so
    // Windows.Self() || Windows.FromId(...) will be up to date
    this.saveWindowOptions(options, id);

    this.creationPromise = new Promise((resolve, reject) => {
      overwolf.windows2.create(id, options, result => {
        this.logger.debug(`create window result: ${JSON.stringify(result)}`);
        if (!result.success) {
          this.clearWindowOptions();
          this.id = null;
          reject(result.error);
        } else {
          this.onWindowCreated(result.window);
          resolve();
        }
      });
    });

    return this.creationPromise;
  }

  // ---------------------------------------------------------------------------
  private async onWindowCreated(
    owWindow: overwolf.windows.WindowInfo
  ): Promise<void> {
    this.logger.info(
      `window created: ${owWindow.id} size (${owWindow.logicalBounds?.width}x${owWindow.logicalBounds?.height})`
    );
    this.id = owWindow.id;
    this.owWindowInfo = owWindow;

    this.windowStateController = new WindowStateController(this);

    overwolf.windows2.resized.addListener(this.onWindowResized);
    overwolf.windows2.moved.addListener(this.onWindowMoved);
    overwolf.windows2.dragStarted.addListener(this.onWindowDragStarted);
    overwolf.windows2.dpiChanged.addListener(this.onWindowDPIChanged);
    overwolf.windows2.readyToShow.addListener(this.onWindowReadyToShow);
    overwolf.windows2.loadError.addListener(this.onWindowLoadError);

    await this.positionNewWindow();
  }

  // ---------------------------------------------------------------------------
  private async performAnchoring(monitor?: Monitor): Promise<void> {
    if (this.options == null || this.options?.anchoring == null) {
      return;
    }

    if (this.isDragging) {
      return;
    }

    if (!monitor) {
      monitor = await MonitorHelper.getWindowMonitor(this);
    }

    const { edge: dock, marginOptions: margin } = this.options.anchoring;
    await this.dock(dock, margin, monitor);
  }

  // ---------------------------------------------------------------------------
  private async performAutoZoom(
    prevDPI: number,
    newDPI: number
  ): Promise<void> {
    if (!this.options?.autoZoom) {
      return;
    }

    if (newDPI === 1) {
      await this.zoom(0);
    } else {
      const factor = newDPI > prevDPI ? -1 : 1;
      await this.zoom((factor * newDPI) / prevDPI);
    }
  }

  // ---------------------------------------------------------------------------
  private async positionNewWindow(): Promise<void> {
    if (this.options?.x !== undefined && this.options?.y !== undefined) {
      return;
    }

    if (this.options?.anchoring !== undefined) {
      await this.anchor(
        this.options.anchoring.edge,
        this.options.anchoring.marginOptions
      );
      return;
    }

    if (this.options?.dockPosition !== undefined) {
      await this.dock(this.options?.dockPosition);
      return;
    }

    await this.center();
  }

  // ---------------------------------------------------------------------------
  private saveWindowOptions(options: WindowRuntimeOptions, id: string): void {
    this.backgroundWindow =
      this.backgroundWindow || overwolf.windows.getMainWindow();

    // saving odk window using background window (cross window)
    if (this.backgroundWindow.___odkinternal___ === undefined) {
      this.backgroundWindow.___odkinternal___ = {}; // any
    }

    if (!this.backgroundWindow.___odkinternal___[id]) {
      this.backgroundWindow.___odkinternal___[id] = options;
      this.options = this.backgroundWindow.___odkinternal___[id];
    }
  }

  // ---------------------------------------------------------------------------
  // read existing open window options from background window
  private readWindowOptions(id: string): void {
    // make sure background sync window is assigned
    this.backgroundWindow =
      this.backgroundWindow || overwolf.windows.getMainWindow();
    this.options = this.backgroundWindow.___odkinternal___[id];

    this.logger.debug(
      `read window ${id} options: ${JSON.stringify(this.options)}`
    );
  }

  // ---------------------------------------------------------------------------
  private clearWindowOptions(): void {
    try {
      if (this.backgroundWindow && this.id) {
        this.backgroundWindow.___odkinternal___[this.id] = null;
      }
    } catch (err) {
      this.logger.warn(`error resetting window ${this.id} options: ${err}`);
    }

    this.backgroundWindow = null;
    this.options = null;
  }

  // ---------------------------------------------------------------------------
  // @internal
  get windowInfo(): overwolf.windows.WindowInfo {
    return this.owWindowInfo;
  }

  // ---------------------------------------------------------------------------
  // @internal
  get windowOptions(): WindowRuntimeOptions {
    return this.options;
  }

  // ---------------------------------------------------------------------------
  // @internal
  public onWindowClosed(): void {
    this.logger.info(`window ${this.id} closed`);
    this.closed = true;

    this.windowStateController?.dispose();
    this.windowStateController = null;
    this.monitorStateController?.dispose();
    this.monitorStateController = null;

    overwolf.windows2.resized.removeListener(this.onWindowResized);
    overwolf.windows2.moved.removeListener(this.onWindowMoved);
    overwolf.windows2.dpiChanged.removeListener(this.onWindowDPIChanged);
    overwolf.windows2.readyToShow.removeListener(this.onWindowReadyToShow);
    overwolf.windows2.loadError.removeListener(this.onWindowLoadError);
    overwolf.windows2.dragStarted.removeListener(this.onWindowDragStarted);

    this.clearWindowOptions();

    this.fire('closed', this);
    this.id = null;
  }

  // ---------------------------------------------------------------------------
  // @internal
  public async onWindowMonitorPropertyChanged(
    monitor: Monitor,
    window: overwolf.windows.WindowInfo
  ): Promise<void> {
    this.owWindowInfo = window;
    this.fire('monitor-changed', monitor);

    await this.performAnchoring(monitor);
  }

  // ---------------------------------------------------------------------------
  // events
  /**
   * resized
   */
  on(
    event: 'resized',
    listener: (
      evt: Event,
      /**
       *  window new size
       */
      newSize: Size
    ) => void
  );

  /**
   * Moved
   */
  on(
    event: 'moved',
    listener: (
      evt: Event,
      /**
       *  window new size
       */
      position: Point
    ) => void
  );

  /**
   * Fired when monitor properties change.
   * @param event
   * @param listener
   */
  on(
    event: 'monitor-changed',
    listener: (evt: Event, monitor: Monitor) => void
  );

  /**
   * minimized
   */
  on(
    event: 'minimized',
    listener: (
      evt: Event,
      /**
       *  new window state
       */
      newState: WindowState,
      /**
       *  previous window state
       */
      prevState: WindowState
    ) => void
  );

  /**
   * hide
   */
  on(
    event: 'hide',
    listener: (
      evt: Event,
      /**
       *  new window state
       */
      newState: WindowState,
      /**
       *  new window state
       */
      prevState: WindowState
    ) => void
  );

  /**
   * maximized
   */
  on(
    event: 'maximized',
    listener: (
      evt: Event,
      /**
       *  new window state
       */
      newState: WindowState,
      /**
       *  new window state
       */
      prevState: WindowState
    ) => void
  );

  /**
   * restore
   */
  on(
    event: 'restore',
    listener: (
      evt: Event,
      /**
       *  new window state
       */
      newState: WindowState,
      /**
       *  new window state
       */
      prevState: WindowState
    ) => void
  );

  /**
   * show
   */
  on(
    event: 'show',
    listener: (
      evt: Event,
      /**
       *  new window state
       */
      newState: WindowState,
      /**
       *  new window state
       */
      prevState: WindowState
    ) => void
  );

  /**
   * closed
   */
  on(event: 'closed', listener: (evt: Event) => void);

  /**
   * Fail to load window url
   */
  on(event: 'load-error', listener: (evt: Event) => void);

  on(event: string, listener: EventHandler) {
    super.on(event, listener);
  }

  /**
   * Window is ready to shown
   */
  once(event: 'ready-to-show', listener: (evt: Event) => void);

  once(event: string, listener: EventHandler) {
    super.once(event, listener);
  }
}
