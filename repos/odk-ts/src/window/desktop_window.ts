import { Edge } from './enums/edge';
import { WindowBase } from './window_base';
import { DesktopWindowOptions } from './options/desktop_window_options';
import { WindowType } from './enums/window_type';

export class DesktopWindow extends WindowBase {
  // ---------------------------------------------------------------------------
  constructor(options?: DesktopWindowOptions | null, id?: string | null) {
    super(options, id);
  }

  // ---------------------------------------------------------------------------
  type(): WindowType {
    return WindowType.Desktop;
  }

  // ---------------------------------------------------------------------------
  resize(edge: Edge): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
