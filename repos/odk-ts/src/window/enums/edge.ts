/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */

/**
 * Represents the edges and corners of a rectangular area.
 *
 * This enum can be used to describe alignment, attachment points,
 * resizing handles, or directional positioning.
 */
export enum Edge {
  None = 'None',
  Left = 'Left',
  Right = 'Right',
  Top = 'Top',
  Bottom = 'Bottom',
  TopLeft = 'TopLeft',
  TopRight = 'TopRight',
  BottomLeft = 'BottomLeft',
  BottomRight = 'BottomRight',
}

export namespace Edge {
  // ---------------------------------------------------------------------------
   /**
   * Checks whether the given edge is positioned on the top side.
   *
   * @param e - The edge to evaluate.
   * @returns `true` if the edge is {@link Edge.Top}, {@link Edge.TopLeft}, or {@link Edge.TopRight}.
   *
   * @see {@link isBottom}
   * @see {@link isLeft}
   * @see {@link isRight}
   */
  export function isTop(e: Edge) {

    return e === Edge.Top || e === Edge.TopLeft || e === Edge.TopRight;
  }

  // ---------------------------------------------------------------------------
   /**
   * Checks whether the given edge is positioned on the bottom side.
   *
   * @param e - The edge to evaluate.
   * @returns `true` if the edge is {@link Edge.Bottom}, {@link Edge.BottomLeft}, or {@link Edge.BottomRight}.
   *
   * @see {@link isTop}
   * @see {@link isLeft}
   * @see {@link isRight}
   */
  export function isBottom(e: Edge) {
    return e === Edge.Bottom || e === Edge.BottomLeft || e === Edge.BottomRight;
  }

  // ---------------------------------------------------------------------------
   /**
   * Checks whether the given edge is positioned on the left side.
   *
   * @param e - The edge to evaluate.
   * @returns `true` if the edge is {@link Edge.Left}, {@link Edge.TopLeft}, or {@link Edge.BottomLeft}.
   *
   * @see {@link isTop}
   * @see {@link isBottom}
   * @see {@link isRight}
   */
  export function isLeft(e: Edge) {
    return e === Edge.Left || e === Edge.TopLeft || e === Edge.BottomLeft;
  }

  // ---------------------------------------------------------------------------
   /**
   * Checks whether the given edge is positioned on the right side.
   *
   * @param e - The edge to evaluate.
   * @returns `true` if the edge is {@link Edge.Right}, {@link Edge.TopRight}, or {@link Edge.BottomRight}.
   *
   * @see {@link isTop}
   * @see {@link isBottom}
   * @see {@link isLeft}
   */
  export function isRight(e: Edge) {
    return e === Edge.Right || e === Edge.TopRight || e === Edge.BottomRight;
  }
}
