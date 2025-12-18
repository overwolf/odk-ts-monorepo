
# odk-ts

## Overwolf Development Kit (ODK)


## Overview

**odk-ts** is the Overwolf Development Kit for TypeScript. It is designed to simplify and enhance Overwolf app development by providing a modern, type-safe API.

---

### Install

This module requires **Node 22.0.0 or later**.

```sh
$ npm install @overwolf/odk-ts
```



### Build Instructions

#### Production Build

Run:

```sh
npm run buildpackage
```

- Outputs to the `dist` folder
- Creates an npm package archive: `package.tgz`

#### Development Build (with Source Maps)

Run:

```sh
npm run builddevpackage
```

- Same as the production build, but includes source map files for easier debugging

---

### Updating odk-ts Locally in Another Project

1. Copy the generated `package.tgz` from the `dist` folder to your target project's `3rd_party/overwolf` directory.
2. In your target project, run:

  ```sh
  npm i file:3rd_party/overwolf/package.tgz
  ```

This will install the local odk-ts package for development or testing purposes.


---

### Current Status

- **Window Management:** The current version focuses on dynamic window management, including creation, control, and positioning of both desktop and OSR (Off-Screen Rendering) windows, as well as utilities for working with monitors and window states.
- **Future Plans:** ODK will expand to wrap more of the Overwolf API, providing a unified, type-safe toolkit for Overwolf app developers.

### Key Features

- Easy creation and management of Desktop and OSR windows
- **Create windows dynamically at runtime without pre-defining them in the manifest file**
- Type-safe window options and positioning
- Utility methods for working with window IDs and the current window
- Monitor helper utilities for multi-monitor setups
- **All window actions are asynchronous and return Promises for easy integration with async/await workflows**

---

## Usage

### Creating Windows


You can create new windows using the provided classes.
With odk-ts, you do not need to define windows in your manifest file - windows can be created dynamically at runtime.

#### Create a Desktop Window

```ts
import { DesktopWindow } from '@overwolf/odk-ts';

const win = new DesktopWindow({
  id: 'my_window',
  url: 'index.html',
  // ...other options
});
```

#### Create an OSR Window

```ts
import { OSRWindow } from '@overwolf/odk-ts';

const osrWin = new OSRWindow({
  id: 'osr_window',
  url: 'osr.html',
  // ...other options
});
```

### Accessing Windows


Use the `Windows` utility to access existing windows:

- **Windows.self**: Get a wrapper for the current window.

  ```ts
  import { Windows } from '@overwolf/odk-ts';

  const currentWin = Windows.self();
  ```

- **Windows.fromId(id: string)**: Get a window instance by its Overwolf window ID.

  ```ts
  import { Windows } from '@overwolf/odk-ts';

  const win = Windows.fromId('my_window_id');
  ```

### Window Positioning Options

When creating or moving windows, you can use a variety of positioning options:

- **x, y**: Absolute coordinates for the window's top-left corner
- **width, height**: Window size in pixels
- **dockPosition**: Dock the window to a specific edge of the screen (see `Edge` enum)
- **minWidth, minHeight, maxWidth, maxHeight**: Set minimum and maximum window dimensions
- **topMost**: Whether the window should stay on top of other Overwolf windows
- **resizable**: Whether the window can be resized
- **autoDpi, autoZoom**: DPI and zoom handling
- **keepWindowLocation**: Prevent window from moving when game focus changes


See the `Options` interface in `@overwolf/odk-ts/window/options/window_options` for all available options and their descriptions.

All window actions are asynchronous and return Promises, making them easy to use with async/await.


You can easily control window position and state using methods on your window instance (from the `WindowBase` class):

- `window.center()` — Center the window on its monitor
- `window.centerOnMonitor(monitor)` — Center on a specific monitor
- `window.setPosition({x, y})` — Move to coordinates
- `window.setSize({width, height})` — Resize
- `window.setBounds({x, y, width, height})` — Set position and size
- `window.dock(edge, {marginX, marginY}, monitor)` — **Dock to an edge (one-time):** This positions the window at the specified edge, but if the window is moved or resized afterwards, it will not remain docked. Use this for a single placement action.
- `window.anchor(edge, {marginX, marginY})` — **Anchor to an edge (persistent):** This attaches the window to the specified edge with the given margin, and the window will remain anchored even after move or resize events. The anchoring is automatically reapplied to keep the window at the edge.
- `window.move()` - Start dragging the window
- `window.bringToFront()`, `window.minimize()`, `window.maximize()`, `window.restore()`, `window.show()`, `window.hide()`, `window.close()` — Control window state

**Dock vs Anchor:**

- **Dock** is a one-time operation. The window is placed at the edge, but will not stay docked if the user moves or resizes it.
- **Anchor** is persistent. The window will remain attached to the edge and the anchoring will be reapplied automatically after move/resize events.


See the `window_base.ts` file for the full list of available methods.

### Monitor Helper


The `MonitorHelper` class provides a utility for getting the monitor associated with a window:

- `MonitorHelper.getWindowMonitor(window)` — Returns the monitor for a given window instance.

Example:

```ts
import { MonitorHelper } from '@overwolf/odk-ts';

const monitor = await MonitorHelper.getWindowMonitor(win);
```