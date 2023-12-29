# Class: XRElement\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `LitElement`

  ↳ **`XRElement`**

  ↳↳ [`XRScene`](XRScene.md)

  ↳↳ [`XRSceneScopeElement`](XRSceneScopeElement.md)

## Table of contents

### Constructors

- [constructor](XRElement.md#constructor)

### Properties

- [disabled](XRElement.md#disabled)
- [entity](XRElement.md#entity)
- [evaluated](XRElement.md#evaluated)
- [inspect](XRElement.md#inspect)
- [logger](XRElement.md#logger)
- [onbeforexrselect](XRElement.md#onbeforexrselect)
- [renderOptions](XRElement.md#renderoptions)
- [\_$litElement$](XRElement.md#_$litelement$)
- [requiredAttrs](XRElement.md#requiredattrs)

### Accessors

- [displayText](XRElement.md#displaytext)

### Methods

- [checkComputedStyles](XRElement.md#checkcomputedstyles)
- [convertPropertyValue](XRElement.md#convertpropertyvalue)
- [reloadAttrFromComputedStyles](XRElement.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRElement.md#toattributeobject)

## Other

### constructor

• **new XRElement**\<`T`\>(): [`XRElement`](XRElement.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Returns

[`XRElement`](XRElement.md)\<`T`\>

#### Overrides

LitElement.constructor

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

___

### entity

• **entity**: ``null`` \| `T` = `null`

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRElement`](XRElement.md)\<`T`\>\>

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

___

### logger

• `Readonly` **logger**: `Logger`

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

LitElement.onbeforexrselect

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

LitElement.\_$litElement$

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

___

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

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

___

### reloadAttrFromComputedStyles

▸ **reloadAttrFromComputedStyles**(`property`): `undefined` \| ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

`undefined` \| ``true``

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRElement`](XRElement.md)\<`T`\>

#### Returns

[`XRElement`](XRElement.md)\<`T`\>

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

LitElement.renderOptions
