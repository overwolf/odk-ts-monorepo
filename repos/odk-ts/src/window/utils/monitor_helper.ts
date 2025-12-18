import { Monitor } from '../interfaces/monitor';
import { WindowBase } from '../window_base';

/**
 * Helper class for monitor-related operations.
 */
export class MonitorHelper {
  // ---------------------------------------------------------------------------
  /**
   * Gets the monitor where the window is displayed.
   *
   * If the window is desktop only -> returns the monitor where the window is located.
   * If the window is in-game -> returns the monitor where the game is running.
   *
   * @param window The window to get the monitor for.
   * @returns A Monitor object describing the monitor bounds.
   * @throws Error if the monitor cannot be determined.
   */
  public static async getWindowMonitor(window: WindowBase): Promise<Monitor> {
    if (window.desktopOnly) {
      return MonitorHelper.getMonitorById(window.windowInfo.monitorId);
    }

    const res = await new Promise<overwolf.games.GetRunningGameInfoResult2>(
      resolve => overwolf.games.getRunningGameInfo2(resolve)
    );

    if (!res?.success || !res?.gameInfo?.isInFocus) {
      return MonitorHelper.getMonitorById(window.windowInfo.monitorId);
    }

    const info = res.gameInfo;
    const monitor: Monitor = {
      width: info.logicalWidth,
      height: info.logicalHeight,
      left: 0,
      top: 0,
    };

    return monitor;
  }

  // ---------------------------------------------------------------------------
  /**
   * Gets monitor by its id
   *
   * @param monitorId The monitor id
   * @returns A Monitor object describing the monitor bounds.
   * @throws Error if the monitor cannot be found.
   */
  private static async getMonitorById(monitorId: string): Promise<Monitor> {
    const monRes = await new Promise<overwolf.utils.getMonitorsListResult>(
      resolve => overwolf.utils.getMonitorsList(resolve)
    );

    const mon = monRes?.displays?.find(mon => mon.id === monitorId);

    if (!monRes.success || !mon) {
      throw new Error('Failed to find monitor');
    }

    const monitor: Monitor = {
      width: mon.workingArea.width,
      height: mon.workingArea.height,
      left: mon.workingArea.left,
      top: mon.workingArea.top,
    };

    return monitor;
  }
}
