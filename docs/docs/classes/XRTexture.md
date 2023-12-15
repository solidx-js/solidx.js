# Class: XRTexture

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`Texture`\>

  ↳ **`XRTexture`**

## Table of contents

### Constructors

- [constructor](XRTexture.md#constructor)

### Properties

- [animation](XRTexture.md#animation)
- [coordinatesIndex](XRTexture.md#coordinatesindex)
- [coordinatesMode](XRTexture.md#coordinatesmode)
- [disabled](XRTexture.md#disabled)
- [entity](XRTexture.md#entity)
- [evaluated](XRTexture.md#evaluated)
- [hasAlpha](XRTexture.md#hasalpha)
- [inspect](XRTexture.md#inspect)
- [level](XRTexture.md#level)
- [logger](XRTexture.md#logger)
- [onbeforexrselect](XRTexture.md#onbeforexrselect)
- [renderOptions](XRTexture.md#renderoptions)
- [scene](XRTexture.md#scene)
- [transition](XRTexture.md#transition)
- [uOffset](XRTexture.md#uoffset)
- [uScale](XRTexture.md#uscale)
- [url](XRTexture.md#url)
- [vOffset](XRTexture.md#voffset)
- [vScale](XRTexture.md#vscale)
- [wrapU](XRTexture.md#wrapu)
- [wrapV](XRTexture.md#wrapv)
- [\_$litElement$](XRTexture.md#_$litelement$)
- [requiredAttrs](XRTexture.md#requiredattrs)

### Methods

- [connected](XRTexture.md#connected)
- [disconnected](XRTexture.md#disconnected)
- [toAttributeObject](XRTexture.md#toattributeobject)

## Other

### constructor

• **new XRTexture**(): [`XRTexture`](XRTexture.md)

#### Returns

[`XRTexture`](XRTexture.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### coordinatesIndex

• **coordinatesIndex**: `number` = `0`

___

### coordinatesMode

• **coordinatesMode**: `number` = `0`

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `Texture` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRTexture`](XRTexture.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### hasAlpha

• **hasAlpha**: `boolean` = `false`

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### level

• **level**: `number` = `1`

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

### uOffset

• **uOffset**: `number` = `0`

___

### uScale

• **uScale**: `number` = `1`

___

### url

• **url**: `string` = `''`

___

### vOffset

• **vOffset**: `number` = `0`

___

### vScale

• **vScale**: `number` = `1`

___

### wrapU

• **wrapU**: `number` = `0`

___

### wrapV

• **wrapV**: `number` = `0`

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[_$litElement$](XRSceneScopeElement.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[]

#### Overrides

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

▸ **toAttributeObject**(): [`XRTexture`](XRTexture.md)

#### Returns

[`XRTexture`](XRTexture.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
