# solidx.js

## Table of contents

### Classes

- [AttributeObserverController](classes/AttributeObserverController.md)
- [Color3](classes/Color3.md)
- [Color4](classes/Color4.md)
- [ElementRegistry](classes/ElementRegistry.md)
- [EntityInspectController](classes/EntityInspectController.md)
- [EntityQueryController](classes/EntityQueryController.md)
- [EventDispatchController](classes/EventDispatchController.md)
- [LightController](classes/LightController.md)
- [MaterialController](classes/MaterialController.md)
- [Matrix](classes/Matrix.md)
- [NodeStateController](classes/NodeStateController.md)
- [Plane](classes/Plane.md)
- [PointerController](classes/PointerController.md)
- [PrimitiveBase](classes/PrimitiveBase.md)
- [Quaternion](classes/Quaternion.md)
- [TagListRefController](classes/TagListRefController.md)
- [TagRefController](classes/TagRefController.md)
- [TextureController](classes/TextureController.md)
- [TickController](classes/TickController.md)
- [TransformLikeController](classes/TransformLikeController.md)
- [ValueWrapper](classes/ValueWrapper.md)
- [Vector2](classes/Vector2.md)
- [Vector3](classes/Vector3.md)
- [Vector4](classes/Vector4.md)
- [XRArrow](classes/XRArrow.md)
- [XRBackgroundMaterial](classes/XRBackgroundMaterial.md)
- [XRBaseMaterial](classes/XRBaseMaterial.md)
- [XRCamera](classes/XRCamera.md)
- [XRCubeTexture](classes/XRCubeTexture.md)
- [XRDecal](classes/XRDecal.md)
- [XRDirectionalLight](classes/XRDirectionalLight.md)
- [XRDragger](classes/XRDragger.md)
- [XRElement](classes/XRElement.md)
- [XREllipse](classes/XREllipse.md)
- [XREnv](classes/XREnv.md)
- [XRGridMaterial](classes/XRGridMaterial.md)
- [XRGround](classes/XRGround.md)
- [XRHemisphericLight](classes/XRHemisphericLight.md)
- [XRLine](classes/XRLine.md)
- [XRMaterial](classes/XRMaterial.md)
- [XRMesh](classes/XRMesh.md)
- [XRModel](classes/XRModel.md)
- [XRNode](classes/XRNode.md)
- [XRPipelineSSAO2](classes/XRPipelineSSAO2.md)
- [XRPointLight](classes/XRPointLight.md)
- [XRRay](classes/XRRay.md)
- [XRScene](classes/XRScene.md)
- [XRSceneScopeElement](classes/XRSceneScopeElement.md)
- [XRScreenProjector](classes/XRScreenProjector.md)
- [XRTexture](classes/XRTexture.md)
- [XRVolumetricLight](classes/XRVolumetricLight.md)
- [XRWorldAxis](classes/XRWorldAxis.md)

### Type Aliases

- [IConstraintImpl](README.md#iconstraintimpl)
- [IDataType](README.md#idatatype)
- [IDataTypeMap](README.md#idatatypemap)
- [IMaterialControllerHostType](README.md#imaterialcontrollerhosttype)
- [IMaterialImpl](README.md#imaterialimpl)
- [IModifierImpl](README.md#imodifierimpl)
- [IPostProcessImpl](README.md#ipostprocessimpl)
- [ITextureImpl](README.md#itextureimpl)
- [ITransformNodeLikeImpl](README.md#itransformnodelikeimpl)

### Variables

- [BuiltinEventList](README.md#builtineventlist)
- [Context](README.md#context)
- [Decorator](README.md#decorator)
- [ElementUtil](README.md#elementutil)
- [LerpFns](README.md#lerpfns)
- [MathUtil](README.md#mathutil)
- [Schema](README.md#schema)

### Functions

- [makeUniqueKey](README.md#makeuniquekey)
- [parseDurationString](README.md#parsedurationstring)
- [randomID](README.md#randomid)
- [typedClone](README.md#typedclone)

## Type Aliases

### IConstraintImpl

Ƭ **IConstraintImpl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `any` \| ``null`` |
| `source` | `string` \| ``null`` |
| `target` | `string` \| ``null`` |

___

### IDataType

Ƭ **IDataType**: ``"Number"`` \| ``"String"`` \| ``"Boolean"`` \| ``"Array"`` \| ``"Vector2"`` \| ``"Vector3"`` \| ``"Vector4"`` \| ``"Quaternion"`` \| ``"Object"`` \| ``"Color3"`` \| ``"Color4"`` \| ``"Matrix"`` \| ``"TransitionList"``

___

### IDataTypeMap

Ƭ **IDataTypeMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Array` | `string`[] |
| `Boolean` | `boolean` |
| `Color3` | [`Color3`](classes/Color3.md) |
| `Color4` | [`Color4`](classes/Color4.md) |
| `Matrix` | [`Matrix`](classes/Matrix.md) |
| `Number` | `number` |
| `Object` | `Record`\<`string`, `string`\> |
| `Quaternion` | [`Quaternion`](classes/Quaternion.md) |
| `String` | `string` |
| `TransitionList` | \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] |
| `Vector2` | [`Vector2`](classes/Vector2.md) |
| `Vector3` | [`Vector3`](classes/Vector3.md) |
| `Vector4` | [`Vector4`](classes/Vector4.md) |

___

### IMaterialControllerHostType

Ƭ **IMaterialControllerHostType**: [`XRElement`](classes/XRElement.md)\<[`IMaterialImpl`](README.md#imaterialimpl)[``"entity"``]\> & [`IMaterialImpl`](README.md#imaterialimpl)

___

### IMaterialImpl

Ƭ **IMaterialImpl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha` | `number` \| ``null`` |
| `alphaMode` | `number` \| ``null`` |
| `backFaceCulling` | `boolean` \| ``null`` |
| `disableDepthWrite` | `boolean` \| ``null`` |
| `entity` | `Material` \| ``null`` |
| `sideOrientation` | `number` \| ``null`` |
| `wireframe` | `boolean` \| ``null`` |
| `zOffset` | `number` \| ``null`` |

___

### IModifierImpl

Ƭ **IModifierImpl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `any` \| ``null`` |
| `source` | `string` \| ``null`` |

___

### IPostProcessImpl

Ƭ **IPostProcessImpl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `camera` | `string` \| ``null`` |
| `entity` | `PostProcess` \| ``null`` |

___

### ITextureImpl

Ƭ **ITextureImpl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `coordinatesIndex` | `number` \| ``null`` |
| `coordinatesMode` | `number` \| ``null`` |
| `entity` | `BaseTexture` \| ``null`` |
| `hasAlpha` | `boolean` \| ``null`` |
| `level` | `number` \| ``null`` |
| `wrapU` | `number` \| ``null`` |
| `wrapV` | `number` \| ``null`` |

___

### ITransformNodeLikeImpl

Ƭ **ITransformNodeLikeImpl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `TransformNode` \| ``null`` |
| `layer` | `number` \| ``null`` |
| `position` | [`Vector3`](classes/Vector3.md) \| ``null`` |
| `quaternion` | [`Quaternion`](classes/Quaternion.md) \| ``null`` |
| `rotation` | [`Vector3`](classes/Vector3.md) \| ``null`` |
| `scale` | [`Vector3`](classes/Vector3.md) \| ``null`` |

## Variables

### BuiltinEventList

• `Const` **BuiltinEventList**: `Set`\<`string`\>

___

### Context

• `Const` **Context**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AssetContainer` | {} |
| `Engine` | {} |
| `Scene` | {} |
| `TransformNode` | {} |

___

### Decorator

• `Const` **Decorator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AssetContainer` | () => `ConsumeDecorator`\<`AssetContainer`\> |
| `property` | \<T\>(`dType`: `T`, `attribute`: `string`, `initValue`: ``null`` \| [`IDataTypeMap`](README.md#idatatypemap)[`T`]) => `PropertyDecorator` |
| `scene` | () => `ConsumeDecorator`\<`Scene`\> |

___

### ElementUtil

• `Const` **ElementUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `closestTransformNodeLike` | (`ele`: `HTMLElement`) => ``null`` \| `TransformNode` |
| `displayText` | (`ele`: `HTMLElement`) => `string` |
| `toAttributeObject` | \<T\>(`ele`: `T`) => `T` |

___

### LerpFns

• `Const` **LerpFns**: \{ [K in IDataType]: Function }

___

### MathUtil

• `Const` **MathUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `calcRotAxisAngle` | (`rotQuat`: [`Quaternion`](classes/Quaternion.md)) => \{ `angle`: `number` ; `axis`: [`Vector3`](classes/Vector3.md)  } |
| `minmax` | \<T\>(`list`: `T`[], `mapper`: (`v`: `T`) => `number`) => `number`[] |

___

### Schema

• `Const` **Schema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromAttr` | \<T\>(`type`: `T`, `data`: ``null`` \| `string`) => ``null`` \| [`IDataTypeMap`](README.md#idatatypemap)[`T`] |
| `fromCssLiteral` | \<T\>(`type`: `T`, `literal`: `string`) => ``null`` \| [`IDataTypeMap`](README.md#idatatypemap)[`T`] |
| `isEqual` | \<T\>(`type`: `T`, `a`: `undefined` \| ``null`` \| [`IDataTypeMap`](README.md#idatatypemap)[`T`], `b`: `undefined` \| ``null`` \| [`IDataTypeMap`](README.md#idatatypemap)[`T`]) => `boolean` |
| `toAttr` | \<T\>(`type`: `T`, `data`: ``null`` \| [`IDataTypeMap`](README.md#idatatypemap)[`T`]) => ``null`` \| `string` |
| `toCssLiteral` | \<T\>(`type`: `T`, `data`: [`IDataTypeMap`](README.md#idatatypemap)[`T`]) => `string` |

## Functions

### makeUniqueKey

▸ **makeUniqueKey**\<`K`\>(`key`, `list`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `list` | `any`[] |

#### Returns

`void`

___

### parseDurationString

▸ **parseDurationString**(`s`): `number`

Parses a duration string and returns the duration in milliseconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | The duration string to parse. |

#### Returns

`number`

The duration in milliseconds.

___

### randomID

▸ **randomID**(): `string`

#### Returns

`string`

___

### typedClone

▸ **typedClone**\<`T`\>(`data`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`T`
