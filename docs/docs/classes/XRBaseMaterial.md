# Class: XRBaseMaterial\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Material` |

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`T`\>

  ↳ **`XRBaseMaterial`**

  ↳↳ [`XRBackgroundMaterial`](XRBackgroundMaterial.md)

  ↳↳ [`XRGridMaterial`](XRGridMaterial.md)

  ↳↳ [`XRMaterial`](XRMaterial.md)

## Implements

- [`IMaterialControllerHostType`](../README.md#imaterialcontrollerhosttype)

## Table of contents

### Constructors

- [constructor](XRBaseMaterial.md#constructor)

### Properties

- [alpha](XRBaseMaterial.md#alpha)
- [alphaMode](XRBaseMaterial.md#alphamode)
- [animation](XRBaseMaterial.md#animation)
- [backFaceCulling](XRBaseMaterial.md#backfaceculling)
- [disableDepthWrite](XRBaseMaterial.md#disabledepthwrite)
- [disabled](XRBaseMaterial.md#disabled)
- [entity](XRBaseMaterial.md#entity)
- [evaluated](XRBaseMaterial.md#evaluated)
- [inspect](XRBaseMaterial.md#inspect)
- [logger](XRBaseMaterial.md#logger)
- [onbeforexrselect](XRBaseMaterial.md#onbeforexrselect)
- [renderOptions](XRBaseMaterial.md#renderoptions)
- [scene](XRBaseMaterial.md#scene)
- [sideOrientation](XRBaseMaterial.md#sideorientation)
- [transition](XRBaseMaterial.md#transition)
- [wireframe](XRBaseMaterial.md#wireframe)
- [zOffset](XRBaseMaterial.md#zoffset)
- [\_$litElement$](XRBaseMaterial.md#_$litelement$)
- [requiredAttrs](XRBaseMaterial.md#requiredattrs)

### Methods

- [toAttributeObject](XRBaseMaterial.md#toattributeobject)

## Other

### constructor

• **new XRBaseMaterial**\<`T`\>(): [`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Material` |

#### Returns

[`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### alpha

• **alpha**: `number` = `1`

#### Implementation of

IMaterialControllerHostType.alpha

___

### alphaMode

• **alphaMode**: `number` = `2`

#### Implementation of

IMaterialControllerHostType.alphaMode

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Implementation of

IMaterialControllerHostType.animation

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### backFaceCulling

• **backFaceCulling**: `boolean` = `false`

#### Implementation of

IMaterialControllerHostType.backFaceCulling

___

### disableDepthWrite

• **disableDepthWrite**: `boolean` = `false`

#### Implementation of

IMaterialControllerHostType.disableDepthWrite

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

IMaterialControllerHostType.disabled

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `T` = `null`

#### Implementation of

IMaterialControllerHostType.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>\>

#### Implementation of

IMaterialControllerHostType.evaluated

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Implementation of

IMaterialControllerHostType.inspect

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Implementation of

IMaterialControllerHostType.logger

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[logger](XRSceneScopeElement.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Implementation of

IMaterialControllerHostType.onbeforexrselect

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[onbeforexrselect](XRSceneScopeElement.md#onbeforexrselect)

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### sideOrientation

• **sideOrientation**: `number` = `1`

#### Implementation of

IMaterialControllerHostType.sideOrientation

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Implementation of

IMaterialControllerHostType.transition

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[transition](XRSceneScopeElement.md#transition)

___

### wireframe

• **wireframe**: `boolean` = `false`

#### Implementation of

IMaterialControllerHostType.wireframe

___

### zOffset

• **zOffset**: `number` = `0`

#### Implementation of

IMaterialControllerHostType.zOffset

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

### toAttributeObject

▸ **toAttributeObject**(): [`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Returns

[`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Implementation of

IMaterialControllerHostType.toAttributeObject

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Implementation of

IMaterialControllerHostType.renderOptions

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
