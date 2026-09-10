// Public API surface. Everything a consumer needs is exported from here, so
// `import { ... } from '@overwolf/odk-ts'` is the only import path required.

// window classes
export * from './window_base';
export * from './windows';
export * from './osr_window';
export * from './desktop_window';
export { MonitorHelper } from './utils/monitor_helper';

// window options
export * from './options/window_options';
export * from './options/desktop_window_options';
export * from './options/osr_window_options';
export * from './options/anchor_margin_options';

// enums
export * from './enums/edge';
export * from './enums/osr_window_type';
export * from './enums/window_state';
export * from './enums/window_type';

// geometry and monitor shapes
export * from './interfaces/monitor';
export * from './interfaces/point';
export * from './interfaces/rectangle';
export * from './interfaces/size';

// event types - the `Event` passed to every window listener.
// `EventEmitter` and `globalEvent` stay internal.
export type { Event, EventHandler } from '../lib/event_emitter';
