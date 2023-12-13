# Class: XREngine

## Hierarchy

- [`XRElement`](XRElement.md)

  ↳ **`XREngine`**

## Table of contents

### Constructors

- [constructor](XREngine.md#constructor)

### Properties

- [ID](XREngine.md#id)
- [animation](XREngine.md#animation)
- [autoResize](XREngine.md#autoresize)
- [containerEle](XREngine.md#containerele)
- [disabled](XREngine.md#disabled)
- [engine](XREngine.md#engine)
- [entity](XREngine.md#entity)
- [evaluatedProps](XREngine.md#evaluatedprops)
- [height](XREngine.md#height)
- [inspect](XREngine.md#inspect)
- [logger](XREngine.md#logger)
- [onbeforexrselect](XREngine.md#onbeforexrselect)
- [renderOptions](XREngine.md#renderoptions)
- [transition](XREngine.md#transition)
- [width](XREngine.md#width)
- [\_$litElement$](XREngine.md#_$litelement$)
- [requiredAttrs](XREngine.md#requiredattrs)

### Methods

- [connected](XREngine.md#connected)
- [disconnected](XREngine.md#disconnected)
- [render](XREngine.md#render)
- [createEngine](XREngine.md#createengine)

## Other

### constructor

• **new XREngine**(): [`XREngine`](XREngine.md)

#### Returns

[`XREngine`](XREngine.md)

#### Inherited from

[XRElement](XRElement.md).[constructor](XRElement.md#constructor)

___

### ID

• `Readonly` **ID**: `string`

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[animation](XRElement.md#animation)

___

### autoResize

• `Optional` **autoResize**: `boolean`

___

### containerEle

• **containerEle**: `HTMLDivElement`

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

### evaluatedProps

• `Readonly` **evaluatedProps**: `PickStringKey`\<[`XREngine`](XREngine.md)\>

#### Inherited from

[XRElement](XRElement.md).[evaluatedProps](XRElement.md#evaluatedprops)

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
