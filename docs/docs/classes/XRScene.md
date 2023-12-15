# Class: XRScene

## Hierarchy

- [`XRElement`](XRElement.md)

  ↳ **`XRScene`**

## Table of contents

### Constructors

- [constructor](XRScene.md#constructor)

### Properties

- [ID](XRScene.md#id)
- [\_environmentTexture](XRScene.md#_environmenttexture)
- [animation](XRScene.md#animation)
- [autoResize](XRScene.md#autoresize)
- [contrast](XRScene.md#contrast)
- [disabled](XRScene.md#disabled)
- [engine](XRScene.md#engine)
- [entity](XRScene.md#entity)
- [environmentTexture](XRScene.md#environmenttexture)
- [evaluated](XRScene.md#evaluated)
- [exposure](XRScene.md#exposure)
- [height](XRScene.md#height)
- [inspect](XRScene.md#inspect)
- [logger](XRScene.md#logger)
- [onbeforexrselect](XRScene.md#onbeforexrselect)
- [renderOptions](XRScene.md#renderoptions)
- [scene](XRScene.md#scene)
- [ssao](XRScene.md#ssao)
- [transition](XRScene.md#transition)
- [width](XRScene.md#width)
- [\_$litElement$](XRScene.md#_$litelement$)
- [defaultEnvMap](XRScene.md#defaultenvmap)
- [requiredAttrs](XRScene.md#requiredattrs)

### Methods

- [connected](XRScene.md#connected)
- [disconnected](XRScene.md#disconnected)
- [render](XRScene.md#render)
- [toAttributeObject](XRScene.md#toattributeobject)
- [createEngine](XRScene.md#createengine)

## Other

### constructor

• **new XRScene**(): [`XRScene`](XRScene.md)

#### Returns

[`XRScene`](XRScene.md)

#### Overrides

[XRElement](XRElement.md).[constructor](XRElement.md#constructor)

___

### ID

• `Readonly` **ID**: `string`

___

### \_environmentTexture

• **\_environmentTexture**: ``null`` \| `CubeTexture` = `null`

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[animation](XRElement.md#animation)

___

### autoResize

• `Optional` **autoResize**: `boolean`

___

### contrast

• **contrast**: `number` = `1.6`

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRElement](XRElement.md).[disabled](XRElement.md#disabled)

___

### engine

• **engine**: `Engine`

___

### entity

• **entity**: `any` = `null`

#### Inherited from

[XRElement](XRElement.md).[entity](XRElement.md#entity)

___

### environmentTexture

• **environmentTexture**: `string`

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRScene`](XRScene.md)\>

#### Inherited from

[XRElement](XRElement.md).[evaluated](XRElement.md#evaluated)

___

### exposure

• **exposure**: `number` = `1.2`

___

### height

• **height**: `number` = `400`

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRElement](XRElement.md).[inspect](XRElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRElement](XRElement.md).[logger](XRElement.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[XRElement](XRElement.md).[onbeforexrselect](XRElement.md#onbeforexrselect)

___

### scene

• **scene**: `Scene`

___

### ssao

• `Optional` **ssao**: `any`

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[transition](XRElement.md#transition)

___

### width

• **width**: `number` = `600`

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRElement](XRElement.md).[_$litElement$](XRElement.md#_$litelement$)

___

### defaultEnvMap

▪ `Static` **defaultEnvMap**: `string`

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[requiredAttrs](XRElement.md#requiredattrs)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRElement.connected

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRElement.disconnected

___

### render

▸ **render**(): `TemplateResult`\<``1``\>

#### Returns

`TemplateResult`\<``1``\>

#### Overrides

XRElement.render

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRScene`](XRScene.md)

#### Returns

[`XRScene`](XRScene.md)

#### Inherited from

[XRElement](XRElement.md).[toAttributeObject](XRElement.md#toattributeobject)

___

### createEngine

▸ **createEngine**(`canvas`): `Engine`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

#### Returns

`Engine`

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRElement](XRElement.md).[renderOptions](XRElement.md#renderoptions)
