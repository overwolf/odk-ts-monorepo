[**@overwolf/odk-ts**](../README.md)

***

[@overwolf/odk-ts](../README.md) / Monitor

# Interface: Monitor

Defined in: [window/interfaces/monitor.ts:8](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/interfaces/monitor.ts#L8)

Describes the position and dimensions of a monitor in screen coordinates.

The `left` and `top` values define the monitor's origin relative to the
virtual desktop, while `width` and `height` define its size.
The optional `dpiScale` property indicates the DPI scaling factor for the monitor.

## Properties

### dpiScale?

> `optional` **dpiScale**: `number`

Defined in: [window/interfaces/monitor.ts:18](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/interfaces/monitor.ts#L18)

The DPI scale factor of the monitor.

***

### height

> **height**: `number`

Defined in: [window/interfaces/monitor.ts:16](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/interfaces/monitor.ts#L16)

The height of the monitor in pixels.

***

### left

> **left**: `number`

Defined in: [window/interfaces/monitor.ts:10](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/interfaces/monitor.ts#L10)

The horizontal position of the monitor's left edge.

***

### top

> **top**: `number`

Defined in: [window/interfaces/monitor.ts:12](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/interfaces/monitor.ts#L12)

The vertical position of the monitor's top edge.

***

### width

> **width**: `number`

Defined in: [window/interfaces/monitor.ts:14](https://github.com/overwolf/odk-ts-monorepo/blob/main/repos/odk-ts/src/window/interfaces/monitor.ts#L14)

The width of the monitor in pixels.
