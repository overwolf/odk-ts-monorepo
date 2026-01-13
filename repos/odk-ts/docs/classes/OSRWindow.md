# Class: OSRWindow

`OSRWindow` extends [WindowBase](WindowBase.md) and represents a window rendered
offscreen and composited as an in-game or transparent desktop
overlays, rather than drawn directly into a native desktop window.

## Example

```ts
const window = new OSRWindow({ desktopOnly: true });
const type = window.type(); // WindowType.Offscreen
```

## See

 - [WindowBase](WindowBase.md)
 - OSRWindowOptions
 - WindowType

## Extends

- [`WindowBase`](WindowBase.md)

## Constructors

### Constructor

> **new OSRWindow**(`options`, `self?`, `id?`): `OSRWindow`

Creates a new OSRWindow.

#### Parameters

##### options

`OSRWindowOptions`

— Configuration options for the OSR window.

##### self?

`boolean`

—

##### id?

`string`

—

#### Returns

`OSRWindow`

#### Overrides

[`WindowBase`](WindowBase.md).[`constructor`](WindowBase.md#constructor)

## Properties

### \_eventHandlers

> **\_eventHandlers**: `Record`\<`string`, `EventHandler`[] \| `undefined`\> = `{}`

the all event handlers are added.
it's a Map data structure(key-value), the key is event type, and the value is event handler.

#### Memberof

EventEmitter

#### Inherited from

[`WindowBase`](WindowBase.md).[`_eventHandlers`](WindowBase.md#_eventhandlers)

***

### closed

> `protected` **closed**: `boolean`

#### Inherited from

[`WindowBase`](WindowBase.md).[`closed`](WindowBase.md#closed)

***

### id

> `protected` **id**: `string`

#### Inherited from

[`WindowBase`](WindowBase.md).[`id`](WindowBase.md#id)

***

### isDragging

> `protected` **isDragging**: `boolean`

#### Inherited from

[`WindowBase`](WindowBase.md).[`isDragging`](WindowBase.md#isdragging)

***

### logger

> `protected` `readonly` **logger**: `Category`

#### Inherited from

[`WindowBase`](WindowBase.md).[`logger`](WindowBase.md#logger)

***

### options

> `protected` **options**: `WindowRuntimeOptions`

#### Inherited from

[`WindowBase`](WindowBase.md).[`options`](WindowBase.md#options)

***

### owWindowInfo

> `protected` **owWindowInfo**: `WindowInfo`

#### Inherited from

[`WindowBase`](WindowBase.md).[`owWindowInfo`](WindowBase.md#owwindowinfo)

## Accessors

### desktopOnly

#### Get Signature

> **get** **desktopOnly**(): `boolean`

Indicates whether this window should be treated as desktop-only.
When defined in OSRWindowOptions, the `desktopOnly` flag overrides
the base window behavior. If not specified, the value from
[WindowBase.desktopOnly](WindowBase.md#desktoponly) is used.

##### Returns

`boolean`

`true` if the window is restricted to desktop usage.

#### Overrides

[`WindowBase`](WindowBase.md).[`desktopOnly`](WindowBase.md#desktoponly)

***

### windowInfo

#### Get Signature

> **get** **windowInfo**(): `WindowInfo`

##### Returns

`WindowInfo`

#### Inherited from

[`WindowBase`](WindowBase.md).[`windowInfo`](WindowBase.md#windowinfo)

***

### windowOptions

#### Get Signature

> **get** **windowOptions**(): `WindowRuntimeOptions`

##### Returns

`WindowRuntimeOptions`

#### Inherited from

[`WindowBase`](WindowBase.md).[`windowOptions`](WindowBase.md#windowoptions)

## Methods

### anchor()

> **anchor**(`dock`, `marginOptions`): `Promise`\<`void`\>

Anchors the window to the specified edge of the monitor with margin options.

This is a persistent operation: after anchoring, the window will remain attached to the specified edge
with the given margin, even if the user moves or resizes the window. The anchoring will be reapplied automatically
on window move/resize events.

#### Parameters

##### dock

`Edge`

The edge to which to anchor the window.

##### marginOptions

`AnchorMarginOptions`

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

Brings the window to the front and focuses it.

*

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`bringToFrontWithFocus`](WindowBase.md#bringtofrontwithfocus)

***

### center()

> **center**(): `Promise`\<`boolean`\>

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

Centers the window on the specified monitor.

#### Parameters

##### monitor

`Monitor`

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

Closes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if closing the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`close`](WindowBase.md#close)

***

### createEvent()

> **createEvent**(`type`, `data?`, `once?`): `Event`\<`any`\>

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

`Event`\<`any`\>

#### Memberof

EventEmitter

#### Inherited from

[`WindowBase`](WindowBase.md).[`createEvent`](WindowBase.md#createevent)

***

### dock()

> **dock**(`dock`, `margin?`, `monitor?`): `Promise`\<`boolean`\>

Docks the window to the specified edge of the monitor.

This is a one-time operation: the window will be positioned at the specified edge,
but if the user moves or resizes the window afterwards, it will not remain docked.
Use [anchor](WindowBase.md#anchor) for persistent edge anchoring that is maintained after move/resize events.

#### Parameters

##### dock

`Edge`

The edge to which to dock the window.

##### margin?

`AnchorMarginOptions`

Optional margin options.

##### monitor?

`Monitor`

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

Starts resizing the window by dragging.

#### Parameters

##### edge

`WindowDragEdge`

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

fire the specified event, and you can to pass a data.
When fired, every handler attached to that event will be executed.
But, if it's an once event, listen off it immediately after called handler.

#### Parameters

##### type

`string`

event type

##### args

...`any`[]

#### Returns

`void`

#### Memberof

EventEmitter

#### Example

```ts
const emitter = new EventEmitter();
 emitter.fire('change:name', 'new name');
```

#### Inherited from

[`WindowBase`](WindowBase.md).[`fire`](WindowBase.md#fire)

***

### getBounds()

> **getBounds**(): `Promise`\<`Rectangle`\>

Gets the bounds of the window.

#### Returns

`Promise`\<`Rectangle`\>

The bounds of the window.

#### Throws

Error if getting the bounds fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`getBounds`](WindowBase.md#getbounds)

***

### getHandlers()

> **getHandlers**(`type`): `EventHandler`\<`any`\>[]

get the handlers for the specified event type.

#### Parameters

##### type

`string`

event type

#### Returns

`EventHandler`\<`any`\>[]

#### Memberof

EventEmitter

#### Example

```ts
const emitter = new EventEmitter();
 const handlers = emitter.getHandlers('change:name');
 console.log(handlers);
```

#### Inherited from

[`WindowBase`](WindowBase.md).[`getHandlers`](WindowBase.md#gethandlers)

***

### getWindowState()

> **getWindowState**(): `Promise`\<`WindowStateEx`\>

Gets the current state of the window.

#### Returns

`Promise`\<`WindowStateEx`\>

The current state of the window.

#### Throws

Error if getting the window state fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`getWindowState`](WindowBase.md#getwindowstate)

***

### has()

> **has**(`type`, `handler?`): `boolean`

check whether the specified event has been listen on.
or check whether the events by type has been listen on, when if only `type` argument is passed.

#### Parameters

##### type

`string`

event type

##### handler?

`EventHandler`

event handler, optional

#### Returns

`boolean`

#### Memberof

EventEmitter

#### Example

```ts
const emitter = new EventEmitter();
 const result = emitter.has('change:name');
```

#### Inherited from

[`WindowBase`](WindowBase.md).[`has`](WindowBase.md#has)

***

### hide()

> **hide**(): `Promise`\<`void`\>

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

Gets the window ID.

#### Returns

`string`

The window ID(string).

#### Inherited from

[`WindowBase`](WindowBase.md).[`Id`](WindowBase.md#id-1)

***

### isOpen()

> **isOpen**(): `Promise`\<`boolean`\>

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

event handler validator.

#### Parameters

##### handler

`EventHandler`

event handler

#### Returns

`boolean`

#### Memberof

EventEmitter

#### Inherited from

[`WindowBase`](WindowBase.md).[`isValidHandler`](WindowBase.md#isvalidhandler)

***

### isValidType()

> **isValidType**(`type`): `boolean`

event type validator.

#### Parameters

##### type

`string`

event type

#### Returns

`boolean`

#### Memberof

EventEmitter

#### Inherited from

[`WindowBase`](WindowBase.md).[`isValidType`](WindowBase.md#isvalidtype)

***

### loadUrl()

> **loadUrl**(`url`): `Promise`\<`boolean`\>

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

listen off an event by type and handler.
or listen off events by type, when if only type argument is passed.
or listen off all events, when if no arguments are passed.

#### Parameters

##### type?

`string`

event type

##### handler?

`EventHandler`

event handler

#### Returns

`void`

#### Memberof

EventEmitter

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

listen off all events, that means every event will be emptied.

#### Returns

`void`

#### Memberof

EventEmitter

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

### onWindowClosed()

> **onWindowClosed**(): `void`

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowClosed`](WindowBase.md#onwindowclosed)

***

### onWindowDPIChanged()

> `protected` **onWindowDPIChanged**(`args`): `Promise`\<`void`\>

Handles DPI changes for the window.

#### Parameters

##### args

`DPIChangedArgs`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowDPIChanged`](WindowBase.md#onwindowdpichanged)

***

### onWindowDragStarted()

> `protected` **onWindowDragStarted**(`window`): `void`

Handles the start of window dragging.

#### Parameters

##### window

`WindowInfo`

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowDragStarted`](WindowBase.md#onwindowdragstarted)

***

### onWindowLoadError()

> `protected` **onWindowLoadError**(`window`): `void`

Handles the 'load error' event for the window and fires the corresponding event.

#### Parameters

##### window

`any`

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowLoadError`](WindowBase.md#onwindowloaderror)

***

### onWindowMonitorPropertyChanged()

> **onWindowMonitorPropertyChanged**(`monitor`, `window`): `Promise`\<`void`\>

#### Parameters

##### monitor

`Monitor`

##### window

`WindowInfo`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowMonitorPropertyChanged`](WindowBase.md#onwindowmonitorpropertychanged)

***

### onWindowMoved()

> `protected` **onWindowMoved**(`window`): `Promise`\<`void`\>

Handles window move events, firing the 'moved' event with the new position.

#### Parameters

##### window

`WindowInfo`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowMoved`](WindowBase.md#onwindowmoved)

***

### onWindowReadyToShow()

> `protected` **onWindowReadyToShow**(`window`): `void`

Handles the 'ready to show' event for the window and fires the corresponding event.

#### Parameters

##### window

`any`

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowReadyToShow`](WindowBase.md#onwindowreadytoshow)

***

### onWindowResized()

> `protected` **onWindowResized**(`window`): `Promise`\<`void`\>

Handles window resize events, firing the 'resized' event with the new size.

#### Parameters

##### window

`WindowInfo`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WindowBase`](WindowBase.md).[`onWindowResized`](WindowBase.md#onwindowresized)

***

### resize()

> **resize**(`edge`, `rect`): `Promise`\<`boolean`\>

Resizes the window by dragging the specified edge to the given rectangle.

#### Parameters

##### edge

`Edge`

— the edge of the window to resize from.

##### rect

`Rectangle`

— the target rectangle defining the new window bounds.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to `true` if the resize was successful.

***

### restore()

> **restore**(): `Promise`\<`void`\>

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

Sets the bounds of the window(position and size).

#### Parameters

##### rect

`Rectangle`

The new bounds for the window.

#### Returns

`Promise`\<`boolean`\>

`true` if the bounds were set successfully.

#### Throws

Error if setting the bounds fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`setBounds`](WindowBase.md#setbounds)

***

### setDefaultOption()

> `protected` **setDefaultOption**(`options`): `void`

#### Parameters

##### options

`Options`

#### Returns

`void`

#### Inherited from

[`WindowBase`](WindowBase.md).[`setDefaultOption`](WindowBase.md#setdefaultoption)

***

### setPosition()

> **setPosition**(`point`): `Promise`\<`boolean`\>

Sets the position of the window.

#### Parameters

##### point

`Point`

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

Sets the size of the window.

#### Parameters

##### size

`Size`

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

### show()

> **show**(): `Promise`\<`boolean`\>

Shows the window.

*

#### Returns

`Promise`\<`boolean`\>

`true` if the window was shown successfully.
*

#### Throws

Error if showing the window fails.

#### Inherited from

[`WindowBase`](WindowBase.md).[`show`](WindowBase.md#show)

***

### type()

> **type**(): `WindowType`

Returns the type of this window.

#### Returns

`WindowType`

WindowType.Offscreen

#### Overrides

[`WindowBase`](WindowBase.md).[`type`](WindowBase.md#type)

***

### zoom()

> **zoom**(`factor`): `Promise`\<`void`\>

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
