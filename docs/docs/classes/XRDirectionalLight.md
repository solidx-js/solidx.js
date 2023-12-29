# Class: XRDirectionalLight

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`DirectionalLight`\>

  ↳ **`XRDirectionalLight`**

## Table of contents

### Constructors

- [constructor](XRDirectionalLight.md#constructor)

### Properties

- [alpha](XRDirectionalLight.md#alpha)
- [beta](XRDirectionalLight.md#beta)
- [diffuse](XRDirectionalLight.md#diffuse)
- [disabled](XRDirectionalLight.md#disabled)
- [entity](XRDirectionalLight.md#entity)
- [evaluated](XRDirectionalLight.md#evaluated)
- [inspect](XRDirectionalLight.md#inspect)
- [intensity](XRDirectionalLight.md#intensity)
- [logger](XRDirectionalLight.md#logger)
- [onbeforexrselect](XRDirectionalLight.md#onbeforexrselect)
- [position](XRDirectionalLight.md#position)
- [renderOptions](XRDirectionalLight.md#renderoptions)
- [scene](XRDirectionalLight.md#scene)
- [shadowEnabled](XRDirectionalLight.md#shadowenabled)
- [specular](XRDirectionalLight.md#specular)
- [\_$litElement$](XRDirectionalLight.md#_$litelement$)
- [requiredAttrs](XRDirectionalLight.md#requiredattrs)

### Accessors

- [displayText](XRDirectionalLight.md#displaytext)

### Methods

- [checkComputedStyles](XRDirectionalLight.md#checkcomputedstyles)
- [connected](XRDirectionalLight.md#connected)
- [convertPropertyValue](XRDirectionalLight.md#convertpropertyvalue)
- [disconnected](XRDirectionalLight.md#disconnected)
- [reloadAttrFromComputedStyles](XRDirectionalLight.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRDirectionalLight.md#toattributeobject)

## Other

### constructor

• **new XRDirectionalLight**(): [`XRDirectionalLight`](XRDirectionalLight.md)

#### Returns

[`XRDirectionalLight`](XRDirectionalLight.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### alpha

• **alpha**: ``null`` \| `number` = `null`

___

### beta

• **beta**: ``null`` \| `number` = `null`

___

### diffuse

• **diffuse**: ``null`` \| [`Color3`](Color3.md) = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `DirectionalLight` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRDirectionalLight`](XRDirectionalLight.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### intensity

• **intensity**: ``null`` \| `number` = `null`

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

### position

• **position**: ``null`` \| [`Vector3`](Vector3.md) = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### shadowEnabled

• **shadowEnabled**: ``null`` \| `boolean` = `null`

___

### specular

• **specular**: ``null`` \| [`Color3`](Color3.md) = `null`

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

▸ **toAttributeObject**(): [`XRDirectionalLight`](XRDirectionalLight.md)

#### Returns

[`XRDirectionalLight`](XRDirectionalLight.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
