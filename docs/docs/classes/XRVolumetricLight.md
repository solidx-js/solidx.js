# Class: XRVolumetricLight

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`VolumetricLightScatteringPostProcess`\>

  ↳ **`XRVolumetricLight`**

## Implements

- [`IPostProcessImpl`](../README.md#ipostprocessimpl)

## Table of contents

### Constructors

- [constructor](XRVolumetricLight.md#constructor)

### Properties

- [\_camera](XRVolumetricLight.md#_camera)
- [\_excluded](XRVolumetricLight.md#_excluded)
- [\_source](XRVolumetricLight.md#_source)
- [camera](XRVolumetricLight.md#camera)
- [decay](XRVolumetricLight.md#decay)
- [density](XRVolumetricLight.md#density)
- [disabled](XRVolumetricLight.md#disabled)
- [entity](XRVolumetricLight.md#entity)
- [evaluated](XRVolumetricLight.md#evaluated)
- [excluded](XRVolumetricLight.md#excluded)
- [exposure](XRVolumetricLight.md#exposure)
- [inspect](XRVolumetricLight.md#inspect)
- [logger](XRVolumetricLight.md#logger)
- [onbeforexrselect](XRVolumetricLight.md#onbeforexrselect)
- [renderOptions](XRVolumetricLight.md#renderoptions)
- [scene](XRVolumetricLight.md#scene)
- [source](XRVolumetricLight.md#source)
- [weight](XRVolumetricLight.md#weight)
- [\_$litElement$](XRVolumetricLight.md#_$litelement$)
- [requiredAttrs](XRVolumetricLight.md#requiredattrs)

### Accessors

- [displayText](XRVolumetricLight.md#displaytext)

### Methods

- [checkComputedStyles](XRVolumetricLight.md#checkcomputedstyles)
- [connected](XRVolumetricLight.md#connected)
- [convertPropertyValue](XRVolumetricLight.md#convertpropertyvalue)
- [disconnected](XRVolumetricLight.md#disconnected)
- [reloadAttrFromComputedStyles](XRVolumetricLight.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRVolumetricLight.md#toattributeobject)

## Other

### constructor

• **new XRVolumetricLight**(): [`XRVolumetricLight`](XRVolumetricLight.md)

#### Returns

[`XRVolumetricLight`](XRVolumetricLight.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### \_camera

• **\_camera**: ``null`` \| `HTMLElement` & \{ `entity`: ``null`` \| `Camera`  } = `null`

___

### \_excluded

• **\_excluded**: ``null`` \| `HTMLElement` & \{ `entity`: ``null`` \| `Mesh`  }[] = `null`

___

### \_source

• **\_source**: ``null`` \| `HTMLElement` & \{ `entity`: ``null`` \| `Mesh`  } = `null`

___

### camera

• **camera**: ``null`` \| `string` = `null`

#### Implementation of

IPostProcessImpl.camera

___

### decay

• **decay**: ``null`` \| `number` = `null`

___

### density

• **density**: ``null`` \| `number` = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `VolumetricLightScatteringPostProcess` = `null`

#### Implementation of

IPostProcessImpl.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRVolumetricLight`](XRVolumetricLight.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### excluded

• **excluded**: ``null`` \| `string` = `null`

___

### exposure

• **exposure**: ``null`` \| `number` = `null`

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

### source

• **source**: ``null`` \| `string` = `null`

___

### weight

• **weight**: ``null`` \| `number` = `null`

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

▸ **toAttributeObject**(): [`XRVolumetricLight`](XRVolumetricLight.md)

#### Returns

[`XRVolumetricLight`](XRVolumetricLight.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
