import { Options } from './window_options';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
/**
 * Desktop-specific window options.
 *
 * This interface currently does not add any new properties beyond
 * {@link Options}, but exists to provide semantic clarity and allow
 * future desktop-only extensions.
 *
 * @see {@link Options}
 */
export interface DesktopWindowOptions extends Options {}


