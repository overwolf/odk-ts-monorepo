import { DesktopWindow } from './desktop_window';
import { OSRWindow } from './osr_window';
import { WindowBase } from './window_base';
import { LoggerService } from '../common/logging/logger_service';

/**
 * Utility class for managing Overwolf windows.
 *
 * @remarks
 * This class provides static methods to retrieve window instances based on the current window or by ID.
 */
export class Windows {
  private static readonly logger =
    LoggerService.getLogger().getChildCategory('Windows');

  private static _selfWindow: WindowBase | null = null;
  private static readonly _windowsById = new Map<string, WindowBase>();

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
      // Desktop window
      case overwolf.windows.WindowType.Desktop: {
        const window = DesktopWindow._createForExistingWindow();
        await window.assureCreated();
        Windows._selfWindow = window;
        return window;
      }

      // Offscreen or In-Game(dpi unaware) window
      case overwolf.windows.WindowType.Offscreen:
      case overwolf.windows.WindowType.InGame: {
        const window = OSRWindow._createForExistingWindow();
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
    const cached = Windows._windowsById.get(id);
    if (cached) {
      Windows.logger.debug(`FromId(${id}): returning cached instance`);
      return cached;
    }

    const res = await new Promise<overwolf.windows.WindowResult>(resolve =>
      overwolf.windows.getWindow(id, resolve)
    );

    if (!res.success) {
      throw new Error(res.error);
    }

    if (res.window.type === overwolf.windows.WindowType.Background) {
      throw new Error('background page doesn\'t have window');
    }

    let window: WindowBase;
    switch (res.window.type) {
      // Desktop window
      case overwolf.windows.WindowType.Desktop:
        window = DesktopWindow._createForExistingWindow(id);
        break;

      // Offscreen or In-Game(dpi unaware) window
      case overwolf.windows.WindowType.Offscreen:
      case overwolf.windows.WindowType.InGame:
        window = OSRWindow._createForExistingWindow(id);
        break;

      default:
        throw new Error(`unknown window type: ${res?.window?.type}`);
    }

    await window.assureCreated();
    Windows._windowsById.set(id, window);
    window.on('closed', () => Windows._windowsById.delete(id));
    return window;
  }
}
