import { Edge } from './enums/edge';
import { Rectangle } from './interfaces/rectangle';
import { WindowType } from './enums/window_type';
import { OSRWindowOptions } from './options/osr_window_options';
import { WindowBase } from './window_base';


/**
 *
 * `OSRWindow` extends {@link WindowBase} and represents a window that renders
 * content offscreen. These windows are typically used for rendering scenarios
 * where no visible desktop window is required, but desktop-only behavior may
 * still apply depending on configuration.
 *
 * @example
 * ```ts
 * const window = new OSRWindow({ desktopOnly: true });
 * const type = window.type(); // WindowType.Offscreen
 * ```
 *
 * @see {@link WindowBase}
 * @see {@link OSRWindowOptions}
 * @see {@link WindowType}
 */
export class OSRWindow extends WindowBase {
  // ---------------------------------------------------------------------------
   /**
   * Creates a new {@link OSRWindow}.
   *
   * @param options — optional configuration options for the OSR window.
   * @param id — optional unique window identifier.
   */
  constructor(options?: OSRWindowOptions | null, id?: string | null) {
    super(options, null);
  }

  // ---------------------------------------------------------------------------
  /**
   * Returns the type of this window.
   *
   * @returns {@link WindowType.Offscreen}
   */
  type(): WindowType {
    return WindowType.Offscreen;
  }

  // ---------------------------------------------------------------------------
    /**
   * Resizes the window by dragging the specified edge to the given rectangle.
   *
   * @param edge — the edge of the window to resize from.
   * @param rect — the target rectangle defining the new window bounds.
   * @returns A promise that resolves to `true` if the resize was successful.
   */
  resize(edge: Edge, rect: Rectangle): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  // ---------------------------------------------------------------------------
    /**
   * Indicates whether this window should be treated as desktop-only.
   * When defined in {@link OSRWindowOptions}, the `desktopOnly` flag overrides
   * the base window behavior. If not specified, the value from
   * {@link WindowBase.desktopOnly} is used.
   *
   * @returns `true` if the window is restricted to desktop usage.
   */
  // create for existing window
  get desktopOnly(): boolean {
    return (this.options as OSRWindowOptions)?.desktopOnly || super.desktopOnly;
  }
}
