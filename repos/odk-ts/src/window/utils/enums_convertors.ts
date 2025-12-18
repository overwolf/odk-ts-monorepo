import { WindowState } from '../enums/window_state';

/** @internal */
export class EnumConvertors {
  public static ToWindowState(owWindowState: string) {
    switch (owWindowState) {
      case overwolf.windows.enums.WindowStateEx.minimized: {
        return WindowState.Minimized;
      }

      case overwolf.windows.enums.WindowStateEx.maximized: {
        return WindowState.Maximize;
      }

      case overwolf.windows.enums.WindowStateEx.hidden: {
        return WindowState.Hidden;
      }

      case overwolf.windows.enums.WindowStateEx.normal: {
        return WindowState.Normal;
      }

      case overwolf.windows.enums.WindowStateEx.closed: {
        return WindowState.Closed;
      }

      default:
        throw new Error(`unknown window state ${owWindowState}`);
    }
  }
}
