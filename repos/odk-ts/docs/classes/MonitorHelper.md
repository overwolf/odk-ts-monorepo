# Class: MonitorHelper

Helper class for monitor-related operations.

## Constructors

### Constructor

> **new MonitorHelper**(): `MonitorHelper`

#### Returns

`MonitorHelper`

## Methods

### getWindowMonitor()

> `static` **getWindowMonitor**(`window`): `Promise`\<`Monitor`\>

Gets the monitor where the window is displayed.

If the window is desktop only -> returns the monitor where the window is located.
If the window is in-game -> returns the monitor where the game is running.

#### Parameters

##### window

[`WindowBase`](WindowBase.md)

The window to get the monitor for.

#### Returns

`Promise`\<`Monitor`\>

A Monitor object describing the monitor bounds.

#### Throws

Error if the monitor cannot be determined.
