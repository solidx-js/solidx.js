# Class: XRBackgroundMaterial

## Hierarchy

- [`XRBaseMaterial`](XRBaseMaterial.md)\<`BackgroundMaterial`\>

  ↳ **`XRBackgroundMaterial`**

## Implements

- [`IMaterialImpl`](../README.md#imaterialimpl)

## Table of contents

### Constructors

- [constructor](XRBackgroundMaterial.md#constructor)

### Properties

- [\_reflectionTexture](XRBackgroundMaterial.md#_reflectiontexture)
- [alpha](XRBackgroundMaterial.md#alpha)
- [alphaMode](XRBackgroundMaterial.md#alphamode)
- [backFaceCulling](XRBackgroundMaterial.md#backfaceculling)
- [disableDepthWrite](XRBackgroundMaterial.md#disabledepthwrite)
- [disabled](XRBackgroundMaterial.md#disabled)
- [enableNoise](XRBackgroundMaterial.md#enablenoise)
- [entity](XRBackgroundMaterial.md#entity)
- [evaluated](XRBackgroundMaterial.md#evaluated)
- [inspect](XRBackgroundMaterial.md#inspect)
- [logger](XRBackgroundMaterial.md#logger)
- [onbeforexrselect](XRBackgroundMaterial.md#onbeforexrselect)
- [primaryColor](XRBackgroundMaterial.md#primarycolor)
- [reflectionTexture](XRBackgroundMaterial.md#reflectiontexture)
- [renderOptions](XRBackgroundMaterial.md#renderoptions)
- [scene](XRBackgroundMaterial.md#scene)
- [sideOrientation](XRBackgroundMaterial.md#sideorientation)
- [useRGBColor](XRBackgroundMaterial.md#usergbcolor)
- [wireframe](XRBackgroundMaterial.md#wireframe)
- [zOffset](XRBackgroundMaterial.md#zoffset)
- [\_$litElement$](XRBackgroundMaterial.md#_$litelement$)
- [requiredAttrs](XRBackgroundMaterial.md#requiredattrs)

### Accessors

- [displayText](XRBackgroundMaterial.md#displaytext)

### Methods

- [checkComputedStyles](XRBackgroundMaterial.md#checkcomputedstyles)
- [connected](XRBackgroundMaterial.md#connected)
- [convertPropertyValue](XRBackgroundMaterial.md#convertpropertyvalue)
- [disconnected](XRBackgroundMaterial.md#disconnected)
- [reloadAttrFromComputedStyles](XRBackgroundMaterial.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRBackgroundMaterial.md#toattributeobject)

## Other

### constructor

• **new XRBackgroundMaterial**(): [`XRBackgroundMaterial`](XRBackgroundMaterial.md)

#### Returns

[`XRBackgroundMaterial`](XRBackgroundMaterial.md)

#### Overrides

[XRBaseMaterial](XRBaseMaterial.md).[constructor](XRBaseMaterial.md#constructor)

___

### \_reflectionTexture

• **\_reflectionTexture**: ``null`` \| `HTMLElement` & [`ITextureImpl`](../README.md#itextureimpl) = `null`

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

### enableNoise

• **enableNoise**: ``null`` \| `boolean` = `null`

___

### entity

• **entity**: ``null`` \| `BackgroundMaterial` = `null`

#### Implementation of

IMaterialImpl.entity

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[entity](XRBaseMaterial.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRBackgroundMaterial`](XRBackgroundMaterial.md)\>

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

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[onbeforexrselect](XRBaseMaterial.md#onbeforexrselect)

___

### primaryColor

• **primaryColor**: ``null`` \| [`Color3`](Color3.md) = `null`

___

### reflectionTexture

• **reflectionTexture**: ``null`` \| `string` = `null`

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

### useRGBColor

• **useRGBColor**: ``null`` \| `boolean` = `null`

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

▸ **toAttributeObject**(): [`XRBackgroundMaterial`](XRBackgroundMaterial.md)

#### Returns

[`XRBackgroundMaterial`](XRBackgroundMaterial.md)

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[toAttributeObject](XRBaseMaterial.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[renderOptions](XRBaseMaterial.md#renderoptions)
