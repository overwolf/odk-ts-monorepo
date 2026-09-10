[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / OSRWindowOptions

# Interface: OSRWindowOptions

Defined in: [window/options/osr\_window\_options.ts:15](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L15)

Options for configuring an OSR (Off-Screen Rendering) window.

These options extend the base [Options](Options.md) and control OSR-specific
behavior such as transparency, input handling, focus management,
and in-game interaction.

## See

 - [Options](Options.md)
 - [OSRType](../enumerations/OSRType.md)

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

### bottommost?

> `optional` **bottommost**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:68](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L68)

Indicates whether the window will be under all other Overwolf windows (In Game only).

#### Default

```ts
false
```

***

### clickThrough?

> `optional` **clickThrough**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:37](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L37)

Indicates whether the window will not receive clicks in-game.
Instead, the clicks will be passed on to the game.

#### Default

```ts
false
```

***

### desktopOnly?

> `optional` **desktopOnly**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:89](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L89)

Indicates whether the window will be visible only on the desktop and not while in game.

#### Default

```ts
false
```

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

### disableDirectRendering?

> `optional` **disableDirectRendering**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:75](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L75)

Disable fully transparent window direct overlay rendering (to improve performance).

#### Default

```ts
false
```

***

### disableHardwareAcceleration?

> `optional` **disableHardwareAcceleration**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:108](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L108)

Disable GPU hardware acceleration, per window.

#### Default

```ts
true (disabled in OSR windows)
```

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

### dpiUnAware?

> `optional` **dpiUnAware**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:117](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L117)

Indicates whether the window will be DPI unaware.
Relevant only for in-game OSR windows.(e.g. type: OSRType.InGameOnly).
When enabled, the window will not scale according to the system DPI settings.

#### Default

```ts
false
```

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

### grabKeyboardFocus?

> `optional` **grabKeyboardFocus**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:53](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L53)

Indicates whether the window will grab the keyboard focus automatically
when it opens, or leave the keyboard focus untouched.

#### Default

```ts
false
```

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

### ignoreKeyboardEvents?

> `optional` **ignoreKeyboardEvents**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:45](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L45)

Indicates whether the window will not receive keyboard events.
When enabled, keyboard input is passed through to the game.

#### Default

```ts
false
```

***

### inputPassThrough?

> `optional` **inputPassThrough**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:82](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L82)

Mouse and keyboard input will pass through window the to game (no input blocking).

#### Default

```ts
false
```

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

### restrictToGameBounds?

> `optional` **restrictToGameBounds**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:61](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L61)

Restrict window to game client (window) area.
When enabled, the window will always remain inside the game window
while being dragged.

#### Default

```ts
false
```

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

### takeOverAction?

> `optional` **takeOverAction**: `"ReleaseOnHidden"` \| `"ReleaseOnLostFocus"`

Defined in: [window/options/osr\_window\_options.ts:94](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L94)

Allows you to control the behavior of an app window while in a “mouse-less” game state.

***

### takeOverReleaseHotkey?

> `optional` **takeOverReleaseHotkey**: `string`

Defined in: [window/options/osr\_window\_options.ts:101](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L101)

Allow Overwolf to display your app’s hotkey combination on the screen when the user switches to “exclusive mode”.
The string value should be the hotkey name from the hotkeys section.
Relevant only if you set takeOverAction=ReleaseOnHidden.

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

### transparent?

> `optional` **transparent**: `boolean`

Defined in: [window/options/osr\_window\_options.ts:29](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L29)

Indicates whether the window will be transparent and borderless.
When enabled, mouse input is passed through to the game.

#### Default

```ts
true
```

***

### type?

> `optional` **type**: [`OSRType`](../enumerations/OSRType.md)

Defined in: [window/options/osr\_window\_options.ts:21](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/options/osr_window_options.ts#L21)

The type of the OSR window.

#### Default

OSRType.Default [OSRType](../enumerations/OSRType.md)

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
