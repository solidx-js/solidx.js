# bjs-frame

## Table of contents

### Classes

- [AttributeObserverController](classes/AttributeObserverController.md)
- [Color3](classes/Color3.md)
- [Color4](classes/Color4.md)
- [ElementRegistry](classes/ElementRegistry.md)
- [EntityInspectController](classes/EntityInspectController.md)
- [EventDispatchController](classes/EventDispatchController.md)
- [LightController](classes/LightController.md)
- [MaterialController](classes/MaterialController.md)
- [Matrix](classes/Matrix.md)
- [NodeStateController](classes/NodeStateController.md)
- [Plane](classes/Plane.md)
- [Quaternion](classes/Quaternion.md)
- [RefController](classes/RefController.md)
- [RefController2](classes/RefController2.md)
- [TextureController](classes/TextureController.md)
- [TickController](classes/TickController.md)
- [TransformLikeController](classes/TransformLikeController.md)
- [TweenController](classes/TweenController.md)
- [Vector2](classes/Vector2.md)
- [Vector3](classes/Vector3.md)
- [Vector4](classes/Vector4.md)
- [XRBackgroundMaterial](classes/XRBackgroundMaterial.md)
- [XRBaseMaterial](classes/XRBaseMaterial.md)
- [XRCamera](classes/XRCamera.md)
- [XRCubeTexture](classes/XRCubeTexture.md)
- [XRDecal](classes/XRDecal.md)
- [XRDirectionalLight](classes/XRDirectionalLight.md)
- [XRElement](classes/XRElement.md)
- [XREnv](classes/XREnv.md)
- [XRGeometry](classes/XRGeometry.md)
- [XRGridMaterial](classes/XRGridMaterial.md)
- [XRGround](classes/XRGround.md)
- [XRHemisphericLight](classes/XRHemisphericLight.md)
- [XRKeyFrames](classes/XRKeyFrames.md)
- [XRMaterial](classes/XRMaterial.md)
- [XRMesh](classes/XRMesh.md)
- [XRModel](classes/XRModel.md)
- [XRNode](classes/XRNode.md)
- [XRPointLight](classes/XRPointLight.md)
- [XRRay](classes/XRRay.md)
- [XRScene](classes/XRScene.md)
- [XRSceneScopeElement](classes/XRSceneScopeElement.md)
- [XRTexture](classes/XRTexture.md)

### Type Aliases

- [IDataType](README.md#idatatype)
- [IDataTypeMap](README.md#idatatypemap)
- [IMaterialControllerHostType](README.md#imaterialcontrollerhosttype)

### Variables

- [Context](README.md#context)
- [Decorator](README.md#decorator)
- [ElementUtil](README.md#elementutil)
- [EntityTagNameMap](README.md#entitytagnamemap)
- [LerpFns](README.md#lerpfns)
- [MathUtil](README.md#mathutil)
- [Schema](README.md#schema)

### Functions

- [makeUniqueKey](README.md#makeuniquekey)
- [parseDurationString](README.md#parsedurationstring)
- [randomID](README.md#randomid)
- [typedClone](README.md#typedclone)

## Type Aliases

### IDataType

Ƭ **IDataType**: ``"Number"`` \| ``"String"`` \| ``"Boolean"`` \| ``"Array"`` \| ``"Vector2"`` \| ``"Vector3"`` \| ``"Vector4"`` \| ``"Object"`` \| ``"Color3"`` \| ``"Color4"`` \| ``"Matrix"``

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
| `String` | `string` |
| `Vector2` | [`Vector2`](classes/Vector2.md) |
| `Vector3` | [`Vector3`](classes/Vector3.md) |
| `Vector4` | [`Vector4`](classes/Vector4.md) |

___

### IMaterialControllerHostType

Ƭ **IMaterialControllerHostType**: [`XRElement`](classes/XRElement.md)\<`Material`\> & \{ `alpha`: `number` ; `alphaMode`: `number` ; `backFaceCulling`: `boolean` ; `disableDepthWrite`: `boolean` ; `sideOrientation`: `number` ; `wireframe`: `boolean` ; `zOffset`: `number`  }

## Variables

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
| `property` | (`dType`: [`IDataType`](README.md#idatatype), `attribute?`: `string`) => `PropertyDecorator` |
| `scene` | () => `ConsumeDecorator`\<`Scene`\> |

___

### ElementUtil

• `Const` **ElementUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `closestTransformNodeLike` | (`ele`: `HTMLElement`) => ``null`` \| `TransformNode` |
| `toAttributeObject` | \<T\>(`ele`: `T`) => `T` |

___

### EntityTagNameMap

• `Const` **EntityTagNameMap**: `Partial`\<`Record`\<`IEntityType`, `string`\>\>

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
| `parse` | \<T\>(`type`: `T`, `data`: `string`) => [`IDataTypeMap`](README.md#idatatypemap)[`T`] |
| `stringify` | \<T\>(`type`: `T`, `data`: [`IDataTypeMap`](README.md#idatatypemap)[`T`]) => `string` |

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

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| [`Vector2`](classes/Vector2.md) \| [`Vector3`](classes/Vector3.md) \| [`Color3`](classes/Color3.md) \| [`Color4`](classes/Color4.md) \| [`Matrix`](classes/Matrix.md) \| [`Quaternion`](classes/Quaternion.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`T`
