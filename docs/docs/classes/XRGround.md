# Class: XRGround

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`any`\>

  ↳ **`XRGround`**

## Table of contents

### Constructors

- [constructor](XRGround.md#constructor)

### Properties

- [animation](XRGround.md#animation)
- [disabled](XRGround.md#disabled)
- [entity](XRGround.md#entity)
- [evaluated](XRGround.md#evaluated)
- [inspect](XRGround.md#inspect)
- [logger](XRGround.md#logger)
- [onbeforexrselect](XRGround.md#onbeforexrselect)
- [position](XRGround.md#position)
- [renderOptions](XRGround.md#renderoptions)
- [rotation](XRGround.md#rotation)
- [scale](XRGround.md#scale)
- [scene](XRGround.md#scene)
- [size](XRGround.md#size)
- [transition](XRGround.md#transition)
- [type](XRGround.md#type)
- [\_$litElement$](XRGround.md#_$litelement$)
- [requiredAttrs](XRGround.md#requiredattrs)

### Methods

- [connected](XRGround.md#connected)
- [disconnected](XRGround.md#disconnected)
- [render](XRGround.md#render)
- [toAttributeObject](XRGround.md#toattributeobject)

## Other

### constructor

• **new XRGround**(): [`XRGround`](XRGround.md)

#### Returns

[`XRGround`](XRGround.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: `any` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRGround`](XRGround.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

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

• **position**: [`Vector3`](Vector3.md)

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

### size

• **size**: `number` = `100`

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[transition](XRSceneScopeElement.md#transition)

___

### type

• **type**: `string` = `'plane'`

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

### render

▸ **render**(): `TemplateResult`\<``1``\>

#### Returns

`TemplateResult`\<``1``\>

#### Overrides

XRSceneScopeElement.render

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRGround`](XRGround.md)

#### Returns

[`XRGround`](XRGround.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
