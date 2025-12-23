
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

- **Window Management:**&mdash;the current version focuses on dynamic window management, including creation, control, and positioning of both desktop and OSR (Off-Screen Rendering) windows, as well as utilities for working with monitors and window states.
- **Future Plans**&mdash;the ODK will expand to wrap more of the Overwolf API, providing a unified, type-safe toolkit for Overwolf app developers.

## Installing the ODK

This module requires **Node 22.0.0 or later**.

```sh
npm install @overwolf/odk-ts
```

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

## Creating and using windows

### Creating windows

You can create new windows using the provided classes.
With the ODK, you do not need to define windows in your manifest file, windows can be created dynamically at runtime.

#### Create a desktop window

```ts
import { DesktopWindow } from '@overwolf/odk-ts';

const win = new DesktopWindow({
  id: 'my_window',
  url: 'index.html',
  // ...other options
});
```

#### Create an OSR window

```ts
import { OSRWindow } from '@overwolf/odk-ts';

const osrWin = new OSRWindow({
  id: 'osr_window',
  url: 'osr.html',
  // ...other options
});
```

### Accessing windows

Use the `Windows` utility to access existing windows:

`Windows.self`&mdash;get a wrapper for the current window.

```ts
import { Windows } from '@overwolf/odk-ts';

const currentWin = Windows.self();
```

`Windows.fromId(id: string)`&mdash;get a window instance by its Overwolf window ID.

```ts
import { Windows } from '@overwolf/odk-ts';

const win = Windows.fromId('my_window_id');
```

### Window positioning options

When creating or moving windows, you can use a variety of positioning options:

- **x, y**&mdash;absolute coordinates for the window's top-left corner.
- **width, height**&mdash;window size in pixels.
- **dockPosition**&mdash;dock the window to a specific edge of the screen (see `Edge` enum).
- **minWidth, minHeight, maxWidth, maxHeight**&mdash;set minimum and maximum window dimensions.
- **topMost**&mdash;whether the window should stay on top of other Overwolf windows.
- **resizable**&mdash;whether the window can be resized.
- **autoDpi, autoZoom**&mdash;DPI and zoom handling.
- **keepWindowLocation**&mdash;prevent window from moving when game focus changes.

See the `Options` interface in `@overwolf/odk-ts/window/options/window_options` for all available options and their descriptions.

All window actions are asynchronous and return `Promises`, making them easy to use with async/await.

You can easily control window position and state using methods on your window instance (from the `WindowBase` class):

- `window.center()`&mdash;center the window on its monitor.
- `window.centerOnMonitor(monitor)`&mdash;center on a specific monitor.
- `window.setPosition({x, y})`&mdash;move to coordinates.
- `window.setSize({width, height})`&mdash;resize the window.
- `window.setBounds({x, y, width, height})`&mdash;set position and size.
- `window.dock(edge, {marginX, marginY}, monitor)`&mdash;**Docks to an edge (one-time)**. This positions the window at the specified edge, but if the window is moved or resized afterwards, it will not remain docked. Use this for a single placement action.
- `window.anchor(edge, {marginX, marginY})`&mdash;**Anchor to an edge (persistent)**. This attaches the window to the specified edge with the given margin, and the window will remain anchored even after move or resize events. The anchoring is automatically reapplied to keep the window at the edge.
- `window.move()`&mdash;start dragging the window.
- `window.bringToFront()`, `window.minimize()`, `window.maximize()`, `window.restore()`, `window.show()`, `window.hide()`, `window.close()` &mdash;control the window state.

The difference between **Dock** and **Anchor**:

- **Dock** is a one-time operation. The window is placed at the edge, but will not stay docked if the user moves or resizes it.
- **Anchor** is persistent. The window will remain attached to the edge and the anchoring will be reapplied automatically after move/resize events.

See the `window_base.ts` file for the full list of available methods.

### Monitor Helper

The `MonitorHelper` class provides a utility for getting the monitor associated with a window:

`MonitorHelper.getWindowMonitor(window)`&mdash;returns the monitor for a given window instance.

Example:

```ts
import { MonitorHelper } from '@overwolf/odk-ts';

const monitor = await MonitorHelper.getWindowMonitor(win);
```
