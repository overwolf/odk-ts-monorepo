import { IDisposable } from './disposable.interface';
import { WindowBase } from '../window_base';

/** @internal */
export class MonitorStateController implements IDisposable {
  private window: WindowBase;

  constructor(window: WindowBase) {
    this.window = window;

    overwolf.windows.onScreenPropertyChanged.addListener(
      this.onScreenPropertyChanged
    );
  }

  // ---------------------------------------------------------------------------
  /**
   * Handles screen property changes
   *
   * @param args Screen property changed event arguments
   * @returns void
   */
  private onScreenPropertyChanged = async (
    args: overwolf.windows.onScreenPropertyChangedEvent
  ): Promise<void> => {
    const { id, monitor } = args;

    if (id !== this.window.Id()) {
      return;
    }

    return this.window.onWindowMonitorPropertyChanged(
      {
        width: monitor.workingArea.width,
        height: monitor.workingArea.height,
        left: monitor.workingArea.left,
        top: monitor.workingArea.top,
      },
      args.window
    );
  };

  // ---------------------------------------------------------------------------
  dispose(): void {
    overwolf.windows.onScreenPropertyChanged.removeListener(
      this.onScreenPropertyChanged
    );

    this.window = null;
  }
}
