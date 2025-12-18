/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */

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
  export function isTop(e: Edge) {

    return e === Edge.Top || e === Edge.TopLeft || e === Edge.TopRight;
  }

  // ---------------------------------------------------------------------------
  export function isBottom(e: Edge) {
    return e === Edge.Bottom || e === Edge.BottomLeft || e === Edge.BottomRight;
  }

  // ---------------------------------------------------------------------------
  export function isLeft(e: Edge) {
    return e === Edge.Left || e === Edge.TopLeft || e === Edge.BottomLeft;
  }

  // ---------------------------------------------------------------------------
  export function isRight(e: Edge) {
    return e === Edge.Right || e === Edge.TopRight || e === Edge.BottomRight;
  }
}
