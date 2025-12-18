import { IDisposable } from './disposable.interface';
import { EnumConvertors } from '../utils/enums_convertors';
import { WindowBase } from '../window_base';

/** @internal */
export class WindowStateController implements IDisposable {
  private window: WindowBase;

  constructor(window: WindowBase) {
    this.window = window;

    overwolf.windows.onStateChanged.addListener(this.onWindowStateChanged);
  }

  // ---------------------------------------------------------------------------
  /**
   * Handles window state changes
   *
   * @param args Window state changed event arguments
   * @returns void
   */
  private onWindowStateChanged = (
    args: overwolf.windows.WindowStateChangedEvent
  ): void => {
    if (args.window_id !== this.window.Id()) {
      return;
    }

    if (args.window_state_ex === overwolf.windows.enums.WindowStateEx.closed) {
      this.window.onWindowClosed();
      return;
    }

    if (args.window_state_ex !== args.window_previous_state_ex) {
      this.raiseWindowStateEvent(args);
    }
  };

  // ---------------------------------------------------------------------------
  /**
   * Raises window state events based on the new state.
   * Events include 'minimized', 'maximized', 'hide', 'show', and 'restore'.
   *
   * @param args Window state changed event arguments
   * @returns void
   */
  private raiseWindowStateEvent(
    args: overwolf.windows.WindowStateChangedEvent
  ): void {
    if (this.window.windowInfo) {
      this.window.windowInfo.stateEx = args.window_state_ex;
    }

    const newState = EnumConvertors.ToWindowState(args.window_state_ex);
    const prevState = EnumConvertors.ToWindowState(
      args.window_previous_state_ex
    );

    switch (args.window_state_ex) {
      case overwolf.windows.enums.WindowStateEx.minimized: {
        this.window.fire('minimized', newState, prevState);
        break;
      }

      case overwolf.windows.enums.WindowStateEx.maximized: {
        this.window.fire('maximized', newState, prevState);
        break;
      }

      case overwolf.windows.enums.WindowStateEx.hidden: {
        this.window.fire('hide', newState, prevState);
        break;
      }

      case overwolf.windows.enums.WindowStateEx.normal: {
        if (
          args.window_previous_state_ex ===
          overwolf.windows.enums.WindowStateEx.hidden
        ) {
          this.window.fire('show', newState, prevState);
        } else {
          this.window.fire('restore', newState, prevState);
        }

        break;
      }

      default:
        console.error(
          `window state changed: unknown state ${args.window_state_ex}`
        );
    }
  }

  // ---------------------------------------------------------------------------
  dispose(): void {
    overwolf.windows.onStateChanged.removeListener(this.onWindowStateChanged);

    this.window = null;
  }
}
