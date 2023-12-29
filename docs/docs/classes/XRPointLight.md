# Class: XRPointLight

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`PointLight`\>

  ↳ **`XRPointLight`**

## Table of contents

### Constructors

- [constructor](XRPointLight.md#constructor)

### Properties

- [diffuse](XRPointLight.md#diffuse)
- [disabled](XRPointLight.md#disabled)
- [entity](XRPointLight.md#entity)
- [evaluated](XRPointLight.md#evaluated)
- [inspect](XRPointLight.md#inspect)
- [intensity](XRPointLight.md#intensity)
- [logger](XRPointLight.md#logger)
- [onbeforexrselect](XRPointLight.md#onbeforexrselect)
- [position](XRPointLight.md#position)
- [renderOptions](XRPointLight.md#renderoptions)
- [scene](XRPointLight.md#scene)
- [shadowEnabled](XRPointLight.md#shadowenabled)
- [specular](XRPointLight.md#specular)
- [\_$litElement$](XRPointLight.md#_$litelement$)
- [requiredAttrs](XRPointLight.md#requiredattrs)

### Accessors

- [displayText](XRPointLight.md#displaytext)

### Methods

- [checkComputedStyles](XRPointLight.md#checkcomputedstyles)
- [connected](XRPointLight.md#connected)
- [convertPropertyValue](XRPointLight.md#convertpropertyvalue)
- [disconnected](XRPointLight.md#disconnected)
- [reloadAttrFromComputedStyles](XRPointLight.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRPointLight.md#toattributeobject)

## Other

### constructor

• **new XRPointLight**(): [`XRPointLight`](XRPointLight.md)

#### Returns

[`XRPointLight`](XRPointLight.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

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

• **entity**: ``null`` \| `PointLight` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRPointLight`](XRPointLight.md)\>

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

▸ **toAttributeObject**(): [`XRPointLight`](XRPointLight.md)

#### Returns

[`XRPointLight`](XRPointLight.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
