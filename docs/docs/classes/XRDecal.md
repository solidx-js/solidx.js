# Class: XRDecal

贴花

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`TransformNode`\>

  ↳ **`XRDecal`**

## Implements

- [`ITransformNodeLikeImpl`](../README.md#itransformnodelikeimpl)

## Table of contents

### Constructors

- [constructor](XRDecal.md#constructor)

### Properties

- [disabled](XRDecal.md#disabled)
- [entity](XRDecal.md#entity)
- [evaluated](XRDecal.md#evaluated)
- [img](XRDecal.md#img)
- [imgLevel](XRDecal.md#imglevel)
- [inspect](XRDecal.md#inspect)
- [layer](XRDecal.md#layer)
- [logger](XRDecal.md#logger)
- [onbeforexrselect](XRDecal.md#onbeforexrselect)
- [position](XRDecal.md#position)
- [quaternion](XRDecal.md#quaternion)
- [rayScope](XRDecal.md#rayscope)
- [renderOptions](XRDecal.md#renderoptions)
- [rotation](XRDecal.md#rotation)
- [scale](XRDecal.md#scale)
- [scene](XRDecal.md#scene)
- [useRay](XRDecal.md#useray)
- [\_$litElement$](XRDecal.md#_$litelement$)
- [requiredAttrs](XRDecal.md#requiredattrs)

### Accessors

- [displayText](XRDecal.md#displaytext)

### Methods

- [checkComputedStyles](XRDecal.md#checkcomputedstyles)
- [connected](XRDecal.md#connected)
- [convertPropertyValue](XRDecal.md#convertpropertyvalue)
- [disconnected](XRDecal.md#disconnected)
- [reload](XRDecal.md#reload)
- [reloadAttrFromComputedStyles](XRDecal.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRDecal.md#toattributeobject)

## Other

### constructor

• **new XRDecal**(): [`XRDecal`](XRDecal.md)

#### Returns

[`XRDecal`](XRDecal.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

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

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRDecal`](XRDecal.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### img

• **img**: ``null`` \| `string` = `null`

___

### imgLevel

• **imgLevel**: ``null`` \| `number` = `null`

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

### rayScope

• **rayScope**: ``null`` \| ``"scene"`` \| ``"parent"`` = `'scene'`

___

### rotation

• **rotation**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

ITransformNodeLikeImpl.rotation

___

### scale

• **scale**: ``null`` \| [`Vector3`](Vector3.md) = `null`

贴花尺寸

- x: width
- y: height
- z: depth

#### Implementation of

ITransformNodeLikeImpl.scale

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### useRay

• **useRay**: ``null`` \| `boolean` = `null`

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

### reload

▸ **reload**(): `void`

#### Returns

`void`

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

▸ **toAttributeObject**(): [`XRDecal`](XRDecal.md)

#### Returns

[`XRDecal`](XRDecal.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
