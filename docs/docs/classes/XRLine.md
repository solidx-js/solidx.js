# Class: XRLine

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`LinesMesh`\>

  ↳ **`XRLine`**

## Implements

- `Omit`\<[`ITransformNodeLikeImpl`](../README.md#itransformnodelikeimpl), ``"entityDelegated"``\>

## Table of contents

### Constructors

- [constructor](XRLine.md#constructor)

### Properties

- [colors](XRLine.md#colors)
- [disablePointerEvent](XRLine.md#disablepointerevent)
- [disabled](XRLine.md#disabled)
- [entity](XRLine.md#entity)
- [evaluated](XRLine.md#evaluated)
- [inspect](XRLine.md#inspect)
- [layer](XRLine.md#layer)
- [logger](XRLine.md#logger)
- [onbeforexrselect](XRLine.md#onbeforexrselect)
- [points](XRLine.md#points)
- [position](XRLine.md#position)
- [quaternion](XRLine.md#quaternion)
- [renderOptions](XRLine.md#renderoptions)
- [rotation](XRLine.md#rotation)
- [scale](XRLine.md#scale)
- [scene](XRLine.md#scene)
- [\_$litElement$](XRLine.md#_$litelement$)
- [requiredAttrs](XRLine.md#requiredattrs)

### Accessors

- [displayText](XRLine.md#displaytext)

### Methods

- [checkComputedStyles](XRLine.md#checkcomputedstyles)
- [connected](XRLine.md#connected)
- [convertPropertyValue](XRLine.md#convertpropertyvalue)
- [disconnected](XRLine.md#disconnected)
- [reloadAttrFromComputedStyles](XRLine.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRLine.md#toattributeobject)

## Other

### constructor

• **new XRLine**(): [`XRLine`](XRLine.md)

#### Returns

[`XRLine`](XRLine.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### colors

• **colors**: ``null`` \| `string` = `null`

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

• **entity**: ``null`` \| `LinesMesh` = `null`

#### Implementation of

Omit.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRLine`](XRLine.md)\>

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

Omit.layer

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

### points

• **points**: ``null`` \| `string` = `null`

___

### position

• **position**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

Omit.position

___

### quaternion

• **quaternion**: ``null`` \| [`Quaternion`](Quaternion.md) = `null`

#### Implementation of

Omit.quaternion

___

### rotation

• **rotation**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

Omit.rotation

___

### scale

• **scale**: ``null`` \| [`Vector3`](Vector3.md) = `null`

#### Implementation of

Omit.scale

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

▸ **toAttributeObject**(): [`XRLine`](XRLine.md)

#### Returns

[`XRLine`](XRLine.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
