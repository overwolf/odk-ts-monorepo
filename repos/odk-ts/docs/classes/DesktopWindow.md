[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / DesktopWindow

# Class: DesktopWindow

Defined in: [window/desktop\_window.ts:26](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/desktop_window.ts#L26)

`DesktopWindow` extends [WindowBase](WindowBase.md) and provides functionality
specific to desktop-type windows. It exposes the window type and
supports desktop-only operations such as resizing from a specific edge.

## Example

```ts
const window = new DesktopWindow({
  id: 'my_desktop_window',
  url: 'desktop.html',
  width: 800,
  height: 600,
});
const type = window.type(); // WindowType.Desktop
```

## See

 - [WindowBase](WindowBase.md)
 - [DesktopWindowOptions](../interfaces/DesktopWindowOptions.md)
 - [WindowType](../enumerations/WindowType.md)

## Extends

- [`WindowBase`](WindowBase.md)

## Constructors

### Constructor

> **new DesktopWindow**(`options`): `DesktopWindow`

Defined in: [window/desktop\_window.ts:33](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/desktop_window.ts#L33)

Creates a new DesktopWindow.

#### Parameters

##### options

[`DesktopWindowOptions`](../interfaces/DesktopWindowOptions.md)

Configuration options for the desktop window.

#### Returns

`DesktopWindow`

#### Overrides

[`WindowBase`](WindowBase.md).[`constructor`](WindowBase.md#constructor)

## Properties

### \_eventHandlers

> **\_eventHandlers**: `Record`\<`string`, [`EventHandler`](../type-aliases/EventHandler.md)[] \| `undefined`\> = `{}`

Defined in: [lib/event\_emitter.ts:63](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/lib/event_emitter.ts#L63)

the all event handlers are added.
it's a Map data structure(key-value), the key is event type, and the value is event handler.

#### Inherited from

[`WindowBase`](WindowBase.md).[`_eventHandlers`](WindowBase.md#_eventhandlers)

## Accessors

### desktopOnly

#### Get Signature

> **get** **desktopOnly**(): `boolean`

Defined in: [window/window\_base.ts:801](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L801)

##### Returns

`boolean`

#### Inherited from

[`WindowBase`](WindowBase.md).[`desktopOnly`](WindowBase.md#desktoponly)

***

### isDesktopWindow

#### Get Signature

> **get** **isDesktopWindow**(): `boolean`

Defined in: [window/window\_base.ts:806](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L806)

##### Returns

`boolean`

#### Inherited from

[`WindowBase`](WindowBase.md).[`isDesktopWindow`](WindowBase.md#isdesktopwindow)

## Methods

### anchor()

> **anchor**(`dock`, `marginOptions`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:600](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L600)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`anchor`](WindowBase.md#anchor)

***

### assureCreated()

> **assureCreated**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:114](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L114)

Ensures that the window has been created.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the window is closed or not created.

#### Inherited from

[`WindowBase`](WindowBase.md).[`assureCreated`](WindowBase.md#assurecreated)

***

### bringToFront()

> **bringToFront**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:183](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L183)

Brings the window to the front without focusing it.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`bringToFront`](WindowBase.md#bringtofront)

***

### bringToFrontWithFocus()

> **bringToFrontWithFocus**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:201](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L201)

Brings the window to the front and focuses it.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`bringToFrontWithFocus`](WindowBase.md#bringtofrontwithfocus)

***

### center()

> **center**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:220](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L220)

Centers the window on its current monitor.

#### Returns

`Promise`\<`boolean`\>

`true` if centering was applied successfully.

#### Throws

Error if centering fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`center`](WindowBase.md#center)

***

### centerOnMonitor()

> **centerOnMonitor**(`monitor`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:242](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L242)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`centerOnMonitor`](WindowBase.md#centeronmonitor)

***

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:374](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L374)

Closes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if closing the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`close`](WindowBase.md#close)

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

[`WindowBase`](WindowBase.md).[`createEvent`](WindowBase.md#createevent)

***

### dock()

> **dock**(`dock`, `margin?`, `monitor?`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:564](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L564)

Docks the window to the specified edge of the monitor.

This is a one-time operation: the window will be positioned at the specified edge,
but if the user moves or resizes the window afterwards, it will not remain docked.
Use [anchor](WindowBase.md#anchor) for persistent edge anchoring that is maintained after move/resize events.

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`dock`](WindowBase.md#dock)

***

### dragResize()

> **dragResize**(`edge`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:693](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L693)

Starts resizing the window by dragging.

#### Parameters

##### edge

[`Edge`](../enumerations/Edge.md)

#### Returns

`Promise`\<`boolean`\>

`true` if resizing was completed successfully.

#### Throws

Error if starting resizing fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`dragResize`](WindowBase.md#dragresize)

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

[`WindowBase`](WindowBase.md).[`fire`](WindowBase.md#fire)

***

### getBounds()

> **getBounds**(): `Promise`\<[`Rectangle`](../interfaces/Rectangle.md)\>

Defined in: [window/window\_base.ts:634](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L634)

Gets the bounds of the window.

#### Returns

`Promise`\<[`Rectangle`](../interfaces/Rectangle.md)\>

The bounds of the window.

#### Throws

Error if getting the bounds fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`getBounds`](WindowBase.md#getbounds)

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

[`WindowBase`](WindowBase.md).[`getHandlers`](WindowBase.md#gethandlers)

***

### getWindowSize()

> **getWindowSize**(): `Promise`\<[`Size`](../interfaces/Size.md)\>

Defined in: [window/window\_base.ts:768](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L768)

Gets the effective size of the window, taking into account DPI scaling and AutoDPI settings.

#### Returns

`Promise`\<[`Size`](../interfaces/Size.md)\>

The effective `Size` (`width` and `height`) of the window.

#### Inherited from

[`WindowBase`](WindowBase.md).[`getWindowSize`](WindowBase.md#getwindowsize)

***

### getWindowSizeOnMonitor()

> **getWindowSizeOnMonitor**(`monitor`): `Promise`\<[`Size`](../interfaces/Size.md)\>

Defined in: [window/window\_base.ts:785](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L785)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`getWindowSizeOnMonitor`](WindowBase.md#getwindowsizeonmonitor)

***

### getWindowState()

> **getWindowState**(): `Promise`\<[`WindowState`](../enumerations/WindowState.md)\>

Defined in: [window/window\_base.ts:744](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L744)

Gets the current state of the window.

#### Returns

`Promise`\<[`WindowState`](../enumerations/WindowState.md)\>

The current state of the window.

#### Throws

Error if getting the window state fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`getWindowState`](WindowBase.md#getwindowstate)

***

### getWindowStyles()

> **getWindowStyles**(): [`WindowStyle`](../enumerations/WindowStyle.md)[]

Defined in: [window/window\_base.ts:326](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L326)

Returns the window styles currently applied via [setWindowStyle](WindowBase.md#setwindowstyle).

Note: Overwolf exposes no native getter for window styles, so this reflects
only styles applied (and not later removed) through this window instance.

#### Returns

[`WindowStyle`](../enumerations/WindowStyle.md)[]

#### Inherited from

[`WindowBase`](WindowBase.md).[`getWindowStyles`](WindowBase.md#getwindowstyles)

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

[`WindowBase`](WindowBase.md).[`has`](WindowBase.md#has)

***

### hasWindowStyle()

> **hasWindowStyle**(`style`): `boolean`

Defined in: [window/window\_base.ts:336](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L336)

Returns `true` if the given window style is currently applied.

#### Parameters

##### style

[`WindowStyle`](../enumerations/WindowStyle.md)

The style to check.

#### Returns

`boolean`

#### Inherited from

[`WindowBase`](WindowBase.md).[`hasWindowStyle`](WindowBase.md#haswindowstyle)

***

### hide()

> **hide**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:416](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L416)

Hides the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if hiding the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`hide`](WindowBase.md#hide)

***

### Id()

> **Id**(): `string`

Defined in: [window/window\_base.ts:104](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L104)

Gets the window ID.

#### Returns

`string`

The window ID(string).

#### Inherited from

[`WindowBase`](WindowBase.md).[`Id`](WindowBase.md#id)

***

### isOpen()

> **isOpen**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:719](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L719)

Checks if the window is open.

#### Returns

`Promise`\<`boolean`\>

`true` if the window is open; otherwise, `false`.

#### Throws

Error if checking the window state fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`isOpen`](WindowBase.md#isopen)

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

[`WindowBase`](WindowBase.md).[`isValidHandler`](WindowBase.md#isvalidhandler)

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

[`WindowBase`](WindowBase.md).[`isValidType`](WindowBase.md#isvalidtype)

***

### loadUrl()

> **loadUrl**(`url`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:136](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L136)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`loadUrl`](WindowBase.md#loadurl)

***

### maximize()

> **maximize**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:452](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L452)

Maximizes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if maximizing the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`maximize`](WindowBase.md#maximize)

***

### minimize()

> **minimize**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:434](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L434)

Minimizes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if minimizing the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`minimize`](WindowBase.md#minimize)

***

### move()

> **move**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:672](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L672)

Starts dragging the window.

#### Returns

`Promise`\<`boolean`\>

`true` if dragging was completed successfully.

#### Throws

Error if starting dragging fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`move`](WindowBase.md#move)

***

### mute()

> **mute**(`mute`, `all?`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:348](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L348)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`mute`](WindowBase.md#mute)

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

[`WindowBase`](WindowBase.md).[`off`](WindowBase.md#off)

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

[`WindowBase`](WindowBase.md).[`offAll`](WindowBase.md#offall)

***

### on()

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1373](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1373)

resized

##### Parameters

###### event

`"resized"`

###### listener

(`evt`, `newSize`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1387](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1387)

Moved

##### Parameters

###### event

`"moved"`

###### listener

(`evt`, `position`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1401](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1401)

Fired when monitor properties change.

##### Parameters

###### event

`"monitor-changed"`

###### listener

(`evt`, `monitor`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1409](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1409)

minimized

##### Parameters

###### event

`"minimized"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1427](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1427)

hide

##### Parameters

###### event

`"hide"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1445](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1445)

maximized

##### Parameters

###### event

`"maximized"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1463](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1463)

restore

##### Parameters

###### event

`"restore"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1481](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1481)

show

##### Parameters

###### event

`"show"`

###### listener

(`evt`, `newState`, `prevState`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1499](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1499)

closed

##### Parameters

###### event

`"closed"`

###### listener

(`evt`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

#### Call Signature

> **on**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1504](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1504)

Fail to load window url

##### Parameters

###### event

`"load-error"`

###### listener

(`evt`) => `void`

##### Returns

`any`

##### Inherited from

[`WindowBase`](WindowBase.md).[`on`](WindowBase.md#on)

***

### once()

> **once**(`event`, `listener`): `any`

Defined in: [window/window\_base.ts:1513](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L1513)

Window is ready to shown

#### Parameters

##### event

`"ready-to-show"`

##### listener

(`evt`) => `void`

#### Returns

`any`

#### Inherited from

[`WindowBase`](WindowBase.md).[`once`](WindowBase.md#once)

***

### removeWindowStyle()

> **removeWindowStyle**(`style`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:301](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L301)

Removes an in-game window style from the window.

#### Parameters

##### style

[`WindowStyle`](../enumerations/WindowStyle.md)

The style to remove.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if removing the style fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`removeWindowStyle`](WindowBase.md#removewindowstyle)

***

### resize()

> **resize**(`edge`): `Promise`\<`boolean`\>

Defined in: [window/desktop\_window.ts:86](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/desktop_window.ts#L86)

Resizes the window by dragging the specified edge.

#### Parameters

##### edge

[`Edge`](../enumerations/Edge.md)

The edge of the window to resize from.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to `true` if the resize was successful.

#### Remarks

**Not implemented yet.** Calling this method always throws. Use
[WindowBase.dragResize](WindowBase.md#dragresize) to start an interactive resize, or
[WindowBase.setSize](WindowBase.md#setsize) / [WindowBase.setBounds](WindowBase.md#setbounds) to resize
programmatically.

#### Throws

Error always, until this method is implemented.

***

### restore()

> **restore**(): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:470](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L470)

Restores the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if restoring the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`restore`](WindowBase.md#restore)

***

### setBounds()

> **setBounds**(`rect`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:517](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L517)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`setBounds`](WindowBase.md#setbounds)

***

### setPosition()

> **setPosition**(`point`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:493](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L493)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`setPosition`](WindowBase.md#setposition)

***

### setSize()

> **setSize**(`size`): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:505](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L505)

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

#### Inherited from

[`WindowBase`](WindowBase.md).[`setSize`](WindowBase.md#setsize)

***

### setTopmost()

> **setTopmost**(`isTopmost`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:165](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L165)

Sets or unsets the window as topmost.

#### Parameters

##### isTopmost

`boolean`

`true` to set the window as topmost; `false` to unset it.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`setTopmost`](WindowBase.md#settopmost)

***

### setWindowStyle()

> **setWindowStyle**(`style`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:276](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L276)

Adds an in-game window style to the window.

#### Parameters

##### style

[`WindowStyle`](../enumerations/WindowStyle.md)

The style to add.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if setting the style fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`setWindowStyle`](WindowBase.md#setwindowstyle)

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [window/window\_base.ts:393](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L393)

Shows the window.

#### Returns

`Promise`\<`boolean`\>

`true` if the window was shown successfully.

#### Throws

Error if showing the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`show`](WindowBase.md#show)

***

### type()

> **type**(): [`WindowType`](../enumerations/WindowType.md)

Defined in: [window/desktop\_window.ts:67](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/desktop_window.ts#L67)

Returns the type of this window.

#### Returns

[`WindowType`](../enumerations/WindowType.md)

[WindowType.Desktop](../enumerations/WindowType.md#desktop)

#### Overrides

[`WindowBase`](WindowBase.md).[`type`](WindowBase.md#type)

***

### zoom()

> **zoom**(`factor`): `Promise`\<`void`\>

Defined in: [window/window\_base.ts:263](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/window_base.ts#L263)

Sets the zoom factor for the window.

#### Parameters

##### factor

`number`

The zoom factor to set.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if setting the zoom factor fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`zoom`](WindowBase.md#zoom)
