import { Edge } from '../enums/edge';
import { WindowState } from '../enums/window_state';
import { WindowStyle } from '../enums/window_style';

/** @internal */
export class EnumConvertors {
  public static ToWindowState(owWindowState: string) {
    switch (owWindowState) {
      case overwolf.windows.enums.WindowStateEx.minimized: {
        return WindowState.Minimized;
      }

      case overwolf.windows.enums.WindowStateEx.maximized: {
        return WindowState.Maximized;
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

  // ---------------------------------------------------------------------------
  public static ToOwWindowStyle(
    style: WindowStyle
  ): overwolf.windows.enums.WindowStyle {
    switch (style) {
      case WindowStyle.InputPassThrough: {
        return overwolf.windows.enums.WindowStyle.InputPassThrough;
      }

      case WindowStyle.BottomMost: {
        return overwolf.windows.enums.WindowStyle.BottomMost;
      }

      default:
        throw new Error(`unknown window style ${style}`);
    }
  }

  // ---------------------------------------------------------------------------
  public static ToOwWindowDragEdge(
    edge: Edge
  ): overwolf.windows.enums.WindowDragEdge {
    switch (edge) {
      case Edge.None: {
        return overwolf.windows.enums.WindowDragEdge.None;
      }

      case Edge.Top: {
        return overwolf.windows.enums.WindowDragEdge.Top;
      }

      case Edge.Bottom: {
        return overwolf.windows.enums.WindowDragEdge.Bottom;
      }

      case Edge.Left: {
        return overwolf.windows.enums.WindowDragEdge.Left;
      }

      case Edge.Right: {
        return overwolf.windows.enums.WindowDragEdge.Right;
      }

      case Edge.TopLeft: {
        return overwolf.windows.enums.WindowDragEdge.TopLeft;
      }

      case Edge.TopRight: {
        return overwolf.windows.enums.WindowDragEdge.TopRight;
      }

      case Edge.BottomLeft: {
        return overwolf.windows.enums.WindowDragEdge.BottomLeft;
      }

      case Edge.BottomRight: {
        return overwolf.windows.enums.WindowDragEdge.BottomRight;
      }

      default:
        throw new Error(`unknown window drag edge ${edge}`);
    }
  }
}
