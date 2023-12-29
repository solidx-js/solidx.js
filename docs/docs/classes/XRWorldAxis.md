# Class: XRWorldAxis

## Hierarchy

- [`PrimitiveBase`](PrimitiveBase.md)

  ↳ **`XRWorldAxis`**

## Table of contents

### Constructors

- [constructor](XRWorldAxis.md#constructor)

### Properties

- [disabled](XRWorldAxis.md#disabled)
- [entity](XRWorldAxis.md#entity)
- [evaluated](XRWorldAxis.md#evaluated)
- [inspect](XRWorldAxis.md#inspect)
- [logger](XRWorldAxis.md#logger)
- [onbeforexrselect](XRWorldAxis.md#onbeforexrselect)
- [renderOptions](XRWorldAxis.md#renderoptions)
- [scene](XRWorldAxis.md#scene)
- [size](XRWorldAxis.md#size)
- [\_$litElement$](XRWorldAxis.md#_$litelement$)
- [requiredAttrs](XRWorldAxis.md#requiredattrs)

### Accessors

- [displayText](XRWorldAxis.md#displaytext)

### Methods

- [checkComputedStyles](XRWorldAxis.md#checkcomputedstyles)
- [connected](XRWorldAxis.md#connected)
- [convertPropertyValue](XRWorldAxis.md#convertpropertyvalue)
- [disconnected](XRWorldAxis.md#disconnected)
- [reloadAttrFromComputedStyles](XRWorldAxis.md#reloadattrfromcomputedstyles)
- [render](XRWorldAxis.md#render)
- [toAttributeObject](XRWorldAxis.md#toattributeobject)

## Other

### constructor

• **new XRWorldAxis**(): [`XRWorldAxis`](XRWorldAxis.md)

#### Returns

[`XRWorldAxis`](XRWorldAxis.md)

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

• `Readonly` **evaluated**: `PickStringKey`\<[`XRWorldAxis`](XRWorldAxis.md)\>

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

### scene

• **scene**: `Scene`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[scene](PrimitiveBase.md#scene)

___

### size

• **size**: ``null`` \| `number` = `null`

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

▸ **toAttributeObject**(): [`XRWorldAxis`](XRWorldAxis.md)

#### Returns

[`XRWorldAxis`](XRWorldAxis.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[toAttributeObject](PrimitiveBase.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[renderOptions](PrimitiveBase.md#renderoptions)
