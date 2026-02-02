/**
 * Describes the position and dimensions of a monitor in screen coordinates.
 *
 * The `left` and `top` values define the monitor's origin relative to the
 * virtual desktop, while `width` and `height` define its size.
 * The optional `dpiScale` property indicates the DPI scaling factor for the monitor.
 */
export interface Monitor {
  /** The horizontal position of the monitor's left edge. */
  left: number;
  /** The vertical position of the monitor's top edge. */
  top: number;
  /** The width of the monitor in pixels. */
  width: number;
  /** The height of the monitor in pixels. */
  height: number;
  /** The DPI scale factor of the monitor. */
  dpiScale?: number;
}
