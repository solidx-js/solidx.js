# Class: XREnv

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`any`\>

  ↳ **`XREnv`**

## Table of contents

### Constructors

- [constructor](XREnv.md#constructor)

### Properties

- [animation](XREnv.md#animation)
- [disabled](XREnv.md#disabled)
- [entity](XREnv.md#entity)
- [evaluated](XREnv.md#evaluated)
- [inspect](XREnv.md#inspect)
- [logger](XREnv.md#logger)
- [onbeforexrselect](XREnv.md#onbeforexrselect)
- [position](XREnv.md#position)
- [renderOptions](XREnv.md#renderoptions)
- [rotation](XREnv.md#rotation)
- [scale](XREnv.md#scale)
- [scene](XREnv.md#scene)
- [transition](XREnv.md#transition)
- [\_$litElement$](XREnv.md#_$litelement$)
- [defaultGroundTexture](XREnv.md#defaultgroundtexture)
- [defaultSkyBoxTexture](XREnv.md#defaultskyboxtexture)
- [requiredAttrs](XREnv.md#requiredattrs)

### Methods

- [connected](XREnv.md#connected)
- [disconnected](XREnv.md#disconnected)
- [render](XREnv.md#render)
- [toAttributeObject](XREnv.md#toattributeobject)

## Other

### constructor

• **new XREnv**(): [`XREnv`](XREnv.md)

#### Returns

[`XREnv`](XREnv.md)

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

• `Readonly` **evaluated**: `PickStringKey`\<[`XREnv`](XREnv.md)\>

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

### defaultGroundTexture

▪ `Static` **defaultGroundTexture**: `string`

___

### defaultSkyBoxTexture

▪ `Static` **defaultSkyBoxTexture**: `string`

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

▸ **toAttributeObject**(): [`XREnv`](XREnv.md)

#### Returns

[`XREnv`](XREnv.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
