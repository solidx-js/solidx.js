# Class: XRGeometry

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`Geometry`\>

  ↳ **`XRGeometry`**

## Implements

- [`IGeometryImpl`](../README.md#igeometryimpl)

## Table of contents

### Constructors

- [constructor](XRGeometry.md#constructor)

### Properties

- [arc](XRGeometry.md#arc)
- [backUVs](XRGeometry.md#backuvs)
- [bottomBaseAt](XRGeometry.md#bottombaseat)
- [cap](XRGeometry.md#cap)
- [dedupTopBottomIndices](XRGeometry.md#deduptopbottomindices)
- [depth](XRGeometry.md#depth)
- [diameter](XRGeometry.md#diameter)
- [diameterBottom](XRGeometry.md#diameterbottom)
- [diameterTop](XRGeometry.md#diametertop)
- [diameterX](XRGeometry.md#diameterx)
- [diameterY](XRGeometry.md#diametery)
- [diameterZ](XRGeometry.md#diameterz)
- [disabled](XRGeometry.md#disabled)
- [enclose](XRGeometry.md#enclose)
- [entity](XRGeometry.md#entity)
- [evaluated](XRGeometry.md#evaluated)
- [frontUVs](XRGeometry.md#frontuvs)
- [hasRings](XRGeometry.md#hasrings)
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
- [subdivisions](XRGeometry.md#subdivisions)
- [tessellation](XRGeometry.md#tessellation)
- [thickness](XRGeometry.md#thickness)
- [topBaseAt](XRGeometry.md#topbaseat)
- [type](XRGeometry.md#type)
- [width](XRGeometry.md#width)
- [wrap](XRGeometry.md#wrap)
- [\_$litElement$](XRGeometry.md#_$litelement$)
- [requiredAttrs](XRGeometry.md#requiredattrs)

### Accessors

- [displayText](XRGeometry.md#displaytext)

### Methods

- [checkComputedStyles](XRGeometry.md#checkcomputedstyles)
- [connected](XRGeometry.md#connected)
- [convertPropertyValue](XRGeometry.md#convertpropertyvalue)
- [disconnected](XRGeometry.md#disconnected)
- [reloadAttrFromComputedStyles](XRGeometry.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRGeometry.md#toattributeobject)

## Other

### constructor

• **new XRGeometry**(): [`XRGeometry`](XRGeometry.md)

#### Returns

[`XRGeometry`](XRGeometry.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### arc

• **arc**: ``null`` \| `number` = `null`

___

### backUVs

• **backUVs**: ``null`` \| [`Vector4`](Vector4.md) = `null`

___

### bottomBaseAt

• **bottomBaseAt**: ``null`` \| `number` = `null`

___

### cap

• **cap**: ``null`` \| `number` = `null`

___

### dedupTopBottomIndices

• **dedupTopBottomIndices**: ``null`` \| `boolean` = `null`

___

### depth

• **depth**: ``null`` \| `number` = `null`

___

### diameter

• **diameter**: ``null`` \| `number` = `null`

___

### diameterBottom

• **diameterBottom**: ``null`` \| `number` = `null`

___

### diameterTop

• **diameterTop**: ``null`` \| `number` = `null`

___

### diameterX

• **diameterX**: ``null`` \| `number` = `null`

___

### diameterY

• **diameterY**: ``null`` \| `number` = `null`

___

### diameterZ

• **diameterZ**: ``null`` \| `number` = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### enclose

• **enclose**: ``null`` \| `boolean` = `null`

___

### entity

• **entity**: ``null`` \| `Geometry` = `null`

#### Implementation of

IGeometryImpl.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRGeometry`](XRGeometry.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### frontUVs

• **frontUVs**: ``null`` \| [`Vector4`](Vector4.md) = `null`

___

### hasRings

• **hasRings**: ``null`` \| `boolean` = `null`

___

### height

• **height**: ``null`` \| `number` = `null`

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

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

• **segments**: ``null`` \| `number` = `null`

___

### sideOrientation

• **sideOrientation**: ``null`` \| `number` = `null`

___

### size

• **size**: ``null`` \| `number` = `null`

___

### slice

• **slice**: ``null`` \| `number` = `null`

___

### subdivisions

• **subdivisions**: ``null`` \| `number` = `null`

___

### tessellation

• **tessellation**: ``null`` \| `number` = `null`

___

### thickness

• **thickness**: ``null`` \| `number` = `null`

___

### topBaseAt

• **topBaseAt**: ``null`` \| `number` = `null`

___

### type

• **type**: ``null`` \| `string` = `null`

___

### width

• **width**: ``null`` \| `number` = `null`

___

### wrap

• **wrap**: ``null`` \| `boolean` = `null`

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

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

XRSceneScopeElement.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[checkComputedStyles](XRSceneScopeElement.md#checkcomputedstyles)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.connected

___

### convertPropertyValue

▸ **convertPropertyValue**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`any`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[convertPropertyValue](XRSceneScopeElement.md#convertpropertyvalue)

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.disconnected

___

### reloadAttrFromComputedStyles

▸ **reloadAttrFromComputedStyles**(`property`): `undefined` \| ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

`undefined` \| ``true``

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[reloadAttrFromComputedStyles](XRSceneScopeElement.md#reloadattrfromcomputedstyles)

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
