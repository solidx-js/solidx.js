# Class: XRMaterial

## Hierarchy

- [`XRBaseMaterial`](XRBaseMaterial.md)\<`PBRMaterial`\>

  ↳ **`XRMaterial`**

## Implements

- [`IMaterialImpl`](../README.md#imaterialimpl)

## Table of contents

### Constructors

- [constructor](XRMaterial.md#constructor)

### Properties

- [\_albedoTexture](XRMaterial.md#_albedotexture)
- [albedoColor](XRMaterial.md#albedocolor)
- [albedoTexture](XRMaterial.md#albedotexture)
- [alpha](XRMaterial.md#alpha)
- [alphaMode](XRMaterial.md#alphamode)
- [backFaceCulling](XRMaterial.md#backfaceculling)
- [disableDepthWrite](XRMaterial.md#disabledepthwrite)
- [disabled](XRMaterial.md#disabled)
- [emissiveColor](XRMaterial.md#emissivecolor)
- [entity](XRMaterial.md#entity)
- [evaluated](XRMaterial.md#evaluated)
- [inspect](XRMaterial.md#inspect)
- [logger](XRMaterial.md#logger)
- [metallic](XRMaterial.md#metallic)
- [onbeforexrselect](XRMaterial.md#onbeforexrselect)
- [renderOptions](XRMaterial.md#renderoptions)
- [roughness](XRMaterial.md#roughness)
- [scene](XRMaterial.md#scene)
- [sideOrientation](XRMaterial.md#sideorientation)
- [unlit](XRMaterial.md#unlit)
- [wireframe](XRMaterial.md#wireframe)
- [zOffset](XRMaterial.md#zoffset)
- [\_$litElement$](XRMaterial.md#_$litelement$)
- [requiredAttrs](XRMaterial.md#requiredattrs)

### Accessors

- [displayText](XRMaterial.md#displaytext)

### Methods

- [checkComputedStyles](XRMaterial.md#checkcomputedstyles)
- [connected](XRMaterial.md#connected)
- [convertPropertyValue](XRMaterial.md#convertpropertyvalue)
- [disconnected](XRMaterial.md#disconnected)
- [reloadAttrFromComputedStyles](XRMaterial.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRMaterial.md#toattributeobject)

## Other

### constructor

• **new XRMaterial**(): [`XRMaterial`](XRMaterial.md)

#### Returns

[`XRMaterial`](XRMaterial.md)

#### Overrides

[XRBaseMaterial](XRBaseMaterial.md).[constructor](XRBaseMaterial.md#constructor)

___

### \_albedoTexture

• **\_albedoTexture**: ``null`` \| `HTMLElement` & [`ITextureImpl`](../README.md#itextureimpl) = `null`

___

### albedoColor

• **albedoColor**: ``null`` \| [`Color3`](Color3.md) = `null`

___

### albedoTexture

• **albedoTexture**: ``null`` \| `string` = `null`

___

### alpha

• **alpha**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.alpha

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alpha](XRBaseMaterial.md#alpha)

___

### alphaMode

• **alphaMode**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.alphaMode

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alphaMode](XRBaseMaterial.md#alphamode)

___

### backFaceCulling

• **backFaceCulling**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialImpl.backFaceCulling

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[backFaceCulling](XRBaseMaterial.md#backfaceculling)

___

### disableDepthWrite

• **disableDepthWrite**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialImpl.disableDepthWrite

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disableDepthWrite](XRBaseMaterial.md#disabledepthwrite)

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disabled](XRBaseMaterial.md#disabled)

___

### emissiveColor

• **emissiveColor**: ``null`` \| [`Color3`](Color3.md) = `null`

___

### entity

• **entity**: ``null`` \| `PBRMaterial` = `null`

#### Implementation of

IMaterialImpl.entity

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[entity](XRBaseMaterial.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRMaterial`](XRMaterial.md)\>

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[evaluated](XRBaseMaterial.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[inspect](XRBaseMaterial.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[logger](XRBaseMaterial.md#logger)

___

### metallic

• **metallic**: ``null`` \| `number` = `null`

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[onbeforexrselect](XRBaseMaterial.md#onbeforexrselect)

___

### roughness

• **roughness**: ``null`` \| `number` = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[scene](XRBaseMaterial.md#scene)

___

### sideOrientation

• **sideOrientation**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.sideOrientation

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[sideOrientation](XRBaseMaterial.md#sideorientation)

___

### unlit

• **unlit**: ``null`` \| `boolean` = `null`

___

### wireframe

• **wireframe**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialImpl.wireframe

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[wireframe](XRBaseMaterial.md#wireframe)

___

### zOffset

• **zOffset**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.zOffset

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[zOffset](XRBaseMaterial.md#zoffset)

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[_$litElement$](XRBaseMaterial.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[]

#### Overrides

[XRBaseMaterial](XRBaseMaterial.md).[requiredAttrs](XRBaseMaterial.md#requiredattrs)

___

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

XRBaseMaterial.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[checkComputedStyles](XRBaseMaterial.md#checkcomputedstyles)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.connected

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

[XRBaseMaterial](XRBaseMaterial.md).[convertPropertyValue](XRBaseMaterial.md#convertpropertyvalue)

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.disconnected

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

[XRBaseMaterial](XRBaseMaterial.md).[reloadAttrFromComputedStyles](XRBaseMaterial.md#reloadattrfromcomputedstyles)

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRMaterial`](XRMaterial.md)

#### Returns

[`XRMaterial`](XRMaterial.md)

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[toAttributeObject](XRBaseMaterial.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[renderOptions](XRBaseMaterial.md#renderoptions)
