import { WindowBase } from '..';
import { Edge } from '../enums/edge';
import { Rectangle } from '../interfaces/rectangle';
import { WindowType } from '../enums/window_type';
import { Monitor } from '../interfaces/monitor';
import { LoggerService } from '../../common/logging/logger_service';
import { MonitorHelper } from '../utils/monitor_helper';
import { AnchorMarginOptions } from '../options/anchor_margin_options';

/**
 * Parameters used to determine how a window should be docked on the screen.
 *
 *  @internal
 */
export interface DockingParams {
  /**
   * The window instance being docked.
   */
  window: WindowBase;

  /**
   * The screen edge where the window should be docked.
   */
  edge: Edge;

  /**
   * Optional offset values that control how far the window is placed
   * from the selected screen edge.
   */
  marginOptions?: AnchorMarginOptions;

  /**
   * Optional target monitor to apply docking on.
   * If omitted, the monitor is inferred from the window's current position.
   */
  monitor?: Monitor;
}

/**
 * Helper class for positioning windows on the screen.
 *
 *  @internal
 */
export class WindowPositioning {
  private static readonly logger =
    LoggerService.getLogger().getChildCategory('WindowPositioning');

  // ---------------------------------------------------------------------------
  /**
   * Sets the dock position for the given window based on its window type.
   *
   * For desktop windows → uses {@link setWindowDockPosition}.
   * For offscreen (OSR) windows → uses {@link setOffscreenWindowDockPosition}.
   *
   * @param params Docking parameters containing the window, edge, margins, and monitor.
   * @returns `true` if docking was applied successfully.
   * @throws Error if the parameters are invalid or the window type is unsupported.
   */
  public static async setDockPosition(params: DockingParams): Promise<boolean> {
    switch (params?.window.type()) {
      case WindowType.Desktop:
        return this.setWindowDockPosition(params);

      case WindowType.Offscreen:
        return this.setOffscreenWindowDockPosition(params);

      default:
        throw new Error(
          `unsupported window type for docking: ${params?.window?.type()}`
        );
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Centers the given window on the specified monitor.
   *
   * @param window The window to center
   * @param monitor The monitor on which to center the window
   * @returns `true` if centering was applied successfully.
   * @throws Error if centering fails.
   */
  public static async centerWindow(
    window: WindowBase,
    monitor: Monitor
  ): Promise<boolean> {
    const rect = await this.getCenterPos(window, monitor);

    const posRes = await new Promise<overwolf.windows.WindowIdResult>(resolve =>
      overwolf.windows.changePosition(window.Id(), rect.x, rect.y, resolve)
    );

    if (!posRes.success) {
      throw new Error(posRes.error);
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  /**
   * Calculates the centered position for a window on a given monitor.
   *
   * @param window The window to be centered
   * @param monitor The monitor on which to center the window
   * @returns The rectangle containing the x and y coordinates for centering
   * the window.
   * @throws Error if the window bounds cannot be determined.
   */
  private static async getCenterPos(
    window: WindowBase,
    monitor: Monitor
  ): Promise<Rectangle> {
    const {
      width: winWidth,
      height: winHeight,
      dpiAwareWidth: winDpiWidth,
      dpiAwareHeight: winDpiHeight,
    } = await window.getBounds();

    const isDesktop = window.type() === WindowType.Desktop;
    const width = isDesktop ? winWidth : winDpiWidth;
    const height = isDesktop ? winHeight : winDpiHeight;

    return {
      x: Math.round(monitor.left + monitor.width / 2 - width / 2),
      y: Math.round(monitor.top + monitor.height / 2 - height / 2),
    };
  }

  // ---------------------------------------------------------------------------
  /**
   * Sets the dock position for an offscreen (OSR) window.
   *
   * @param params Docking parameters containing the window, edge, margins, and monitor.
   * @returns `true` if docking was applied successfully.
   * @throws Error if the parameters are invalid.
   */
  private static async setOffscreenWindowDockPosition(
    params: DockingParams
  ): Promise<boolean> {
    if (!params || !params.window || !params.edge) {
      throw new Error('invalid docking parameters');
    }

    params.monitor = await MonitorHelper.getWindowMonitor(params.window);

    return this.setWindowDockPosition(params);
  }

  // ---------------------------------------------------------------------------
  /**
   * Sets the dock position for a window.
   *
   * @param params Docking parameters containing the window, edge, margins, and monitor.
   * @returns `true` if docking was applied successfully.
   * @throws Error if the parameters are invalid or window bounds cannot be determined.
   */
  private static async setWindowDockPosition(
    params: DockingParams
  ): Promise<boolean> {
    if (!params || !params.window || !params.edge) {
      throw new Error('invalid docking parameters');
    }

    const { window, edge: dock, monitor, marginOptions } = params;
    const { width, height, left, top } = monitor;
    const { dpiAwareWidth: winWidth, dpiAwareHeight: winHeight } =
      await window.getBounds();

    const rect = await this.getCenterPos(window, monitor);
    const margins = {
      marginX: marginOptions?.marginX ?? 0,
      marginY: marginOptions?.marginY ?? marginOptions?.marginX ?? 0,
    };

    if (Edge.isTop(dock)) {
      rect.y = top + margins.marginY;
    }

    if (Edge.isLeft(dock)) {
      rect.x = left + margins.marginX;
    }

    if (Edge.isRight(dock)) {
      rect.x = width + left - winWidth - margins.marginX;
    }

    if (Edge.isBottom(dock)) {
      rect.y = height + top - winHeight - margins.marginY;
    }

    return window.setBounds(rect);
  }
}
