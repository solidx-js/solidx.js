# Class: XRScene

## Hierarchy

- [`XRElement`](XRElement.md)

  ↳ **`XRScene`**

## Table of contents

### Constructors

- [constructor](XRScene.md#constructor)

### Properties

- [animation](XRScene.md#animation)
- [contrast](XRScene.md#contrast)
- [disabled](XRScene.md#disabled)
- [engine](XRScene.md#engine)
- [entity](XRScene.md#entity)
- [environmentTexture](XRScene.md#environmenttexture)
- [evaluatedProps](XRScene.md#evaluatedprops)
- [exposure](XRScene.md#exposure)
- [inspect](XRScene.md#inspect)
- [logger](XRScene.md#logger)
- [onbeforexrselect](XRScene.md#onbeforexrselect)
- [renderOptions](XRScene.md#renderoptions)
- [scene](XRScene.md#scene)
- [ssao](XRScene.md#ssao)
- [transition](XRScene.md#transition)
- [\_$litElement$](XRScene.md#_$litelement$)
- [requiredAttrs](XRScene.md#requiredattrs)

### Methods

- [connected](XRScene.md#connected)
- [disconnected](XRScene.md#disconnected)

## Other

### constructor

• **new XRScene**(): [`XRScene`](XRScene.md)

#### Returns

[`XRScene`](XRScene.md)

#### Inherited from

[XRElement](XRElement.md).[constructor](XRElement.md#constructor)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[animation](XRElement.md#animation)

___

### contrast

• **contrast**: `number` = `1`

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

• `Optional` **environmentTexture**: `string`

___

### evaluatedProps

• `Readonly` **evaluatedProps**: `PickStringKey`\<[`XRScene`](XRScene.md)\>

#### Inherited from

[XRElement](XRElement.md).[evaluatedProps](XRElement.md#evaluatedprops)

___

### exposure

• **exposure**: `number` = `1`

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

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRElement](XRElement.md).[renderOptions](XRElement.md#renderoptions)
