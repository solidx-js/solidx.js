# Class: XRCubeTexture

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`CubeTexture`\>

  ↳ **`XRCubeTexture`**

## Table of contents

### Constructors

- [constructor](XRCubeTexture.md#constructor)

### Properties

- [animation](XRCubeTexture.md#animation)
- [coordinatesIndex](XRCubeTexture.md#coordinatesindex)
- [coordinatesMode](XRCubeTexture.md#coordinatesmode)
- [disabled](XRCubeTexture.md#disabled)
- [entity](XRCubeTexture.md#entity)
- [evaluated](XRCubeTexture.md#evaluated)
- [hasAlpha](XRCubeTexture.md#hasalpha)
- [inspect](XRCubeTexture.md#inspect)
- [level](XRCubeTexture.md#level)
- [logger](XRCubeTexture.md#logger)
- [onbeforexrselect](XRCubeTexture.md#onbeforexrselect)
- [renderOptions](XRCubeTexture.md#renderoptions)
- [rotationY](XRCubeTexture.md#rotationy)
- [scene](XRCubeTexture.md#scene)
- [transition](XRCubeTexture.md#transition)
- [url](XRCubeTexture.md#url)
- [wrapU](XRCubeTexture.md#wrapu)
- [wrapV](XRCubeTexture.md#wrapv)
- [\_$litElement$](XRCubeTexture.md#_$litelement$)
- [requiredAttrs](XRCubeTexture.md#requiredattrs)

### Methods

- [connected](XRCubeTexture.md#connected)
- [disconnected](XRCubeTexture.md#disconnected)
- [toAttributeObject](XRCubeTexture.md#toattributeobject)

## Other

### constructor

• **new XRCubeTexture**(): [`XRCubeTexture`](XRCubeTexture.md)

#### Returns

[`XRCubeTexture`](XRCubeTexture.md)

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

• **entity**: ``null`` \| `CubeTexture` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRCubeTexture`](XRCubeTexture.md)\>

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

### rotationY

• **rotationY**: `number` = `0`

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

### url

• **url**: `string` = `''`

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

▸ **toAttributeObject**(): [`XRCubeTexture`](XRCubeTexture.md)

#### Returns

[`XRCubeTexture`](XRCubeTexture.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
