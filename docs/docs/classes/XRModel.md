# Class: XRModel

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`TransformNode`\>

  ↳ **`XRModel`**

## Table of contents

### Constructors

- [constructor](XRModel.md#constructor)

### Properties

- [animation](XRModel.md#animation)
- [autoPlay](XRModel.md#autoplay)
- [disabled](XRModel.md#disabled)
- [entity](XRModel.md#entity)
- [evaluated](XRModel.md#evaluated)
- [extension](XRModel.md#extension)
- [flatShading](XRModel.md#flatshading)
- [inspect](XRModel.md#inspect)
- [logger](XRModel.md#logger)
- [loop](XRModel.md#loop)
- [material](XRModel.md#material)
- [onbeforexrselect](XRModel.md#onbeforexrselect)
- [originTransform](XRModel.md#origintransform)
- [position](XRModel.md#position)
- [preload](XRModel.md#preload)
- [renderOptions](XRModel.md#renderoptions)
- [rotation](XRModel.md#rotation)
- [scale](XRModel.md#scale)
- [scene](XRModel.md#scene)
- [src](XRModel.md#src)
- [transition](XRModel.md#transition)
- [\_$litElement$](XRModel.md#_$litelement$)
- [requiredAttrs](XRModel.md#requiredattrs)

### Methods

- [connected](XRModel.md#connected)
- [disconnected](XRModel.md#disconnected)
- [toAttributeObject](XRModel.md#toattributeobject)

## Other

### constructor

• **new XRModel**(): [`XRModel`](XRModel.md)

#### Returns

[`XRModel`](XRModel.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### autoPlay

• `Optional` **autoPlay**: `string`

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `TransformNode` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRModel`](XRModel.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### extension

• `Optional` **extension**: `string`

___

### flatShading

• **flatShading**: `boolean` = `false`

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[logger](XRSceneScopeElement.md#logger)

___

### loop

• **loop**: `boolean` = `false`

___

### material

• `Optional` **material**: `string`

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

• `Optional` **originTransform**: [`Matrix`](Matrix.md)

原点转换。如果设置了该属性，则会把模型的原点转换到指定的位置。

___

### position

• **position**: [`Vector3`](Vector3.md)

___

### preload

• `Optional` **preload**: `boolean`

___

### rotation

• **rotation**: [`Vector3`](Vector3.md)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### src

• **src**: `string` = `''`

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[transition](XRSceneScopeElement.md#transition)

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

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.connected

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.disconnected

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
