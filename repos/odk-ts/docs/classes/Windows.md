[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / Windows

# Class: Windows

Defined in: [window/windows.ts:12](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/windows.ts#L12)

Utility class for managing Overwolf windows.

## Remarks

This class provides static methods to retrieve window instances based on the current window or by ID.

## Constructors

### Constructor

> **new Windows**(): `Windows`

#### Returns

`Windows`

## Methods

### FromId()

> `static` **FromId**(`id`): `Promise`\<[`WindowBase`](WindowBase.md)\>

Defined in: [window/windows.ts:70](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/windows.ts#L70)

Returns the `WindowBase` representing the Overwolf window with the given ID.

#### Parameters

##### id

`string`

The ID of the window to get.

#### Returns

`Promise`\<[`WindowBase`](WindowBase.md)\>

The window as a `WindowBase` object.

#### Throws

Error if the window cannot be found or if the window type is background or unknown.

***

### Self()

> `static` **Self**(): `Promise`\<[`WindowBase`](WindowBase.md)\>

Defined in: [window/windows.ts:26](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/windows.ts#L26)

Returns the `WindowBase` representing the current Overwolf window.

#### Returns

`Promise`\<[`WindowBase`](WindowBase.md)\>

The current window as a `WindowBase` object.

#### Throws

Error if called from the background page or if the window type is unknown.
