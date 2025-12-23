import { Edge } from './enums/edge';
import { WindowBase } from './window_base';
import { DesktopWindowOptions } from './options/desktop_window_options';
import { WindowType } from './enums/window_type';


/**
 * `DesktopWindow` extends {@link WindowBase} and provides functionality
 * specific to desktop-type windows. It exposes the window type and
 * supports desktop-only operations such as resizing from a specific edge.
 *
 * @example
 * ```ts
 * const window = new DesktopWindow({ width: 800, height: 600 });
 * const type = window.type(); // WindowType.Desktop
 * ```
 *
 * @see {@link WindowBase}
 * @see {@link DesktopWindowOptions}
 * @see {@link WindowType}
 */
export class DesktopWindow extends WindowBase {
  // ---------------------------------------------------------------------------

   /**
   * Creates a new {@link DesktopWindow}.
   *
   * @param options - Optional configuration options for the desktop window.
   * @param id - Optional unique window identifier.
   */
  constructor(options?: DesktopWindowOptions | null, id?: string | null) {
    super(options, id);
  }

  // ---------------------------------------------------------------------------
   /**
   * Returns the type of this window.
   *
   * @returns {@link WindowType.Desktop}
   */
  type(): WindowType {
    return WindowType.Desktop;
  }

  // ---------------------------------------------------------------------------

   /**
   * Resizes the window by dragging the specified edge.
   *
   * @param edge - The edge of the window to resize from.
   * @returns A promise that resolves to `true` if the resize was successful.
   */
  resize(edge: Edge): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
