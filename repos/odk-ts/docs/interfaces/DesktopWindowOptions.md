[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / DesktopWindowOptions

# Interface: DesktopWindowOptions

Defined in: [window/options/desktop\_window\_options.ts:13](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/desktop_window_options.ts#L13)

Desktop-specific window options.

This interface currently does not add any new properties beyond
[Options](Options.md), but exists to provide semantic clarity and allow
future desktop-only extensions.

## See

[Options](Options.md)

## Extends

- [`Options`](Options.md)

## Properties

### allowLocalFileAccess?

> `optional` **allowLocalFileAccess**: `boolean`

Defined in: [window/options/window\_options.ts:188](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L188)

Enables access to the `file://` scheme from JavaScript.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`allowLocalFileAccess`](Options.md#allowlocalfileaccess)

***

### autoDpi?

> `optional` **autoDpi**: `boolean`

Defined in: [window/options/window\_options.ts:108](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L108)

Indicates whether provided dimensions should automatically account for
DPI scaling.

#### Remarks

- For `DesktopWindow`: Currently unsupported.
- For `OSRWindow`: Default is `false` for `DesktopOnly`, `true` for
  other types.

#### Default

- `OSRWindow`: `false` for `DesktopOnly`, `true` otherwise
- `DesktopWindow`: unsupported

#### Inherited from

[`Options`](Options.md).[`autoDpi`](Options.md#autodpi)

***

### autoZoom?

> `optional` **autoZoom**: `boolean`

Defined in: [window/options/window\_options.ts:123](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L123)

Indicates whether the window zoom level should automatically account for
DPI scaling.

#### Remarks

- For `DesktopWindow`: Currently unsupported.
- For `OSRWindow`: Default is `false` for `DesktopOnly`, `true` for
  other types.

#### Default

- `OSRWindow`: `false` for `DesktopOnly`, `true` otherwise
- `DesktopWindow`: unsupported

#### Inherited from

[`Options`](Options.md).[`autoZoom`](Options.md#autozoom)

***

### blockTopWindowNavigation?

> `optional` **blockTopWindowNavigation**: `boolean`

Defined in: [window/options/window\_options.ts:205](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L205)

Prevents scripts or iframes from navigating the top-level window
to a different URL.

Instead, the URL will be opened in the system browser.

#### Default

```ts
true
```

#### Inherited from

[`Options`](Options.md).[`blockTopWindowNavigation`](Options.md#blocktopwindownavigation)

***

### disableAnimations?

> `optional` **disableAnimations**: `boolean`

Defined in: [window/options/window\_options.ts:212](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L212)

Disables minimize and restore animations while in game.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`disableAnimations`](Options.md#disableanimations)

***

### disableBackgroundOptimization?

> `optional` **disableBackgroundOptimization**: `boolean`

Defined in: [window/options/window\_options.ts:153](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L153)

Disables JavaScript engine background optimizations for improved
performance.

#### Default

```ts
true
```

#### Inherited from

[`Options`](Options.md).[`disableBackgroundOptimization`](Options.md#disablebackgroundoptimization)

***

### disableBlur?

> `optional` **disableBlur**: `boolean`

Defined in: [window/options/window\_options.ts:219](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L219)

Prevents the JavaScript context from losing focus.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`disableBlur`](Options.md#disableblur)

***

### disableRightClick?

> `optional` **disableRightClick**: `boolean`

Defined in: [window/options/window\_options.ts:226](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L226)

Disables right-click interactions entirely for this window.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`disableRightClick`](Options.md#disablerightclick)

***

### dockPosition?

> `optional` **dockPosition**: [`Edge`](../enumerations/Edge.md)

Defined in: [window/options/window\_options.ts:56](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L56)

Dock the window to a specific edge of the screen.

#### Inherited from

[`Options`](Options.md).[`dockPosition`](Options.md#dockposition)

***

### grabFocusOnDesktop?

> `optional` **grabFocusOnDesktop**: `boolean`

Defined in: [window/options/window\_options.ts:164](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L164)

Indicates whether the window will automatically grab focus when opened
on desktop.

For in-game keyboard focus behavior, use `grabKeyboardFocus`.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`grabFocusOnDesktop`](Options.md#grabfocusondesktop)

***

### height?

> `optional` **height**: `number`

Defined in: [window/options/window\_options.ts:51](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L51)

The height of the window in pixels.

#### Inherited from

[`Options`](Options.md).[`height`](Options.md#height)

***

### id

> **id**: `string`

Defined in: [window/options/window\_options.ts:17](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L17)

Unique ID of the window. (Mandatory)

#### Inherited from

[`Options`](Options.md).[`id`](Options.md#id)

***

### isAltF4Blocked?

> `optional` **isAltF4Blocked**: `boolean`

Defined in: [window/options/window\_options.ts:137](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L137)

Blocks the user from closing the window using Alt+F4.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`isAltF4Blocked`](Options.md#isaltf4blocked)

***

### isMuted?

> `optional` **isMuted**: `boolean`

Defined in: [window/options/window\_options.ts:233](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L233)

Mutes all audio output from the window.

#### Default

```ts
true
```

#### Inherited from

[`Options`](Options.md).[`isMuted`](Options.md#ismuted)

***

### keepWindowLocation?

> `optional` **keepWindowLocation**: `boolean`

Defined in: [window/options/window\_options.ts:130](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L130)

Prevents the window location from changing when game focus changes.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`keepWindowLocation`](Options.md#keepwindowlocation)

***

### maxHeight?

> `optional` **maxHeight**: `number`

Defined in: [window/options/window\_options.ts:77](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L77)

The maximum height of the window in pixels.

#### Inherited from

[`Options`](Options.md).[`maxHeight`](Options.md#maxheight)

***

### maxWidth?

> `optional` **maxWidth**: `number`

Defined in: [window/options/window\_options.ts:72](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L72)

The maximum width of the window in pixels.

#### Inherited from

[`Options`](Options.md).[`maxWidth`](Options.md#maxwidth)

***

### minHeight?

> `optional` **minHeight**: `number`

Defined in: [window/options/window\_options.ts:67](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L67)

The minimum height of the window in pixels.

#### Inherited from

[`Options`](Options.md).[`minHeight`](Options.md#minheight)

***

### minWidth?

> `optional` **minWidth**: `number`

Defined in: [window/options/window\_options.ts:62](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L62)

The minimum width of the window in pixels.

#### Inherited from

[`Options`](Options.md).[`minWidth`](Options.md#minwidth)

***

### muteExcludedHosts?

> `optional` **muteExcludedHosts**: `string`[]

Defined in: [window/options/window\_options.ts:247](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L247)

A list of host patterns that will not be muted even when the window is
muted.

#### Example

```ts
muteExcludedHosts: [
  "*.youtube.*",
  "*.twitch.*"
]
```

#### Inherited from

[`Options`](Options.md).[`muteExcludedHosts`](Options.md#muteexcludedhosts)

***

### popupBlocker?

> `optional` **popupBlocker**: `boolean`

Defined in: [window/options/window\_options.ts:195](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L195)

Block all none user Gesture popups.

#### Default

```ts
true
```

#### Inherited from

[`Options`](Options.md).[`popupBlocker`](Options.md#popupblocker)

***

### resizable?

> `optional` **resizable**: `boolean`

Defined in: [window/options/window\_options.ts:93](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L93)

Indicates whether the window can be resized by the user.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`resizable`](Options.md#resizable)

***

### showInTaskBar?

> `optional` **showInTaskBar**: `boolean`

Defined in: [window/options/window\_options.ts:145](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L145)

Indicates whether the window is displayed in the Windows taskbar
and Alt+Tab window selection menu.

#### Default

```ts
true (native windows), false (OSR windows)
```

#### Inherited from

[`Options`](Options.md).[`showInTaskBar`](Options.md#showintaskbar)

***

### showMaximize?

> `optional` **showMaximize**: `boolean`

Defined in: [window/options/window\_options.ts:172](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L172)

Indicates whether to show the window maximize button.
Only relevant for Native or OSR non-transparent windows.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`showMaximize`](Options.md#showmaximize)

***

### showMinimize?

> `optional` **showMinimize**: `boolean`

Defined in: [window/options/window\_options.ts:181](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L181)

Indicates whether the window minimize button should be shown.

Relevant only for native windows or non-transparent OSR windows.

#### Default

```ts
true
```

#### Inherited from

[`Options`](Options.md).[`showMinimize`](Options.md#showminimize)

***

### topMost?

> `optional` **topMost**: `boolean`

Defined in: [window/options/window\_options.ts:86](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L86)

Indicates whether the window will stay on top of other Overwolf windows.

Use with care, as topmost windows can negatively impact user experience.

#### Default

```ts
false
```

#### Inherited from

[`Options`](Options.md).[`topMost`](Options.md#topmost)

***

### url?

> `optional` **url**: `string`

Defined in: [window/options/window\_options.ts:22](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L22)

The path or URL to load inside the window.

#### Inherited from

[`Options`](Options.md).[`url`](Options.md#url)

***

### visible?

> `optional` **visible**: `boolean`

Defined in: [window/options/window\_options.ts:27](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L27)

Indicates whether the window should be visible.

#### Inherited from

[`Options`](Options.md).[`visible`](Options.md#visible)

***

### width?

> `optional` **width**: `number`

Defined in: [window/options/window\_options.ts:46](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L46)

The width of the window in pixels.

#### Inherited from

[`Options`](Options.md).[`width`](Options.md#width)

***

### x?

> `optional` **x**: `number`

Defined in: [window/options/window\_options.ts:34](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L34)

The horizontal position of the window.

Mandatory if [y](Options.md#y) is provided.

#### Inherited from

[`Options`](Options.md).[`x`](Options.md#x)

***

### y?

> `optional` **y**: `number`

Defined in: [window/options/window\_options.ts:42](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/window_options.ts#L42)

/**
 * The vertical position of the window.
 *
 * Mandatory if [x](Options.md#x) is provided.

#### Inherited from

[`Options`](Options.md).[`y`](Options.md#y)
