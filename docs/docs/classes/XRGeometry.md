# Class: XRGeometry

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`Geometry`\>

  ↳ **`XRGeometry`**

## Table of contents

### Constructors

- [constructor](XRGeometry.md#constructor)

### Properties

- [animation](XRGeometry.md#animation)
- [arc](XRGeometry.md#arc)
- [backUVs](XRGeometry.md#backuvs)
- [bottomBaseAt](XRGeometry.md#bottombaseat)
- [dedupTopBottomIndices](XRGeometry.md#deduptopbottomindices)
- [depth](XRGeometry.md#depth)
- [diameter](XRGeometry.md#diameter)
- [diameterX](XRGeometry.md#diameterx)
- [diameterY](XRGeometry.md#diametery)
- [diameterZ](XRGeometry.md#diameterz)
- [disabled](XRGeometry.md#disabled)
- [entity](XRGeometry.md#entity)
- [evaluated](XRGeometry.md#evaluated)
- [frontUVs](XRGeometry.md#frontuvs)
- [height](XRGeometry.md#height)
- [inspect](XRGeometry.md#inspect)
- [logger](XRGeometry.md#logger)
- [onbeforexrselect](XRGeometry.md#onbeforexrselect)
- [renderOptions](XRGeometry.md#renderoptions)
- [scene](XRGeometry.md#scene)
- [segments](XRGeometry.md#segments)
- [sideOrientation](XRGeometry.md#sideorientation)
- [size](XRGeometry.md#size)
- [slice](XRGeometry.md#slice)
- [topBaseAt](XRGeometry.md#topbaseat)
- [transition](XRGeometry.md#transition)
- [type](XRGeometry.md#type)
- [width](XRGeometry.md#width)
- [wrap](XRGeometry.md#wrap)
- [\_$litElement$](XRGeometry.md#_$litelement$)
- [requiredAttrs](XRGeometry.md#requiredattrs)

### Methods

- [connected](XRGeometry.md#connected)
- [disconnected](XRGeometry.md#disconnected)
- [toAttributeObject](XRGeometry.md#toattributeobject)

## Other

### constructor

• **new XRGeometry**(): [`XRGeometry`](XRGeometry.md)

#### Returns

[`XRGeometry`](XRGeometry.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### arc

• `Optional` **arc**: `number`

___

### backUVs

• `Optional` **backUVs**: [`Vector4`](Vector4.md)

___

### bottomBaseAt

• `Optional` **bottomBaseAt**: `number`

___

### dedupTopBottomIndices

• `Optional` **dedupTopBottomIndices**: `boolean`

___

### depth

• `Optional` **depth**: `number`

___

### diameter

• `Optional` **diameter**: `number`

___

### diameterX

• `Optional` **diameterX**: `number`

___

### diameterY

• `Optional` **diameterY**: `number`

___

### diameterZ

• `Optional` **diameterZ**: `number`

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `Geometry` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRGeometry`](XRGeometry.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### frontUVs

• `Optional` **frontUVs**: [`Vector4`](Vector4.md)

___

### height

• `Optional` **height**: `number`

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[logger](XRSceneScopeElement.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[onbeforexrselect](XRSceneScopeElement.md#onbeforexrselect)

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### segments

• `Optional` **segments**: `number`

___

### sideOrientation

• `Optional` **sideOrientation**: `number`

___

### size

• `Optional` **size**: `number`

___

### slice

• `Optional` **slice**: `number`

___

### topBaseAt

• `Optional` **topBaseAt**: `number`

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[transition](XRSceneScopeElement.md#transition)

___

### type

• **type**: `string` = `'box'`

___

### width

• `Optional` **width**: `number`

___

### wrap

• `Optional` **wrap**: `boolean`

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[_$litElement$](XRSceneScopeElement.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[]

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[requiredAttrs](XRSceneScopeElement.md#requiredattrs)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.connected

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.disconnected

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRGeometry`](XRGeometry.md)

#### Returns

[`XRGeometry`](XRGeometry.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
