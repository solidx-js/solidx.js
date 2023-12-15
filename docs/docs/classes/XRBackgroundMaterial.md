# Class: XRBackgroundMaterial

## Hierarchy

- [`XRBaseMaterial`](XRBaseMaterial.md)\<`BackgroundMaterial`\>

  ↳ **`XRBackgroundMaterial`**

## Table of contents

### Constructors

- [constructor](XRBackgroundMaterial.md#constructor)

### Properties

- [\_reflectionTexture](XRBackgroundMaterial.md#_reflectiontexture)
- [alpha](XRBackgroundMaterial.md#alpha)
- [alphaMode](XRBackgroundMaterial.md#alphamode)
- [animation](XRBackgroundMaterial.md#animation)
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
- [transition](XRBackgroundMaterial.md#transition)
- [useRGBColor](XRBackgroundMaterial.md#usergbcolor)
- [wireframe](XRBackgroundMaterial.md#wireframe)
- [zOffset](XRBackgroundMaterial.md#zoffset)
- [\_$litElement$](XRBackgroundMaterial.md#_$litelement$)
- [requiredAttrs](XRBackgroundMaterial.md#requiredattrs)

### Methods

- [connected](XRBackgroundMaterial.md#connected)
- [disconnected](XRBackgroundMaterial.md#disconnected)
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

• **\_reflectionTexture**: ``null`` \| `CubeTexture` = `null`

___

### alpha

• **alpha**: `number` = `1`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alpha](XRBaseMaterial.md#alpha)

___

### alphaMode

• **alphaMode**: `number` = `2`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alphaMode](XRBaseMaterial.md#alphamode)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[animation](XRBaseMaterial.md#animation)

___

### backFaceCulling

• **backFaceCulling**: `boolean` = `false`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[backFaceCulling](XRBaseMaterial.md#backfaceculling)

___

### disableDepthWrite

• **disableDepthWrite**: `boolean` = `false`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disableDepthWrite](XRBaseMaterial.md#disabledepthwrite)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disabled](XRBaseMaterial.md#disabled)

___

### enableNoise

• **enableNoise**: `boolean` = `false`

___

### entity

• **entity**: ``null`` \| `BackgroundMaterial` = `null`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[entity](XRBaseMaterial.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRBackgroundMaterial`](XRBackgroundMaterial.md)\>

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[evaluated](XRBaseMaterial.md#evaluated)

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

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

• **primaryColor**: [`Color3`](Color3.md)

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

• **sideOrientation**: `number` = `1`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[sideOrientation](XRBaseMaterial.md#sideorientation)

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[transition](XRBaseMaterial.md#transition)

___

### useRGBColor

• **useRGBColor**: `boolean` = `false`

___

### wireframe

• **wireframe**: `boolean` = `false`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[wireframe](XRBaseMaterial.md#wireframe)

___

### zOffset

• **zOffset**: `number` = `0`

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

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.connected

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.disconnected

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
