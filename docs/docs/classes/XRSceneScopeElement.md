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

  ↳↳ [`XRPipelineSSAO2`](XRPipelineSSAO2.md)

  ↳↳ [`XRVolumetricLight`](XRVolumetricLight.md)

  ↳↳ [`XRGeometry`](XRGeometry.md)

  ↳↳ [`XRLine`](XRLine.md)

  ↳↳ [`XRMesh`](XRMesh.md)

  ↳↳ [`XRModel`](XRModel.md)

  ↳↳ [`XRNode`](XRNode.md)

  ↳↳ [`XRDecal`](XRDecal.md)

  ↳↳ [`XRDragger`](XRDragger.md)

  ↳↳ [`XRRay`](XRRay.md)

  ↳↳ [`XRCubeTexture`](XRCubeTexture.md)

  ↳↳ [`XRTexture`](XRTexture.md)

  ↳↳ [`XRBaseMaterial`](XRBaseMaterial.md)

  ↳↳ [`PrimitiveBase`](PrimitiveBase.md)

## Table of contents

### Constructors

- [constructor](XRSceneScopeElement.md#constructor)

### Properties

- [disabled](XRSceneScopeElement.md#disabled)
- [entity](XRSceneScopeElement.md#entity)
- [evaluated](XRSceneScopeElement.md#evaluated)
- [inspect](XRSceneScopeElement.md#inspect)
- [logger](XRSceneScopeElement.md#logger)
- [onbeforexrselect](XRSceneScopeElement.md#onbeforexrselect)
- [renderOptions](XRSceneScopeElement.md#renderoptions)
- [scene](XRSceneScopeElement.md#scene)
- [\_$litElement$](XRSceneScopeElement.md#_$litelement$)
- [requiredAttrs](XRSceneScopeElement.md#requiredattrs)

### Accessors

- [displayText](XRSceneScopeElement.md#displaytext)

### Methods

- [checkComputedStyles](XRSceneScopeElement.md#checkcomputedstyles)
- [convertPropertyValue](XRSceneScopeElement.md#convertpropertyvalue)
- [reloadAttrFromComputedStyles](XRSceneScopeElement.md#reloadattrfromcomputedstyles)
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

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

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

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

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

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

XRElement.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[XRElement](XRElement.md).[checkComputedStyles](XRElement.md#checkcomputedstyles)

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

[XRElement](XRElement.md).[convertPropertyValue](XRElement.md#convertpropertyvalue)

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

[XRElement](XRElement.md).[reloadAttrFromComputedStyles](XRElement.md#reloadattrfromcomputedstyles)

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
