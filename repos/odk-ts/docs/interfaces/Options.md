[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / Options

# Interface: Options

Defined in: [window/options/window\_options.ts:13](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L13)

Base options for configuring an Overwolf window.

These options define window identity, positioning, sizing, visibility,
behavior, and interaction characteristics. More specialized window
types extend this interface.

## See

 - [DesktopWindowOptions](DesktopWindowOptions.md)
 - [OSRWindowOptions](OSRWindowOptions.md)

## Extended by

- [`DesktopWindowOptions`](DesktopWindowOptions.md)
- [`OSRWindowOptions`](OSRWindowOptions.md)

## Properties

### allowLocalFileAccess?

> `optional` **allowLocalFileAccess**: `boolean`

Defined in: [window/options/window\_options.ts:209](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L209)

Enables access to the `file://` scheme from JavaScript.

#### Default

```ts
false
```

***

### autoDpi?

> `optional` **autoDpi**: `boolean`

Defined in: [window/options/window\_options.ts:129](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L129)

Indicates whether provided dimensions should automatically account for
DPI scaling.

#### Remarks

- For `DesktopWindow`: Currently unsupported.
- For `OSRWindow`: Default is `false` for `DesktopOnly`, `true` for
  other types.

#### Default

- `OSRWindow`: `false` for `DesktopOnly`, `true` otherwise
- `DesktopWindow`: unsupported

***

### autoZoom?

> `optional` **autoZoom**: `boolean`

Defined in: [window/options/window\_options.ts:144](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L144)

Indicates whether the window zoom level should automatically account for
DPI scaling.

#### Remarks

- For `DesktopWindow`: Currently unsupported.
- For `OSRWindow`: Default is `false` for `DesktopOnly`, `true` for
  other types.

#### Default

- `OSRWindow`: `false` for `DesktopOnly`, `true` otherwise
- `DesktopWindow`: unsupported

***

### blockTopWindowNavigation?

> `optional` **blockTopWindowNavigation**: `boolean`

Defined in: [window/options/window\_options.ts:226](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L226)

Prevents scripts or iframes from navigating the top-level window
to a different URL.

Instead, the URL will be opened in the system browser.

#### Default

```ts
true
```

***

### disableAnimations?

> `optional` **disableAnimations**: `boolean`

Defined in: [window/options/window\_options.ts:233](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L233)

Disables minimize and restore animations while in game.

#### Default

```ts
false
```

***

### disableBackgroundOptimization?

> `optional` **disableBackgroundOptimization**: `boolean`

Defined in: [window/options/window\_options.ts:174](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L174)

Disables JavaScript engine background optimizations for improved
performance.

#### Default

```ts
true
```

***

### disableBlur?

> `optional` **disableBlur**: `boolean`

Defined in: [window/options/window\_options.ts:240](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L240)

Prevents the JavaScript context from losing focus.

#### Default

```ts
false
```

***

### disableRightClick?

> `optional` **disableRightClick**: `boolean`

Defined in: [window/options/window\_options.ts:247](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L247)

Disables right-click interactions entirely for this window.

#### Default

```ts
false
```

***

### dockPosition?

> `optional` **dockPosition**: [`Edge`](../enumerations/Edge.md)

Defined in: [window/options/window\_options.ts:77](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L77)

Dock the window to a specific edge of the screen.

***

### grabFocusOnDesktop?

> `optional` **grabFocusOnDesktop**: `boolean`

Defined in: [window/options/window\_options.ts:185](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L185)

Indicates whether the window will automatically grab focus when opened
on desktop.

For in-game keyboard focus behavior, use `grabKeyboardFocus`.

#### Default

```ts
false
```

***

### height?

> `optional` **height**: `number`

Defined in: [window/options/window\_options.ts:72](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L72)

The height of the window in pixels.

***

### id

> **id**: `string`

Defined in: [window/options/window\_options.ts:17](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L17)

Unique ID of the window. (Mandatory)

***

### isAltF4Blocked?

> `optional` **isAltF4Blocked**: `boolean`

Defined in: [window/options/window\_options.ts:158](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L158)

Blocks the user from closing the window using Alt+F4.

#### Default

```ts
false
```

***

### isMuted?

> `optional` **isMuted**: `boolean`

Defined in: [window/options/window\_options.ts:254](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L254)

Mutes all audio output from the window.

#### Default

```ts
true
```

***

### keepWindowLocation?

> `optional` **keepWindowLocation**: `boolean`

Defined in: [window/options/window\_options.ts:151](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L151)

Prevents the window location from changing when game focus changes.

#### Default

```ts
false
```

***

### maxHeight?

> `optional` **maxHeight**: `number`

Defined in: [window/options/window\_options.ts:98](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L98)

The maximum height of the window in pixels.

***

### maxWidth?

> `optional` **maxWidth**: `number`

Defined in: [window/options/window\_options.ts:93](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L93)

The maximum width of the window in pixels.

***

### minHeight?

> `optional` **minHeight**: `number`

Defined in: [window/options/window\_options.ts:88](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L88)

The minimum height of the window in pixels.

***

### minWidth?

> `optional` **minWidth**: `number`

Defined in: [window/options/window\_options.ts:83](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L83)

The minimum width of the window in pixels.

***

### muteExcludedHosts?

> `optional` **muteExcludedHosts**: `string`[]

Defined in: [window/options/window\_options.ts:268](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L268)

A list of host patterns that will not be muted even when the window is
muted.

#### Example

```ts
muteExcludedHosts: [
  "*.youtube.*",
  "*.twitch.*"
]
```

***

### popupBlocker?

> `optional` **popupBlocker**: `boolean`

Defined in: [window/options/window\_options.ts:216](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L216)

Block all none user Gesture popups.

#### Default

```ts
true
```

***

### readyToShowTimeout?

> `optional` **readyToShowTimeout**: `number`

Defined in: [window/options/window\_options.ts:48](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L48)

The longest time, in milliseconds, that [WindowBase.show](../classes/WindowBase.md#show),
[WindowBase.restore](../classes/WindowBase.md#restore), [WindowBase.center](../classes/WindowBase.md#center),
[WindowBase.centerOnMonitor](../classes/WindowBase.md#centeronmonitor), [WindowBase.dock](../classes/WindowBase.md#dock) and
[WindowBase.anchor](../classes/WindowBase.md#anchor) wait for the window to be ready to show.

The window is ready to show when its page fires its `load` event, which
waits for every image, script, stylesheet and iframe the page starts
before it. A page that pulls remote content can take a while to get there.
Once this time passes, those calls go ahead anyway, and the window may
appear before its page has finished loading. `ready-to-show` still fires
when the load completes. `0` means don't wait.

#### Remarks

Only a window being created waits. One opened with `Windows.Self()` or
`Windows.FromId()` never does, so this has no effect there.

#### Default

```ts
undefined (wait for the page to load, however long it takes)
```

***

### resizable?

> `optional` **resizable**: `boolean`

Defined in: [window/options/window\_options.ts:114](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L114)

Indicates whether the window can be resized by the user.

#### Default

```ts
false
```

***

### showInTaskBar?

> `optional` **showInTaskBar**: `boolean`

Defined in: [window/options/window\_options.ts:166](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L166)

Indicates whether the window is displayed in the Windows taskbar
and Alt+Tab window selection menu.

#### Default

```ts
true (native windows), false (OSR windows)
```

***

### showMaximize?

> `optional` **showMaximize**: `boolean`

Defined in: [window/options/window\_options.ts:193](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L193)

Indicates whether to show the window maximize button.
Only relevant for Native or OSR non-transparent windows.

#### Default

```ts
false
```

***

### showMinimize?

> `optional` **showMinimize**: `boolean`

Defined in: [window/options/window\_options.ts:202](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L202)

Indicates whether the window minimize button should be shown.

Relevant only for native windows or non-transparent OSR windows.

#### Default

```ts
true
```

***

### topMost?

> `optional` **topMost**: `boolean`

Defined in: [window/options/window\_options.ts:107](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L107)

Indicates whether the window will stay on top of other Overwolf windows.

Use with care, as topmost windows can negatively impact user experience.

#### Default

```ts
false
```

***

### url?

> `optional` **url**: `string`

Defined in: [window/options/window\_options.ts:22](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L22)

The path or URL to load inside the window.

***

### visible?

> `optional` **visible**: `boolean`

Defined in: [window/options/window\_options.ts:27](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L27)

Indicates whether the window should be visible.

***

### width?

> `optional` **width**: `number`

Defined in: [window/options/window\_options.ts:67](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L67)

The width of the window in pixels.

***

### x?

> `optional` **x**: `number`

Defined in: [window/options/window\_options.ts:55](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L55)

The horizontal position of the window.

Mandatory if [y](#y) is provided.

***

### y?

> `optional` **y**: `number`

Defined in: [window/options/window\_options.ts:63](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L63)

/**
 * The vertical position of the window.
 *
 * Mandatory if [x](#x) is provided.
