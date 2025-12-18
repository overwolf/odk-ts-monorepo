import { Edge } from './enums/edge';
import { Rectangle } from './interfaces/rectangle';
import { WindowType } from './enums/window_type';
import { OSRWindowOptions } from './options/osr_window_options';
import { WindowBase } from './window_base';

export class OSRWindow extends WindowBase {
  // ---------------------------------------------------------------------------
  constructor(options?: OSRWindowOptions | null, id?: string | null) {
    super(options, null);
  }

  // ---------------------------------------------------------------------------
  type(): WindowType {
    return WindowType.Offscreen;
  }

  // ---------------------------------------------------------------------------
  resize(edge: Edge, rect: Rectangle): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  // ---------------------------------------------------------------------------
  // create for existing window
  get desktopOnly(): boolean {
    return (this.options as OSRWindowOptions)?.desktopOnly || super.desktopOnly;
  }
}
