# Overwolf Development Kit (ODK)

## Overview

The **ODK** is the Overwolf Development Kit for TypeScript. It is designed to simplify and enhance Overwolf app development by providing a modern, type-safe API.

## Key features

- Easy creation and management of Desktop and OSR windows.
- **Create windows dynamically at runtime without pre-defining them in the manifest file**.
- Type-safe window options and positioning.
- Utility methods for working with window IDs and the current window.
- Monitor helper utilities for multi-monitor setups.
- **All window actions are asynchronous and return Promises for easy integration with async/await workflows**.

### Current status

- **Window Management**&mdash;the current version focuses on dynamic window management, including creation, control, and positioning of both desktop and OSR (Off-Screen Rendering) windows, as well as utilities for working with monitors and window states.
- **Future Plans**&mdash;the ODK will expand to wrap more of the Overwolf API, providing a unified, type-safe toolkit for Overwolf app developers.

## Installing the ODK

This module requires **Node 22.0.0 or later**.

```sh
npm install @overwolf/odk-ts
```

### Imports

Everything public is exported from the package root&mdash;classes, option
interfaces, enums, geometry types and the event types:

```ts
import {
  DesktopWindow,
  OSRWindow,
  WindowBase,
  Windows,
  MonitorHelper,
  Options,
  DesktopWindowOptions,
  OSRWindowOptions,
  AnchorMarginOptions,
  Edge,
  OSRType,
  WindowState,
  WindowType,
  Monitor,
  Point,
  Rectangle,
  Size,
  Event,
  EventHandler,
} from '@overwolf/odk-ts';
```

Deep paths such as `@overwolf/odk-ts/window/enums/edge` still resolve, but they
are not part of the supported API and will stop working in a future major
version. Import from the root.

## How to build the package

### Production build

Run:

```sh
npm run buildpackage
```

- Outputs to the `dist` folder.
- Creates an npm package archive: `package.tgz`.

### Development build (with Source Maps)

Run:

```sh
npm run builddevpackage
```

This is the same as the production build, but includes source map files for easier debugging.

### Updating the ODK locally in another project

1. Copy the generated `package.tgz` from the `dist` folder to your target project's `<3rd_party>/overwolf` directory.
2. In your target project, run:

   ```sh
   npm i file:<3rd_party>/overwolf/package.tgz
   ```

This will install the local odk-ts package for development or testing purposes.

## Your first window in 5 minutes

This walkthrough assumes an existing Overwolf app with a background page. If you
want a complete working project instead, start from
[sample-app](../sample-app), which is the reference implementation for
everything below.

### 1. Install

```sh
npm install @overwolf/odk-ts
```

### 2. Create a window from your background page

Windows are created at runtime, so there is no `windows` section to add to your
`manifest.json`&mdash;your app only needs a `background_page` to run this code
from. See [sample-app's manifest.json](../sample-app/manifest.json) for a
working manifest.

```ts
import { DesktopWindow } from '@overwolf/odk-ts';

const win = new DesktopWindow({
  id: 'main',
  url: '../../../dist/desktop/desktop.html',
  width: 1200,
  height: 700,
});
```

`url` is resolved relative to the page that creates the window&mdash;your
background page&mdash;not to the app root, which is why the path above walks up
out of the background page's folder. `id` is the name you will later pass to
`Windows.FromId()`.

### 3. Show it

**The constructor does not display the window.** It starts creating it and
returns immediately&mdash;creation is asynchronous. Nothing appears on screen
until you call `show()`:

```ts
await win.show();
```

If you need to wait for creation without showing the window yet (for example to
read its ID or bounds first), await `assureCreated()`:

```ts
await win.assureCreated();
console.log(win.Id());
```

Both methods reject if creation failed, so wrap them in `try`/`catch` to see the
underlying error.

### 4. Control the window from its own page

Inside the window's own page, `Windows.Self()` returns a wrapper for the window
the code is running in. It is asynchronous, so `await` it:

```ts
import { Windows } from '@overwolf/odk-ts';

const self = await Windows.Self();

await self.center();
await self.setSize({ width: 800, height: 600 });
```

`Windows.Self()` throws when called from the background page&mdash;the
background page is not a window. Create and hold `DesktopWindow` / `OSRWindow`
instances there instead.

### 5. React to what the user does

```ts
self.on('moved', (evt, position) => {
  console.log(`moved to ${position.x},${position.y}`);
});

self.on('closed', () => {
  console.log('window closed');
});
```

That is the whole loop: create from the background page, `show()`, then control
and observe the window from its own page. Everything below covers the same
ground in more detail.

## Creating and using windows

The [quickstart](#your-first-window-in-5-minutes) covers creating a desktop
window, showing it, and reaching it from its own page. This section covers the
rest: OSR windows, looking up windows by ID, positioning, and events.

### OSR windows

`OSRWindow` is created exactly like `DesktopWindow`, but it is composited as an
in-game or transparent desktop overlay rather than drawn as a native desktop
window. Its `type` decides where it is visible:

```ts
import { OSRWindow, OSRType } from '@overwolf/odk-ts';

const overlay = new OSRWindow({
  id: 'overlay',
  url: '../../../dist/osr/osr.html',
  type: OSRType.InGameOnly,
  transparent: true,
  clickThrough: true,
});

await overlay.show();
```

- `OSRType.Default`&mdash;visible on the desktop and in game.
- `OSRType.DesktopOnly`&mdash;visible only on the desktop.
- `OSRType.InGameOnly`&mdash;visible only in game.

`OSRWindow` adds input and rendering options on top of the shared ones&mdash;
`transparent`, `clickThrough`, `ignoreKeyboardEvents`, `inputPassThrough`,
`restrictToGameBounds`, `bottommost`, `dpiUnAware` and more. All of them are
documented with their defaults in
[`OSRWindowOptions`](docs/interfaces/OSRWindowOptions.md).

### Looking up an existing window

`Windows.FromId(id)` returns the window created under that `id`, from anywhere
in your app&mdash;including the background page. Like `Windows.Self()`, it is
asynchronous and returns a `Promise<WindowBase>`.

```ts
import { Windows } from '@overwolf/odk-ts';

const win = await Windows.FromId('main');
await win.bringToFront();
```

It throws if no such window exists, or if the ID belongs to a background or
unknown window. Use it to reach a window you did not create in the current
page, rather than passing instances around.

### Window positioning options

When creating or moving windows, you can use a variety of positioning options:

- **x, y**&mdash;absolute coordinates for the window's top-left corner.
- **width, height**&mdash;window size in pixels.
- **dockPosition**&mdash;dock the window to a specific edge of the screen (see
  [`Edge`](docs/enumerations/Edge.md)).
- **minWidth, minHeight, maxWidth, maxHeight**&mdash;set minimum and maximum window dimensions.
- **topMost**&mdash;whether the window should stay on top of other Overwolf windows.
- **resizable**&mdash;whether the window can be resized.
- **autoDpi, autoZoom**&mdash;DPI and zoom handling.
- **keepWindowLocation**&mdash;prevent window from moving when game focus changes.

Every option is documented in the API reference:
[`Options`](docs/interfaces/Options.md) for the
shared options,
[`DesktopWindowOptions`](docs/interfaces/DesktopWindowOptions.md)
and
[`OSRWindowOptions`](docs/interfaces/OSRWindowOptions.md)
for the per-window-type ones.

All window actions are asynchronous and return `Promises`, making them easy to use with async/await.

You can easily control window position and state using methods on your window instance (from the `WindowBase` class):

- `window.center()`&mdash;center the window on its monitor.
- `window.centerOnMonitor(monitor)`&mdash;center on a specific monitor.
- `window.setPosition({x, y})`&mdash;move to coordinates.
- `window.setSize({width, height})`&mdash;resize the window.
- `window.setBounds({x, y, width, height})`&mdash;set position and size.
- `window.dock(edge, {marginX, marginY}, monitor)`&mdash;place the window at an
  edge, once.
- `window.anchor(edge, {marginX, marginY})`&mdash;keep the window at an edge,
  persistently.
- `window.move()`&mdash;start dragging the window.
- `window.bringToFront()`, `window.minimize()`, `window.maximize()`, `window.restore()`, `window.show()`, `window.hide()`, `window.close()` &mdash;control the window state.

**Dock vs. anchor** &mdash; `dock()` is a one-time placement: the window goes to
the edge, but will not stay there if the user moves or resizes it. `anchor()` is
persistent: the ODK reapplies the anchoring after every move and resize, so the
window stays attached to the edge.

See the [`WindowBase` reference](docs/classes/WindowBase.md) for the full
list of available methods.

### Window events

Window instances are event emitters. Use `on()` to subscribe, `once()` to
subscribe for a single firing, and `off()` to unsubscribe. Every listener
receives an `Event` object as its first argument, followed by any event-specific
arguments.

```ts
import { Windows } from '@overwolf/odk-ts';

const win = await Windows.Self();

win.on('resized', (evt, newSize) => {
  console.log(`resized to ${newSize.width}x${newSize.height}`);
});

win.on('moved', (evt, position) => {
  console.log(`moved to ${position.x},${position.y}`);
});

// stop listening to every 'moved' listener on this window
win.off('moved');
```

| Event             | Listener arguments                                | Fired when                                                               |
| ----------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| `resized`         | `newSize: Size`                                   | The window finished resizing.                                            |
| `moved`           | `position: Point`                                 | The window finished moving.                                              |
| `monitor-changed` | `monitor: Monitor`                                | The window's monitor, or that monitor's properties, changed.             |
| `minimized`       | `newState: WindowState`, `prevState: WindowState` | The window was minimized.                                                |
| `maximized`       | `newState: WindowState`, `prevState: WindowState` | The window was maximized.                                                |
| `restore`         | `newState: WindowState`, `prevState: WindowState` | The window was restored from minimized or maximized.                     |
| `show`            | `newState: WindowState`, `prevState: WindowState` | The window became visible.                                               |
| `hide`            | `newState: WindowState`, `prevState: WindowState` | The window was hidden.                                                   |
| `closed`          | &mdash;                                           | The window was closed.                                                   |
| `load-error`      | &mdash;                                           | The window's URL failed to load.                                         |
| `ready-to-show`   | &mdash;                                           | The window's content is ready. Fires once&mdash;subscribe with `once()`. |

```ts
win.once('ready-to-show', () => win.show());
```

The listener payload types come from the package root, like everything else:

```ts
import { Event, Size, Point, Monitor, WindowState } from '@overwolf/odk-ts';
```

### Monitor Helper

The `MonitorHelper` class provides a utility for getting the monitor associated with a window:

`MonitorHelper.getWindowMonitor(window)`&mdash;returns the monitor for a given window instance.

Example:

```ts
import { MonitorHelper } from '@overwolf/odk-ts';

const monitor = await MonitorHelper.getWindowMonitor(win);
```

## API reference

The full generated API reference lives in [docs/](docs/):

- [`WindowBase`](docs/classes/WindowBase.md)&mdash;every method and event
  shared by all windows.
- [`DesktopWindow`](docs/classes/DesktopWindow.md),
  [`OSRWindow`](docs/classes/OSRWindow.md)&mdash;the two window types.
- [`Windows`](docs/classes/Windows.md)&mdash;`Self()` and `FromId()`.
- [`MonitorHelper`](docs/classes/MonitorHelper.md)&mdash;monitor lookup.
- [`Options`](docs/interfaces/Options.md),
  [`DesktopWindowOptions`](docs/interfaces/DesktopWindowOptions.md),
  [`OSRWindowOptions`](docs/interfaces/OSRWindowOptions.md)&mdash;all
  window options, with defaults.
- [`Edge`](docs/enumerations/Edge.md),
  [`OSRType`](docs/enumerations/OSRType.md),
  [`WindowState`](docs/enumerations/WindowState.md),
  [`WindowType`](docs/enumerations/WindowType.md)&mdash;enums.

The reference is generated from the source with TypeDoc. Regenerate it after
changing any public API or doc comment:

```sh
npm run docs
```

## Contributing

Overwolf welcomes community contributions and extensions! If you’d like to improve, extend, or fix something in this project, follow the process below.

### How to contribute

1. **Fork the repository**&mdash;create your own fork of the project on GitHub.
2. **Create a feature branch**&mdash;work on your changes in a dedicated branch. Use `git checkout -b my-feature`.
3. **Make your changes**:
   - Keep changes focused and scoped.
   - Follow the existing code style and conventions.
   - Add or update documentation where appropriate.
   - Include tests if applicable.
4. **Commit your work**&mdash;use clear, descriptive commit messages. (e.g., `git commit -m "Add support for XYZ"`)
5. **Push and open a Pull Request**&mdash;push your branch to your fork and open a Pull Request (PR) against the main repository.

### Pull Request guidelines

To help us review PRs efficiently:

- Describe **what** the change does and **why** it’s needed.
- Link any related issues (if applicable).
- Keep PRs focused (one feature or fix per PR when possible).
- Be open to feedback and requested changes.

### Extending the project

If you’re planning a **larger extension or architectural change**, contact us and explain the intended use case and impact it will have. Overwolf recommends that you get early feedback before investing significant effort.

### Code of conduct

Please be respectful and constructive in discussions and reviews. Overwolf's aim is to keep this project welcoming and collaborative.
