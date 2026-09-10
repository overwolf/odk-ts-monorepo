[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / MonitorHelper

# Class: MonitorHelper

Defined in: [window/utils/monitor\_helper.ts:7](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/utils/monitor_helper.ts#L7)

Helper class for monitor-related operations.

## Constructors

### Constructor

> **new MonitorHelper**(): `MonitorHelper`

#### Returns

`MonitorHelper`

## Methods

### getWindowMonitor()

> `static` **getWindowMonitor**(`window`): `Promise`\<[`Monitor`](../interfaces/Monitor.md)\>

Defined in: [window/utils/monitor\_helper.ts:19](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/utils/monitor_helper.ts#L19)

Gets the monitor where the window is displayed.

If the window is desktop only -> returns the monitor where the window is located.
If the window is in-game -> returns the monitor where the game is running.

#### Parameters

##### window

[`WindowBase`](WindowBase.md)

The window to get the monitor for.

#### Returns

`Promise`\<[`Monitor`](../interfaces/Monitor.md)\>

A Monitor object describing the monitor bounds.

#### Throws

Error if the monitor cannot be determined.
