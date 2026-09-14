import { Edge } from '@overwolf/odk-ts';

export class EnumConvertors {
  //----------------------------------------------------------------------------
  public static readonly WindowResizeEdgeMapping: Record<string, Edge> = {
    Top: Edge.Top,
    Bottom: Edge.Bottom,
    Left: Edge.Left,
    Right: Edge.Right,
    TopLeft: Edge.TopLeft,
    TopRight: Edge.TopRight,
    BottomLeft: Edge.BottomLeft,
    BottomRight: Edge.BottomRight,
  };
}
