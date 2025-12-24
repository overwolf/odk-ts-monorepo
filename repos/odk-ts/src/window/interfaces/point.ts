/**
 * Represents a point in 2D space.
 *
 * The coordinates are optional to allow partial updates,
 * lazy initialization, or unspecified axes.
 */
export interface Point {
  /** The horizontal (x-axis) coordinate. */
  x?: number;
  /** The vertical (y-axis) coordinate. */
  y?: number;
}
