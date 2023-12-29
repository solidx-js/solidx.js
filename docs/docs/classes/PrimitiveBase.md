# Class: PrimitiveBase

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<``null``\>

  ↳ **`PrimitiveBase`**

  ↳↳ [`XRArrow`](XRArrow.md)

  ↳↳ [`XREllipse`](XREllipse.md)

  ↳↳ [`XREnv`](XREnv.md)

  ↳↳ [`XRGround`](XRGround.md)

  ↳↳ [`XRScreenProjector`](XRScreenProjector.md)

  ↳↳ [`XRWorldAxis`](XRWorldAxis.md)

## Table of contents

### Constructors

- [constructor](PrimitiveBase.md#constructor)

### Properties

- [disabled](PrimitiveBase.md#disabled)
- [entity](PrimitiveBase.md#entity)
- [evaluated](PrimitiveBase.md#evaluated)
- [inspect](PrimitiveBase.md#inspect)
- [logger](PrimitiveBase.md#logger)
- [onbeforexrselect](PrimitiveBase.md#onbeforexrselect)
- [renderOptions](PrimitiveBase.md#renderoptions)
- [scene](PrimitiveBase.md#scene)
- [\_$litElement$](PrimitiveBase.md#_$litelement$)
- [requiredAttrs](PrimitiveBase.md#requiredattrs)

### Accessors

- [displayText](PrimitiveBase.md#displaytext)

### Methods

- [checkComputedStyles](PrimitiveBase.md#checkcomputedstyles)
- [convertPropertyValue](PrimitiveBase.md#convertpropertyvalue)
- [reloadAttrFromComputedStyles](PrimitiveBase.md#reloadattrfromcomputedstyles)
- [toAttributeObject](PrimitiveBase.md#toattributeobject)

## Other

### constructor

• **new PrimitiveBase**(): [`PrimitiveBase`](PrimitiveBase.md)

#### Returns

[`PrimitiveBase`](PrimitiveBase.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null``

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`PrimitiveBase`](PrimitiveBase.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

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

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[_$litElement$](XRSceneScopeElement.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

#### Inherited from

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

▸ **toAttributeObject**(): [`PrimitiveBase`](PrimitiveBase.md)

#### Returns

[`PrimitiveBase`](PrimitiveBase.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
