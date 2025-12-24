/**
 * Represents a two-dimensional size.
 *
 * The properties are optional to allow partial definitions
 * or incremental updates.
 */
export interface Size {
  /** The width component. */
  width?: number;

  /** The height component. */
  height?: number;
}