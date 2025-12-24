/**
 * Represents a rectangular area in 2D space.
 *
 * All properties are optional to support partial definitions,
 * incremental updates, or derived rectangles.
 */
export interface Rectangle {
  /** The horizontal (x-axis) position of the rectangle. */
  x?: number;

  /** The vertical (y-axis) position of the rectangle. */
  y?: number;

  /** The width of the rectangle in pixels. */
  width?: number;

  /** The height of the rectangle in pixels. */
  height?: number;

  /**
   * The DPI-aware width of the rectangle.
   *
   * This value represents the logical width after DPI scaling
   * has been applied.
   */
  dpiAwareWidth?: number;

  /**
   * The DPI-aware height of the rectangle.
   *
   * This value represents the logical height after DPI scaling
   * has been applied.
   */
  dpiAwareHeight?: number;
}
