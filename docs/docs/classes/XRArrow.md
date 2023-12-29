# Class: XRArrow

## Hierarchy

- [`PrimitiveBase`](PrimitiveBase.md)

  ↳ **`XRArrow`**

## Table of contents

### Constructors

- [constructor](XRArrow.md#constructor)

### Properties

- [color](XRArrow.md#color)
- [disabled](XRArrow.md#disabled)
- [entity](XRArrow.md#entity)
- [evaluated](XRArrow.md#evaluated)
- [inspect](XRArrow.md#inspect)
- [logger](XRArrow.md#logger)
- [onbeforexrselect](XRArrow.md#onbeforexrselect)
- [position](XRArrow.md#position)
- [renderOptions](XRArrow.md#renderoptions)
- [rotation](XRArrow.md#rotation)
- [scale](XRArrow.md#scale)
- [scene](XRArrow.md#scene)
- [thickness](XRArrow.md#thickness)
- [\_$litElement$](XRArrow.md#_$litelement$)
- [requiredAttrs](XRArrow.md#requiredattrs)

### Accessors

- [displayText](XRArrow.md#displaytext)

### Methods

- [checkComputedStyles](XRArrow.md#checkcomputedstyles)
- [connected](XRArrow.md#connected)
- [convertPropertyValue](XRArrow.md#convertpropertyvalue)
- [disconnected](XRArrow.md#disconnected)
- [reloadAttrFromComputedStyles](XRArrow.md#reloadattrfromcomputedstyles)
- [render](XRArrow.md#render)
- [toAttributeObject](XRArrow.md#toattributeobject)

## Other

### constructor

• **new XRArrow**(): [`XRArrow`](XRArrow.md)

#### Returns

[`XRArrow`](XRArrow.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[constructor](PrimitiveBase.md#constructor)

___

### color

• **color**: ``null`` \| [`Vector3`](Vector3.md) = `null`

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

• `Readonly` **evaluated**: `PickStringKey`\<[`XRArrow`](XRArrow.md)\>

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

### thickness

• **thickness**: ``null`` \| `number` = `null`

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[_$litElement$](PrimitiveBase.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[]

#### Overrides

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

▸ **toAttributeObject**(): [`XRArrow`](XRArrow.md)

#### Returns

[`XRArrow`](XRArrow.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[toAttributeObject](PrimitiveBase.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[renderOptions](PrimitiveBase.md#renderoptions)
