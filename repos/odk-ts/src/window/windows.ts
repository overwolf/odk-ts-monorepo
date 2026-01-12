import { DesktopWindow } from './desktop_window';
import { OSRWindow } from './osr_window';
import { WindowBase } from './window_base';

/**
 * Utility class for managing Overwolf windows.
 *
 * @remarks
 * This class provides static methods to retrieve window instances based on the current window or by ID.
 */
export class Windows {
  private static _selfWindow: WindowBase | null = null;
  // ---------------------------------------------------------------------------
  /**
   * Returns the `WindowBase` representing the current Overwolf window.
   *
   * @returns The current window as a `WindowBase` object.
   * @throws Error if called from the background page or if the window type is unknown.
   */
  public static async Self(): Promise<WindowBase> {
    if (Windows._selfWindow) {
      return Windows._selfWindow;
    }

    const res = await new Promise<overwolf.windows.WindowResult>(resolve =>
      overwolf.windows.getCurrentWindow(resolve)
    );

    if (res.window.type === overwolf.windows.WindowType.Background) {
      throw new Error("background page doesn't have window");
    }

    switch (res.window.type) {
      case overwolf.windows.WindowType.Desktop: {
        const window = new DesktopWindow(null);
        await window.assureCreated();
        Windows._selfWindow = window;
        return window;
      }

      case overwolf.windows.WindowType.Offscreen: {
        const window = new OSRWindow(null);
        await window.assureCreated();
        Windows._selfWindow = window;
        return window;
      }

      default:
        throw new Error(`unknown window type: ${res?.window?.type}`);
    }
  }

  // ---------------------------------------------------------------------------
  /**
   * Returns the `WindowBase` representing the Overwolf window with the given ID.
   *
   * @param id The ID of the window to get.
   * @returns The window as a `WindowBase` object.
   * @throws Error if the window cannot be found or if the window type is background or unknown.
   */
  public static async FromId(id: string): Promise<WindowBase> {
    const res = await new Promise<overwolf.windows.WindowResult>(resolve =>
      overwolf.windows.getWindow(id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    if (res.window.type === overwolf.windows.WindowType.Background) {
      throw new Error("background page doesn't have window");
    }

    switch (res.window.type) {
      case overwolf.windows.WindowType.Desktop: {
        return new DesktopWindow(null, id);
      }

      case overwolf.windows.WindowType.Offscreen: {
        return new OSRWindow(null, id);
      }

      default:
        throw new Error(`unknown window type: ${res?.window?.type}`);
    }
  }
}
