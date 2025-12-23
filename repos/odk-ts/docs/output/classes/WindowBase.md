[**odk-ts v1.0.5**](../README.md)

***

[odk-ts](../globals.md) / WindowBase

# Abstract Class: WindowBase

## Extends

- `EventEmitter`

## Extended by

- [`OSRWindow`](OSRWindow.md)
- [`DesktopWindow`](DesktopWindow.md)

## Constructors

### Constructor

> **new WindowBase**(`options`, `id`): `WindowBase`

WindowBase C'tor

#### Parameters

##### options

`Options`

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

> **\_eventHandlers**: `Record`\<`string`, `EventHandler`[] \| `undefined`\> = `{}`

the all event handlers are added.
it's a Map data structure(key-value), the key is event type, and the value is event handler.

#### Memberof

EventEmitter

#### Inherited from

`EventEmitter._eventHandlers`

***

### closed

> `protected` **closed**: `boolean`

***

### id

> `protected` **id**: `string`

***

### isDragging

> `protected` **isDragging**: `boolean`

***

### logger

> `protected` `readonly` **logger**: `Category`

***

### options

> `protected` **options**: `WindowRuntimeOptions`

***

### owWindowInfo

> `protected` **owWindowInfo**: `WindowInfo`

## Accessors

### desktopOnly

#### Get Signature

> **get** **desktopOnly**(): `boolean`

##### Returns

`boolean`

***

### windowInfo

#### Get Signature

> **get** **windowInfo**(): `WindowInfo`

##### Returns

`WindowInfo`

***

### windowOptions

#### Get Signature

> **get** **windowOptions**(): `WindowRuntimeOptions`

##### Returns

`WindowRuntimeOptions`

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

***

### assureCreated()

> **assureCreated**(): `Promise`\<`void`\>

Ensures that the window has been created.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the window is closed or not created.

***

### bringToFront()

> **bringToFront**(): `Promise`\<`void`\>

Brings the window to the front without focusing it.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

***

### bringToFrontWithFocus()

> **bringToFrontWithFocus**(): `Promise`\<`void`\>

Brings the window to the front and focuses it.

*

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the operation fails.

***

### center()

> **center**(): `Promise`\<`boolean`\>

Centers the window on its current monitor.

#### Returns

`Promise`\<`boolean`\>

`true` if centering was applied successfully.

#### Throws

Error if centering fails.

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

***

### close()

> **close**(): `Promise`\<`void`\>

Closes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if closing the window fails.

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

`EventEmitter.createEvent`

***

### dock()

> **dock**(`dock`, `margin?`, `monitor?`): `Promise`\<`boolean`\>

Docks the window to the specified edge of the monitor.

This is a one-time operation: the window will be positioned at the specified edge,
but if the user moves or resizes the window afterwards, it will not remain docked.
Use [anchor](#anchor) for persistent edge anchoring that is maintained after move/resize events.

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

`EventEmitter.fire`

***

### getBounds()

> **getBounds**(): `Promise`\<`Rectangle`\>

Gets the bounds of the window.

#### Returns

`Promise`\<`Rectangle`\>

The bounds of the window.

#### Throws

Error if getting the bounds fails.

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

`EventEmitter.getHandlers`

***

### getWindowState()

> **getWindowState**(): `Promise`\<`WindowStateEx`\>

Gets the current state of the window.

#### Returns

`Promise`\<`WindowStateEx`\>

The current state of the window.

#### Throws

Error if getting the window state fails.

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

`EventEmitter.has`

***

### hide()

> **hide**(): `Promise`\<`void`\>

Hides the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if hiding the window fails.

***

### Id()

> **Id**(): `string`

Gets the window ID.

#### Returns

`string`

The window ID(string).

***

### isOpen()

> **isOpen**(): `Promise`\<`boolean`\>

Checks if the window is open.

#### Returns

`Promise`\<`boolean`\>

`true` if the window is open; otherwise, `false`.

#### Throws

Error if checking the window state fails.

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

`EventEmitter.isValidHandler`

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

`EventEmitter.isValidType`

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

***

### maximize()

> **maximize**(): `Promise`\<`void`\>

Maximizes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if maximizing the window fails.

***

### minimize()

> **minimize**(): `Promise`\<`void`\>

Minimizes the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if minimizing the window fails.

***

### move()

> **move**(): `Promise`\<`boolean`\>

Starts dragging the window.

#### Returns

`Promise`\<`boolean`\>

`true` if dragging was completed successfully.

#### Throws

Error if starting dragging fails.

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

`EventEmitter.off`

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

`EventEmitter.offAll`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

##### Overrides

`EventEmitter.on`

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

#### Overrides

`EventEmitter.once`

***

### onWindowClosed()

> **onWindowClosed**(): `void`

#### Returns

`void`

***

### onWindowDPIChanged()

> `protected` **onWindowDPIChanged**(`args`): `Promise`\<`void`\>

Handles DPI changes for the window.

#### Parameters

##### args

`DPIChangedArgs`

#### Returns

`Promise`\<`void`\>

***

### onWindowDragStarted()

> `protected` **onWindowDragStarted**(`window`): `void`

Handles the start of window dragging.

#### Parameters

##### window

`WindowInfo`

#### Returns

`void`

***

### onWindowLoadError()

> `protected` **onWindowLoadError**(`window`): `void`

Handles the 'load error' event for the window and fires the corresponding event.

#### Parameters

##### window

`any`

#### Returns

`void`

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

***

### onWindowMoved()

> `protected` **onWindowMoved**(`window`): `Promise`\<`void`\>

Handles window move events, firing the 'moved' event with the new position.

#### Parameters

##### window

`WindowInfo`

#### Returns

`Promise`\<`void`\>

***

### onWindowReadyToShow()

> `protected` **onWindowReadyToShow**(`window`): `void`

Handles the 'ready to show' event for the window and fires the corresponding event.

#### Parameters

##### window

`any`

#### Returns

`void`

***

### onWindowResized()

> `protected` **onWindowResized**(`window`): `Promise`\<`void`\>

Handles window resize events, firing the 'resized' event with the new size.

#### Parameters

##### window

`WindowInfo`

#### Returns

`Promise`\<`void`\>

***

### restore()

> **restore**(): `Promise`\<`void`\>

Restores the window.

#### Returns

`Promise`\<`void`\>

#### Throws

Error if restoring the window fails.

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

***

### setDefaultOption()

> `protected` **setDefaultOption**(`options`): `void`

#### Parameters

##### options

`Options`

#### Returns

`void`

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

***

### type()

> `abstract` **type**(): `WindowType`

#### Returns

`WindowType`

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
