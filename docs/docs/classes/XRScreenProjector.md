# Class: XRScreenProjector

## Hierarchy

- [`PrimitiveBase`](PrimitiveBase.md)

  ↳ **`XRScreenProjector`**

## Table of contents

### Constructors

- [constructor](XRScreenProjector.md#constructor)

### Properties

- [\_target](XRScreenProjector.md#_target)
- [disabled](XRScreenProjector.md#disabled)
- [entity](XRScreenProjector.md#entity)
- [evaluated](XRScreenProjector.md#evaluated)
- [inspect](XRScreenProjector.md#inspect)
- [logger](XRScreenProjector.md#logger)
- [onbeforexrselect](XRScreenProjector.md#onbeforexrselect)
- [renderOptions](XRScreenProjector.md#renderoptions)
- [scene](XRScreenProjector.md#scene)
- [target](XRScreenProjector.md#target)
- [\_$litElement$](XRScreenProjector.md#_$litelement$)
- [requiredAttrs](XRScreenProjector.md#requiredattrs)

### Accessors

- [displayText](XRScreenProjector.md#displaytext)

### Methods

- [checkComputedStyles](XRScreenProjector.md#checkcomputedstyles)
- [connected](XRScreenProjector.md#connected)
- [convertPropertyValue](XRScreenProjector.md#convertpropertyvalue)
- [disconnected](XRScreenProjector.md#disconnected)
- [reloadAttrFromComputedStyles](XRScreenProjector.md#reloadattrfromcomputedstyles)
- [render](XRScreenProjector.md#render)
- [toAttributeObject](XRScreenProjector.md#toattributeobject)

## Other

### constructor

• **new XRScreenProjector**(): [`XRScreenProjector`](XRScreenProjector.md)

#### Returns

[`XRScreenProjector`](XRScreenProjector.md)

#### Overrides

[PrimitiveBase](PrimitiveBase.md).[constructor](PrimitiveBase.md#constructor)

___

### \_target

• **\_target**: ``null`` \| [`XRMesh`](XRMesh.md) \| [`XRNode`](XRNode.md) = `null`

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

• `Readonly` **evaluated**: `PickStringKey`\<[`XRScreenProjector`](XRScreenProjector.md)\>

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

### target

• **target**: ``null`` \| `string` = `null`

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

▸ **toAttributeObject**(): [`XRScreenProjector`](XRScreenProjector.md)

#### Returns

[`XRScreenProjector`](XRScreenProjector.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[toAttributeObject](PrimitiveBase.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[renderOptions](PrimitiveBase.md#renderoptions)
