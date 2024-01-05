# Class: XRModel

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`TransformNode`\>

  ↳ **`XRModel`**

## Implements

- [`ITransformNodeLikeImpl`](../README.md#itransformnodelikeimpl)

## Table of contents

### Constructors

- [constructor](XRModel.md#constructor)

### Properties

- [\_internalStyleData](XRModel.md#_internalstyledata)
- [\_material](XRModel.md#_material)
- [autoPlay](XRModel.md#autoplay)
- [disablePointerEvent](XRModel.md#disablepointerevent)
- [disabled](XRModel.md#disabled)
- [entity](XRModel.md#entity)
- [entityDelegated](XRModel.md#entitydelegated)
- [evaluated](XRModel.md#evaluated)
- [extension](XRModel.md#extension)
- [flatShading](XRModel.md#flatshading)
- [inspect](XRModel.md#inspect)
- [layer](XRModel.md#layer)
- [logger](XRModel.md#logger)
- [loop](XRModel.md#loop)
- [material](XRModel.md#material)
- [onbeforexrselect](XRModel.md#onbeforexrselect)
- [originTransform](XRModel.md#origintransform)
- [position](XRModel.md#position)
- [preload](XRModel.md#preload)
- [quaternion](XRModel.md#quaternion)
- [renderOptions](XRModel.md#renderoptions)
- [rotation](XRModel.md#rotation)
- [scale](XRModel.md#scale)
- [scene](XRModel.md#scene)
- [src](XRModel.md#src)
- [\_$litElement$](XRModel.md#_$litelement$)
- [requiredAttrs](XRModel.md#requiredattrs)

### Accessors

- [container](XRModel.md#container)
- [displayText](XRModel.md#displaytext)

### Methods

- [checkComputedStyles](XRModel.md#checkcomputedstyles)
- [connected](XRModel.md#connected)
- [convertPropertyValue](XRModel.md#convertpropertyvalue)
- [disconnected](XRModel.md#disconnected)
- [reloadAttrFromComputedStyles](XRModel.md#reloadattrfromcomputedstyles)
- [render](XRModel.md#render)
- [toAttributeObject](XRModel.md#toattributeobject)

## Other

### constructor

• **new XRModel**(): [`XRModel`](XRModel.md)

#### Returns

[`XRModel`](XRModel.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### \_internalStyleData

• **\_internalStyleData**: `Record`\<`string`, `Record`\<`string`, ``null`` \| `string`\>\> = `{}`

___

### \_material

• **\_material**: ``null`` \| `HTMLElement` & [`IMaterialImpl`](../README.md#imaterialimpl) = `null`

___

### autoPlay

• **autoPlay**: ``null`` \| `string` = `null`

___

### disablePointerEvent

• **disablePointerEvent**: ``null`` \| `boolean` = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `TransformNode` = `null`

#### Implementation of

ITransformNodeLikeImpl.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### entityDelegated

• **entityDelegated**: ``null`` \| `boolean` = `null`

#### Implementation of

ITransformNodeLikeImpl.entityDelegated

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRModel`](XRModel.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### extension

• **extension**: ``null`` \| `string` = `null`

___

### flatShading

• **flatShading**: ``null`` \| `boolean` = `null`

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### layer

• **layer**: ``null`` \| `number` = `null`

#### Implementation of

ITransformNodeLikeImpl.layer

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[logger](XRSceneScopeElement.md#logger)

___

### loop

• **loop**: ``null`` \| `boolean` = `null`

___

### material

• **material**: ``null`` \| `string` = `null`

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

### originTransform

• **originTransform**: ``null`` \| [`Matrix`](Matrix.md) = `null`

原点转换。如果设置了该属性，则会把模型的原点转换到指定的位置。

___

### position

• **position**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.position

___

### preload

• **preload**: ``null`` \| `boolean` = `null`

___

### quaternion

• **quaternion**: ``null`` \| [`Quaternion`](Quaternion.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.quaternion

___

### rotation

• **rotation**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.rotation

___

### scale

• **scale**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.scale

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### src

• **src**: ``null`` \| `string` = `null`

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

### container

• `get` **container**(): ``null`` \| `AssetContainer`

#### Returns

``null`` \| `AssetContainer`

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

### render

▸ **render**(): ``null`` \| `TemplateResult`\<``1``\>

#### Returns

``null`` \| `TemplateResult`\<``1``\>

#### Overrides

XRSceneScopeElement.render

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRModel`](XRModel.md)

#### Returns

[`XRModel`](XRModel.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
