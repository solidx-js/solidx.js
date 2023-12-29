# Class: XRCamera

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`ArcRotateCamera`\>

  ↳ **`XRCamera`**

## Table of contents

### Constructors

- [constructor](XRCamera.md#constructor)

### Properties

- [alpha](XRCamera.md#alpha)
- [beta](XRCamera.md#beta)
- [disabled](XRCamera.md#disabled)
- [entity](XRCamera.md#entity)
- [evaluated](XRCamera.md#evaluated)
- [inspect](XRCamera.md#inspect)
- [logger](XRCamera.md#logger)
- [maxZ](XRCamera.md#maxz)
- [minZ](XRCamera.md#minz)
- [onbeforexrselect](XRCamera.md#onbeforexrselect)
- [radius](XRCamera.md#radius)
- [renderOptions](XRCamera.md#renderoptions)
- [scene](XRCamera.md#scene)
- [target](XRCamera.md#target)
- [\_$litElement$](XRCamera.md#_$litelement$)
- [requiredAttrs](XRCamera.md#requiredattrs)

### Accessors

- [displayText](XRCamera.md#displaytext)

### Methods

- [checkComputedStyles](XRCamera.md#checkcomputedstyles)
- [connected](XRCamera.md#connected)
- [convertPropertyValue](XRCamera.md#convertpropertyvalue)
- [disconnected](XRCamera.md#disconnected)
- [reloadAttrFromComputedStyles](XRCamera.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRCamera.md#toattributeobject)

## Other

### constructor

• **new XRCamera**(): [`XRCamera`](XRCamera.md)

#### Returns

[`XRCamera`](XRCamera.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### alpha

• **alpha**: ``null`` \| `number` = `null`

___

### beta

• **beta**: ``null`` \| `number` = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `ArcRotateCamera` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRCamera`](XRCamera.md)\>

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

### maxZ

• **maxZ**: ``null`` \| `number` = `null`

___

### minZ

• **minZ**: ``null`` \| `number` = `null`

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

### radius

• **radius**: ``null`` \| `number` = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### target

• **target**: ``null`` \| [`Vector3`](Vector3.md) = `null`

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

▸ **toAttributeObject**(): [`XRCamera`](XRCamera.md)

#### Returns

[`XRCamera`](XRCamera.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
