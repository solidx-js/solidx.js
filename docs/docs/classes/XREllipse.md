# Class: XREllipse

## Hierarchy

- [`PrimitiveBase`](PrimitiveBase.md)

  ↳ **`XREllipse`**

## Implements

- [`ITransformNodeLikeImpl`](../README.md#itransformnodelikeimpl)

## Table of contents

### Constructors

- [constructor](XREllipse.md#constructor)

### Properties

- [color](XREllipse.md#color)
- [disabled](XREllipse.md#disabled)
- [entity](XREllipse.md#entity)
- [evaluated](XREllipse.md#evaluated)
- [inspect](XREllipse.md#inspect)
- [layer](XREllipse.md#layer)
- [logger](XREllipse.md#logger)
- [onbeforexrselect](XREllipse.md#onbeforexrselect)
- [position](XREllipse.md#position)
- [quaternion](XREllipse.md#quaternion)
- [radiusX](XREllipse.md#radiusx)
- [radiusY](XREllipse.md#radiusy)
- [renderOptions](XREllipse.md#renderoptions)
- [rotation](XREllipse.md#rotation)
- [scale](XREllipse.md#scale)
- [scene](XREllipse.md#scene)
- [\_$litElement$](XREllipse.md#_$litelement$)
- [requiredAttrs](XREllipse.md#requiredattrs)

### Accessors

- [displayText](XREllipse.md#displaytext)

### Methods

- [checkComputedStyles](XREllipse.md#checkcomputedstyles)
- [connected](XREllipse.md#connected)
- [convertPropertyValue](XREllipse.md#convertpropertyvalue)
- [disconnected](XREllipse.md#disconnected)
- [reloadAttrFromComputedStyles](XREllipse.md#reloadattrfromcomputedstyles)
- [render](XREllipse.md#render)
- [toAttributeObject](XREllipse.md#toattributeobject)

## Other

### constructor

• **new XREllipse**(): [`XREllipse`](XREllipse.md)

#### Returns

[`XREllipse`](XREllipse.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[constructor](PrimitiveBase.md#constructor)

___

### color

• **color**: ``null`` \| [`Color3`](Color3.md) = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[disabled](PrimitiveBase.md#disabled)

___

### entity

• **entity**: ``null``

#### Implementation of

ITransformNodeLikeImpl.entity

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[entity](PrimitiveBase.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XREllipse`](XREllipse.md)\>

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[evaluated](PrimitiveBase.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[inspect](PrimitiveBase.md#inspect)

___

### layer

• **layer**: ``null`` \| `number` = `null`

#### Implementation of

ITransformNodeLikeImpl.layer

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[logger](PrimitiveBase.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[onbeforexrselect](PrimitiveBase.md#onbeforexrselect)

___

### position

• **position**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.position

___

### quaternion

• **quaternion**: ``null`` \| [`Quaternion`](Quaternion.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.quaternion

___

### radiusX

• **radiusX**: ``null`` \| `number` = `null`

___

### radiusY

• **radiusY**: ``null`` \| `number` = `null`

___

### rotation

• **rotation**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.rotation

___

### scale

• **scale**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.scale

___

### scene

• **scene**: `Scene`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[scene](PrimitiveBase.md#scene)

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[_$litElement$](PrimitiveBase.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[requiredAttrs](PrimitiveBase.md#requiredattrs)

___

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

PrimitiveBase.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[checkComputedStyles](PrimitiveBase.md#checkcomputedstyles)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

PrimitiveBase.connected

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

[PrimitiveBase](PrimitiveBase.md).[convertPropertyValue](PrimitiveBase.md#convertpropertyvalue)

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

PrimitiveBase.disconnected

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

[PrimitiveBase](PrimitiveBase.md).[reloadAttrFromComputedStyles](PrimitiveBase.md#reloadattrfromcomputedstyles)

___

### render

▸ **render**(): `undefined` \| `TemplateResult`\<``1``\>

#### Returns

`undefined` \| `TemplateResult`\<``1``\>

#### Overrides

PrimitiveBase.render

___

### toAttributeObject

▸ **toAttributeObject**(): [`XREllipse`](XREllipse.md)

#### Returns

[`XREllipse`](XREllipse.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[toAttributeObject](PrimitiveBase.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[renderOptions](PrimitiveBase.md#renderoptions)
