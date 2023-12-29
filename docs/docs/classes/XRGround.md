# Class: XRGround

## Hierarchy

- [`PrimitiveBase`](PrimitiveBase.md)

  ↳ **`XRGround`**

## Table of contents

### Constructors

- [constructor](XRGround.md#constructor)

### Properties

- [disabled](XRGround.md#disabled)
- [entity](XRGround.md#entity)
- [evaluated](XRGround.md#evaluated)
- [inspect](XRGround.md#inspect)
- [logger](XRGround.md#logger)
- [onbeforexrselect](XRGround.md#onbeforexrselect)
- [position](XRGround.md#position)
- [renderOptions](XRGround.md#renderoptions)
- [rotation](XRGround.md#rotation)
- [scale](XRGround.md#scale)
- [scene](XRGround.md#scene)
- [size](XRGround.md#size)
- [type](XRGround.md#type)
- [\_$litElement$](XRGround.md#_$litelement$)
- [requiredAttrs](XRGround.md#requiredattrs)

### Accessors

- [displayText](XRGround.md#displaytext)

### Methods

- [checkComputedStyles](XRGround.md#checkcomputedstyles)
- [connected](XRGround.md#connected)
- [convertPropertyValue](XRGround.md#convertpropertyvalue)
- [disconnected](XRGround.md#disconnected)
- [reloadAttrFromComputedStyles](XRGround.md#reloadattrfromcomputedstyles)
- [render](XRGround.md#render)
- [toAttributeObject](XRGround.md#toattributeobject)

## Other

### constructor

• **new XRGround**(): [`XRGround`](XRGround.md)

#### Returns

[`XRGround`](XRGround.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[constructor](PrimitiveBase.md#constructor)

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[disabled](PrimitiveBase.md#disabled)

___

### entity

• **entity**: ``null``

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[entity](PrimitiveBase.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRGround`](XRGround.md)\>

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[evaluated](PrimitiveBase.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[inspect](PrimitiveBase.md#inspect)

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

___

### rotation

• **rotation**: ``null`` \| [`Vector3`](Vector3.md) = `null`

___

### scale

• **scale**: ``null`` \| [`Vector3`](Vector3.md) = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[scene](PrimitiveBase.md#scene)

___

### size

• **size**: ``null`` \| `number` = `null`

___

### type

• **type**: ``null`` \| `string` = `null`

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

▸ **render**(): `TemplateResult`\<``1``\>

#### Returns

`TemplateResult`\<``1``\>

#### Overrides

PrimitiveBase.render

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRGround`](XRGround.md)

#### Returns

[`XRGround`](XRGround.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[toAttributeObject](PrimitiveBase.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[renderOptions](PrimitiveBase.md#renderoptions)
