# Class: XRDragger

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`TransformNode`\>

  ↳ **`XRDragger`**

## Table of contents

### Constructors

- [constructor](XRDragger.md#constructor)

### Properties

- [\_target](XRDragger.md#_target)
- [disabled](XRDragger.md#disabled)
- [enablePosition](XRDragger.md#enableposition)
- [enableRotation](XRDragger.md#enablerotation)
- [enableScale](XRDragger.md#enablescale)
- [entity](XRDragger.md#entity)
- [evaluated](XRDragger.md#evaluated)
- [inspect](XRDragger.md#inspect)
- [logger](XRDragger.md#logger)
- [onbeforexrselect](XRDragger.md#onbeforexrselect)
- [renderOptions](XRDragger.md#renderoptions)
- [scale](XRDragger.md#scale)
- [scene](XRDragger.md#scene)
- [target](XRDragger.md#target)
- [\_$litElement$](XRDragger.md#_$litelement$)
- [requiredAttrs](XRDragger.md#requiredattrs)

### Accessors

- [displayText](XRDragger.md#displaytext)

### Methods

- [checkComputedStyles](XRDragger.md#checkcomputedstyles)
- [connected](XRDragger.md#connected)
- [convertPropertyValue](XRDragger.md#convertpropertyvalue)
- [disconnected](XRDragger.md#disconnected)
- [reloadAttrFromComputedStyles](XRDragger.md#reloadattrfromcomputedstyles)
- [render](XRDragger.md#render)
- [toAttributeObject](XRDragger.md#toattributeobject)

## Other

### constructor

• **new XRDragger**(): [`XRDragger`](XRDragger.md)

#### Returns

[`XRDragger`](XRDragger.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### \_target

• **\_target**: ``null`` \| [`XRElement`](XRElement.md)\<``null`` \| `TransformNode`\> & [`ITransformNodeLikeImpl`](../README.md#itransformnodelikeimpl) = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### enablePosition

• **enablePosition**: ``null`` \| `boolean` = `null`

___

### enableRotation

• **enableRotation**: ``null`` \| `boolean` = `null`

___

### enableScale

• **enableScale**: ``null`` \| `boolean` = `null`

___

### entity

• **entity**: ``null`` \| `TransformNode` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRDragger`](XRDragger.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

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

### scale

• **scale**: ``null`` \| [`Vector3`](Vector3.md) = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### target

• **target**: ``null`` \| `string` = `null`

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

### render

▸ **render**(): `undefined` \| `TemplateResult`\<``1``\>

#### Returns

`undefined` \| `TemplateResult`\<``1``\>

#### Overrides

XRSceneScopeElement.render

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRDragger`](XRDragger.md)

#### Returns

[`XRDragger`](XRDragger.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
