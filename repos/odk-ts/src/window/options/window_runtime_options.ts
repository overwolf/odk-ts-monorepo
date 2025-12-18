import { DockingParams } from '../positioning/window_positioning';
import { Options } from './window_options';

/** @internal */
export interface WindowRuntimeOptions extends Options {
  anchoring?: DockingParams;
}
