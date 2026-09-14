### Breaking Changes

- **Method signatures** — platform `overwolf.*` enums are replaced by the ODK's own
- **`WindowState.Maximize` → `WindowState.Maximized`** — the value changes from `'maximize'` to `'maximized'`
- **Imports** — every public symbol is now exported from the package root

1.0.19 and earlier could not be compiled against at all: the published `.d.ts`
files referenced the `overwolf` namespace, but the tarball shipped no `overwolf`
declarations. If you had a working setup, you were compiling against the
monorepo rather than the package.

#### Method signatures

Conversion happens inside the ODK now, so no cast to a platform enum is needed
or accepted. This affects `getWindowState()`, `dragResize()`, `setWindowStyle()`,
`removeWindowStyle()`, `hasWindowStyle()` and `getWindowStyles()`.

```ts
// before
const state: overwolf.windows.enums.WindowStateEx = await win.getWindowState();
await win.dragResize(overwolf.windows.enums.WindowDragEdge.Right);
await win.setWindowStyle(overwolf.windows.enums.WindowStyle.InputPassThrough);

// after
const state: WindowState = await win.getWindowState();
await win.dragResize(Edge.Right);
await win.setWindowStyle(WindowStyle.InputPassThrough);
```

`WindowStyle` is new, with two members: `InputPassThrough` and `BottomMost`.

#### `WindowState.Maximize` → `WindowState.Maximized`

The platform never produced `'maximize'`, so any code comparing a live window
state against that literal never matched. Use `WindowState.Maximized`, or change
the literal to `'maximized'`.

#### Imports

Deep paths such as `@overwolf/odk-ts/window/enums/edge` still resolve but are
unsupported and slated for removal.

```ts
import { Window, WindowState, WindowStyle, Edge } from '@overwolf/odk-ts';
```
