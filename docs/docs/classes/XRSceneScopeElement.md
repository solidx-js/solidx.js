# Class: XRSceneScopeElement\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`XRElement`](XRElement.md)\<`T`\>

  ↳ **`XRSceneScopeElement`**

  ↳↳ [`XRCamera`](XRCamera.md)

  ↳↳ [`XRDirectionalLight`](XRDirectionalLight.md)

  ↳↳ [`XRHemisphericLight`](XRHemisphericLight.md)

  ↳↳ [`XRPointLight`](XRPointLight.md)

  ↳↳ [`XRBaseMaterial`](XRBaseMaterial.md)

  ↳↳ [`XRDecal`](XRDecal.md)

  ↳↳ [`XRKeyFrames`](XRKeyFrames.md)

  ↳↳ [`XRRay`](XRRay.md)

  ↳↳ [`XRCubeTexture`](XRCubeTexture.md)

  ↳↳ [`XRTexture`](XRTexture.md)

  ↳↳ [`XRGeometry`](XRGeometry.md)

  ↳↳ [`XRMesh`](XRMesh.md)

  ↳↳ [`XRModel`](XRModel.md)

  ↳↳ [`XRNode`](XRNode.md)

  ↳↳ [`XREnv`](XREnv.md)

  ↳↳ [`XRGround`](XRGround.md)

## Table of contents

### Constructors

- [constructor](XRSceneScopeElement.md#constructor)

### Properties

- [animation](XRSceneScopeElement.md#animation)
- [disabled](XRSceneScopeElement.md#disabled)
- [entity](XRSceneScopeElement.md#entity)
- [evaluated](XRSceneScopeElement.md#evaluated)
- [inspect](XRSceneScopeElement.md#inspect)
- [logger](XRSceneScopeElement.md#logger)
- [onbeforexrselect](XRSceneScopeElement.md#onbeforexrselect)
- [renderOptions](XRSceneScopeElement.md#renderoptions)
- [scene](XRSceneScopeElement.md#scene)
- [transition](XRSceneScopeElement.md#transition)
- [\_$litElement$](XRSceneScopeElement.md#_$litelement$)
- [requiredAttrs](XRSceneScopeElement.md#requiredattrs)

### Methods

- [toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## Other

### constructor

• **new XRSceneScopeElement**\<`T`\>(): [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Returns

[`XRSceneScopeElement`](XRSceneScopeElement.md)\<`T`\>

#### Inherited from

[XRElement](XRElement.md).[constructor](XRElement.md#constructor)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[animation](XRElement.md#animation)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRElement](XRElement.md).[disabled](XRElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `T` = `null`

#### Inherited from

[XRElement](XRElement.md).[entity](XRElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRSceneScopeElement`](XRSceneScopeElement.md)\<`T`\>\>

#### Inherited from

[XRElement](XRElement.md).[evaluated](XRElement.md#evaluated)

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRElement](XRElement.md).[inspect](XRElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRElement](XRElement.md).[logger](XRElement.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[XRElement](XRElement.md).[onbeforexrselect](XRElement.md#onbeforexrselect)

___

### scene

• **scene**: `Scene`

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[transition](XRElement.md#transition)

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRElement](XRElement.md).[_$litElement$](XRElement.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[requiredAttrs](XRElement.md#requiredattrs)

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`T`\>

#### Returns

[`XRSceneScopeElement`](XRSceneScopeElement.md)\<`T`\>

#### Inherited from

[XRElement](XRElement.md).[toAttributeObject](XRElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRElement](XRElement.md).[renderOptions](XRElement.md#renderoptions)
