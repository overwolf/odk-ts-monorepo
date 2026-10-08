[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / WindowBase

# Abstract Class: WindowBase

Defined in: [window/window\_base.ts:41](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L41)

## Extends

- `EventEmitter`

## Extended by

- [`OSRWindow`](OSRWindow.md)
- [`DesktopWindow`](DesktopWindow.md)

## Constructors

### Constructor

> **new WindowBase**(`options`, `id`): `WindowBase`

Defined in: [window/window\_base.ts:73](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L73)

WindowBase C'tor

#### Parameters

##### options

[`Options`](../interfaces/Options.md)

new window options (null when open existing window)

##### id

`string`

when open existing window (for internal use)

#### Returns

`WindowBase`

#### Overrides

`EventEmitter.constructor`

## Properties

### \_eventHandlers

> **\_eventHandlers**: `Record`\<`string`, [`EventHandler`](../type-aliases/EventHandler.md)[] \| `undefined`\> = `{}`

Defined in: [lib/event\_emitter.ts:63](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L63)

the all event handlers are added.
it's a Map data structure(key-value), the key is event type, and the value is event handler.

#### Inherited from

`EventEmitter._eventHandlers`

## Accessors

### desktopOnly

#### Get Signature

> **get** **desktopOnly**(): `boolean`

Defined in: [window/window\_base.ts:803](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L803)

##### Returns

`boolean`

***

### isDesktopWindow

#### Get Signature

> **get** **isDesktopWindow**(): `boolean`

Defined in: [window/window\_base.ts:808](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L808)

##### Returns

`boolean`

## Methods

### anchor()

> **anchor**(`dock`, `marginOptions`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:602](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L602)

Anchors the window to the specified edge of the monitor with margin options.

This is a persistent operation: after anchoring, the window will remain attached to the specified edge
with the given margin, even if the user moves or resizes the window. The anchoring will be reapplied automatically
on window move/resize events.

#### Parameters

##### dock

[`Edge`](../enumerations/Edge.md)

The edge to which to anchor the window.

##### marginOptions

[`AnchorMarginOptions`](../interfaces/AnchorMarginOptions.md)

The margin options for anchoring.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if anchoring fails.

***

### assureCreated()

> **assureCreated**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:116](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L116)

Ensures that the window has been created.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the window is closed or not created.

***

### bringToFront()

> **bringToFront**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:185](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L185)

Brings the window to the front without focusing it.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

***

### bringToFrontWithFocus()

> **bringToFrontWithFocus**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:203](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L203)

Brings the window to the front and focuses it.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

***

### center()

> **center**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:222](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L222)

Centers the window on its current monitor.

#### Returns

`Promise`\<`boolean`\>

`true` if centering was applied successfully.

#### Throws

Error if centering fails.

***

### centerOnMonitor()

> **centerOnMonitor**(`monitor`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:244](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L244)

Centers the window on the specified monitor.

#### Parameters

##### monitor

[`Monitor`](../interfaces/Monitor.md)

The monitor on which to center the window.

#### Returns

`Promise`\<`boolean`\>

`true` if centering was applied successfully.

#### Throws

Error if centering fails.

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:376](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L376)

Closes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if closing the window fails.

***

### createEvent()

> **createEvent**(`type`, `data?`, `once?`): [`Event`](../interfaces/Event.md)\<`any`\>

Defined in: [lib/event\_emitter.ts:282](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L282)

create event object.

#### Parameters

##### type

`string`

event type

##### data?

`any`

event data

##### once?

`boolean` = `false`

is it an once event?

#### Returns

[`Event`](../interfaces/Event.md)\<`any`\>

#### Inherited from

`EventEmitter.createEvent`

***

### dock()

> **dock**(`dock`, `margin?`, `monitor?`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:566](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L566)

Docks the window to the specified edge of the monitor.

This is a one-time operation: the window will be positioned at the specified edge,
but if the user moves or resizes the window afterwards, it will not remain docked.
Use [anchor](#anchor) for persistent edge anchoring that is maintained after move/resize events.

#### Parameters

##### dock

[`Edge`](../enumerations/Edge.md)

The edge to which to dock the window.

##### margin?

[`AnchorMarginOptions`](../interfaces/AnchorMarginOptions.md)

Optional margin options.

##### monitor?

[`Monitor`](../interfaces/Monitor.md)

Optional monitor on which to dock the window. If not provided, the current monitor of the window will be used.

#### Returns

`Promise`\<`boolean`\>

`true` if docking was applied successfully.

#### Throws

Error if docking fails.

***

### dragResize()

> **dragResize**(`edge`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:695](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L695)

Starts resizing the window by dragging.

#### Parameters

##### edge

[`Edge`](../enumerations/Edge.md)

#### Returns

`Promise`\<`boolean`\>

`true` if resizing was completed successfully.

#### Throws

Error if starting resizing fails.

***

### fire()

> **fire**(`type`, ...`args`): `void`

Defined in: [lib/event\_emitter.ts:214](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L214)

fire the specified event, and you can to pass a data.
When fired, every handler attached to that event will be executed.
But, if it's an once event, listen off it immediately after called handler.

#### Parameters

##### type

`string`

event type

##### args

...`any`[]

arguments passed on to every handler after the event object

#### Returns

`void`

#### Example

```ts
const emitter = new EventEmitter();
 emitter.fire('change:name', 'new name');
```

#### Inherited from

`EventEmitter.fire`

***

### getBounds()

> **getBounds**(): `Promise`\<[`Rectangle`](../interfaces/Rectangle.md)\>

Defined in: [window/window\_base.ts:636](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L636)

Gets the bounds of the window.

#### Returns

`Promise`\<[`Rectangle`](../interfaces/Rectangle.md)\>

The bounds of the window.

#### Throws

Error if getting the bounds fails.

***

### getHandlers()

> **getHandlers**(`type`): [`EventHandler`](../type-aliases/EventHandler.md)\<`any`\>[]

Defined in: [lib/event\_emitter.ts:269](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L269)

get the handlers for the specified event type.

#### Parameters

##### type

`string`

event type

#### Returns

[`EventHandler`](../type-aliases/EventHandler.md)\<`any`\>[]

#### Example

```ts
const emitter = new EventEmitter();
 const handlers = emitter.getHandlers('change:name');
 console.log(handlers);
```

#### Inherited from

`EventEmitter.getHandlers`

***

### getWindowSize()

> **getWindowSize**(): `Promise`\<[`Size`](../interfaces/Size.md)\>

Defined in: [window/window\_base.ts:770](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L770)

Gets the effective size of the window, taking into account DPI scaling and AutoDPI settings.

#### Returns

`Promise`\<[`Size`](../interfaces/Size.md)\>

The effective `Size` (`width` and `height`) of the window.

***

### getWindowSizeOnMonitor()

> **getWindowSizeOnMonitor**(`monitor`): `Promise`\<[`Size`](../interfaces/Size.md)\>

Defined in: [window/window\_base.ts:787](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L787)

Gets the effective size of the window on the specified monitor, taking into account DPI scaling and AutoDPI settings.

#### Parameters

##### monitor

[`Monitor`](../interfaces/Monitor.md)

The monitor for which to calculate the window size.

#### Returns

`Promise`\<[`Size`](../interfaces/Size.md)\>

The effective `Size` (`width` and `height`) of the window on the specified monitor.

#### Remarks

If the monitor is not provided or does not have a `dpiScale`, this method falls back to the regular window size.

***

### getWindowState()

> **getWindowState**(): `Promise`\<[`WindowState`](../enumerations/WindowState.md)\>

Defined in: [window/window\_base.ts:746](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L746)

Gets the current state of the window.

#### Returns

`Promise`\<[`WindowState`](../enumerations/WindowState.md)\>

The current state of the window.

#### Throws

Error if getting the window state fails.

***

### getWindowStyles()

> **getWindowStyles**(): [`WindowStyle`](../enumerations/WindowStyle.md)[]

Defined in: [window/window\_base.ts:328](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L328)

Returns the window styles currently applied via [setWindowStyle](#setwindowstyle).

Note: Overwolf exposes no native getter for window styles, so this reflects
only styles applied (and not later removed) through this window instance.

#### Returns

[`WindowStyle`](../enumerations/WindowStyle.md)[]

***

### has()

> **has**(`type`, `handler?`): `boolean`

Defined in: [lib/event\_emitter.ts:245](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L245)

check whether the specified event has been listen on.
or check whether the events by type has been listen on, when if only `type` argument is passed.

#### Parameters

##### type

`string`

event type

##### handler?

[`EventHandler`](../type-aliases/EventHandler.md)

event handler, optional

#### Returns

`boolean`

#### Example

```ts
const emitter = new EventEmitter();
 const result = emitter.has('change:name');
```

#### Inherited from

`EventEmitter.has`

***

### hasWindowStyle()

> **hasWindowStyle**(`style`): `boolean`

Defined in: [window/window\_base.ts:338](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L338)

Returns `true` if the given window style is currently applied.

#### Parameters

##### style

[`WindowStyle`](../enumerations/WindowStyle.md)

The style to check.

#### Returns

`boolean`

***

### hide()

> **hide**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:418](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L418)

Hides the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if hiding the window fails.

***

### Id()

> **Id**(): `string`

Defined in: [window/window\_base.ts:106](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L106)

Gets the window ID.

#### Returns

`string`

The window ID(string).

***

### isOpen()

> **isOpen**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:721](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L721)

Checks if the window is open.

#### Returns

`Promise`\<`boolean`\>

`true` if the window is open; otherwise, `false`.

#### Throws

Error if checking the window state fails.

***

### isValidHandler()

> **isValidHandler**(`handler`): `boolean`

Defined in: [lib/event\_emitter.ts:81](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L81)

event handler validator.

#### Parameters

##### handler

[`EventHandler`](../type-aliases/EventHandler.md)

event handler

#### Returns

`boolean`

#### Inherited from

`EventEmitter.isValidHandler`

***

### isValidType()

> **isValidType**(`type`): `boolean`

Defined in: [lib/event\_emitter.ts:71](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L71)

event type validator.

#### Parameters

##### type

`string`

event type

#### Returns

`boolean`

#### Inherited from

`EventEmitter.isValidType`

***

### loadUrl()

> **loadUrl**(`url`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:138](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L138)

Loads the specified URL into the window.

#### Parameters

##### url

`string`

The URL to load.

#### Returns

`Promise`\<`boolean`\>

`true` if the URL was loaded successfully; otherwise, `false`.

#### Throws

Error if the URL loading fails.

***

### maximize()

> **maximize**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:454](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L454)

Maximizes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if maximizing the window fails.

***

### minimize()

> **minimize**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:436](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L436)

Minimizes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if minimizing the window fails.

***

### move()

> **move**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:674](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L674)

Starts dragging the window.

#### Returns

`Promise`\<`boolean`\>

`true` if dragging was completed successfully.

#### Throws

Error if starting dragging fails.

***

### mute()

> **mute**(`mute`, `all?`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:350](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L350)

Set current window Mute state/ mute all windows.

#### Parameters

##### mute

`boolean`

`true` to mute the window; `false` to unmute.

##### all?

`boolean`

`true` to mute all windows;

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

***

### off()

> **off**(`type?`, `handler?`): `void`

Defined in: [lib/event\_emitter.ts:165](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L165)

listen off an event by type and handler.
or listen off events by type, when if only type argument is passed.
or listen off all events, when if no arguments are passed.

#### Parameters

##### type?

`string`

event type

##### handler?

[`EventHandler`](../type-aliases/EventHandler.md)

event handler

#### Returns

`void`

#### Example

```ts
const emitter = new EventEmitter();
 // listen off the specified event
 emitter.off('change:name', evt => {
   console.log(evt);
 });
 // listen off events by type
 emitter.off('change:name');
 // listen off all events
 emitter.off();
```

#### Inherited from

`EventEmitter.off`

***

### offAll()

> **offAll**(): `void`

Defined in: [lib/event\_emitter.ts:199](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L199)

listen off all events, that means every event will be emptied.

#### Returns

`void`

#### Example

```ts
const emitter = new EventEmitter();
 emitter.offAll();
```

#### Inherited from

`EventEmitter.offAll`

***

### on()

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1402](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1402)

resized

##### Parameters

###### event

`"resized"`

###### listener

(`evt`, `newSize`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1416](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1416)

Moved

##### Parameters

###### event

`"moved"`

###### listener

(`evt`, `position`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1430](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1430)

Fired when monitor properties change.

##### Parameters

###### event

`"monitor-changed"`

###### listener

(`evt`, `monitor`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1438](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1438)

minimized

##### Parameters

###### event

`"minimized"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1456](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1456)

hide

##### Parameters

###### event

`"hide"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1474](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1474)

maximized

##### Parameters

###### event

`"maximized"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1492](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1492)

restore

##### Parameters

###### event

`"restore"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1510](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1510)

show

##### Parameters

###### event

`"show"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1528](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1528)

closed

##### Parameters

###### event

`"closed"`

###### listener

(`evt`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1533](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1533)

Fail to load window url

##### Parameters

###### event

`"load-error"`

###### listener

(`evt`) => `void`

##### Returns

`any`

##### Overrides

`EventEmitter.on`

***

### once()

> **once**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1542](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1542)

Window is ready to shown

#### Parameters

##### event

`"ready-to-show"`

##### listener

(`evt`) => `void`

#### Returns

`any`

#### Overrides

`EventEmitter.once`

***

### removeWindowStyle()

> **removeWindowStyle**(`style`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:303](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L303)

Removes an in-game window style from the window.

#### Parameters

##### style

[`WindowStyle`](../enumerations/WindowStyle.md)

The style to remove.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if removing the style fails.

***

### restore()

> **restore**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:472](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L472)

Restores the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if restoring the window fails.

***

### setBounds()

> **setBounds**(`rect`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:519](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L519)

Sets the bounds of the window(position and size).

#### Parameters

##### rect

[`Rectangle`](../interfaces/Rectangle.md)

The new bounds for the window.

#### Returns

`Promise`\<`boolean`\>

`true` if the bounds were set successfully.

#### Throws

Error if setting the bounds fails.

***

### setPosition()

> **setPosition**(`point`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:495](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L495)

Sets the position of the window.

#### Parameters

##### point

[`Point`](../interfaces/Point.md)

The new position for the window(top-left corner).

#### Returns

`Promise`\<`boolean`\>

`true` if the position was set successfully.

#### Throws

Error if setting the position fails.

***

### setSize()

> **setSize**(`size`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:507](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L507)

Sets the size of the window.

#### Parameters

##### size

[`Size`](../interfaces/Size.md)

The new size for the window.

#### Returns

`Promise`\<`boolean`\>

`true` if the size was set successfully.

#### Throws

Error if setting the size fails.

***

### setTopmost()

> **setTopmost**(`isTopmost`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:167](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L167)

Sets or unsets the window as topmost.

#### Parameters

##### isTopmost

`boolean`

`true` to set the window as topmost; `false` to unset it.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

***

### setWindowStyle()

> **setWindowStyle**(`style`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:278](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L278)

Adds an in-game window style to the window.

#### Parameters

##### style

[`WindowStyle`](../enumerations/WindowStyle.md)

The style to add.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if setting the style fails.

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:395](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L395)

Shows the window.

#### Returns

`Promise`\<`boolean`\>

`true` if the window was shown successfully.

#### Throws

Error if showing the window fails.

***

### type()

> `abstract` **type**(): [`WindowType`](../enumerations/WindowType.md)

Defined in: [window/window\_base.ts:93](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L93)

#### Returns

[`WindowType`](../enumerations/WindowType.md)

***

### zoom()

> **zoom**(`factor`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:265](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L265)

Sets the zoom factor for the window.

#### Parameters

##### factor

`number`

The zoom factor to set.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if setting the zoom factor fails.
