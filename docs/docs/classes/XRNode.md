# Class: XRNode

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`TransformNode`\>

  ↳ **`XRNode`**

## Implements

- [`ITransformNodeLikeImpl`](../README.md#itransformnodelikeimpl)

## Table of contents

### Constructors

- [constructor](XRNode.md#constructor)

### Properties

- [disabled](XRNode.md#disabled)
- [entity](XRNode.md#entity)
- [evaluated](XRNode.md#evaluated)
- [inspect](XRNode.md#inspect)
- [layer](XRNode.md#layer)
- [logger](XRNode.md#logger)
- [onbeforexrselect](XRNode.md#onbeforexrselect)
- [position](XRNode.md#position)
- [quaternion](XRNode.md#quaternion)
- [renderOptions](XRNode.md#renderoptions)
- [rotation](XRNode.md#rotation)
- [scale](XRNode.md#scale)
- [scene](XRNode.md#scene)
- [\_$litElement$](XRNode.md#_$litelement$)
- [requiredAttrs](XRNode.md#requiredattrs)

### Accessors

- [displayText](XRNode.md#displaytext)

### Methods

- [checkComputedStyles](XRNode.md#checkcomputedstyles)
- [connected](XRNode.md#connected)
- [convertPropertyValue](XRNode.md#convertpropertyvalue)
- [disconnected](XRNode.md#disconnected)
- [reloadAttrFromComputedStyles](XRNode.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRNode.md#toattributeobject)

## Other

### constructor

• **new XRNode**(): [`XRNode`](XRNode.md)

#### Returns

[`XRNode`](XRNode.md)

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

• `Readonly` **evaluated**: `PickStringKey`\<[`XRNode`](XRNode.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

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

▸ **toAttributeObject**(): [`XRNode`](XRNode.md)

#### Returns

[`XRNode`](XRNode.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
