# Class: XRMesh

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`Mesh`\>

  ↳ **`XRMesh`**

## Implements

- [`ITransformNodeLikeImpl`](../README.md#itransformnodelikeimpl)

## Table of contents

### Constructors

- [constructor](XRMesh.md#constructor)

### Properties

- [\_geometry](XRMesh.md#_geometry)
- [\_material](XRMesh.md#_material)
- [disablePointerEvent](XRMesh.md#disablepointerevent)
- [disabled](XRMesh.md#disabled)
- [entity](XRMesh.md#entity)
- [evaluated](XRMesh.md#evaluated)
- [geometry](XRMesh.md#geometry)
- [inspect](XRMesh.md#inspect)
- [layer](XRMesh.md#layer)
- [logger](XRMesh.md#logger)
- [material](XRMesh.md#material)
- [onbeforexrselect](XRMesh.md#onbeforexrselect)
- [position](XRMesh.md#position)
- [quaternion](XRMesh.md#quaternion)
- [renderOptions](XRMesh.md#renderoptions)
- [rotation](XRMesh.md#rotation)
- [scale](XRMesh.md#scale)
- [scene](XRMesh.md#scene)
- [\_$litElement$](XRMesh.md#_$litelement$)
- [requiredAttrs](XRMesh.md#requiredattrs)

### Accessors

- [displayText](XRMesh.md#displaytext)

### Methods

- [checkComputedStyles](XRMesh.md#checkcomputedstyles)
- [connected](XRMesh.md#connected)
- [convertPropertyValue](XRMesh.md#convertpropertyvalue)
- [disconnected](XRMesh.md#disconnected)
- [reloadAttrFromComputedStyles](XRMesh.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRMesh.md#toattributeobject)

## Other

### constructor

• **new XRMesh**(): [`XRMesh`](XRMesh.md)

#### Returns

[`XRMesh`](XRMesh.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### \_geometry

• **\_geometry**: ``null`` \| `HTMLElement` & [`IGeometryImpl`](../README.md#igeometryimpl) = `null`

___

### \_material

• **\_material**: ``null`` \| `HTMLElement` & [`IMaterialImpl`](../README.md#imaterialimpl) = `null`

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

• **entity**: ``null`` \| `Mesh` = `null`

#### Implementation of

ITransformNodeLikeImpl.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRMesh`](XRMesh.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### geometry

• **geometry**: ``null`` \| `string` = `null`

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

### position

• **position**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.position

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

▸ **toAttributeObject**(): [`XRMesh`](XRMesh.md)

#### Returns

[`XRMesh`](XRMesh.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
