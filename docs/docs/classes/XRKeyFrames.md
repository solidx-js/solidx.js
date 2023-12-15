# Class: XRKeyFrames

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<\{ `data`: `Record`\<`string`, `string`\> ; `percentage`: `number`  }[]\>

  ↳ **`XRKeyFrames`**

## Table of contents

### Constructors

- [constructor](XRKeyFrames.md#constructor)

### Properties

- [animation](XRKeyFrames.md#animation)
- [disabled](XRKeyFrames.md#disabled)
- [entity](XRKeyFrames.md#entity)
- [evaluated](XRKeyFrames.md#evaluated)
- [inspect](XRKeyFrames.md#inspect)
- [logger](XRKeyFrames.md#logger)
- [onbeforexrselect](XRKeyFrames.md#onbeforexrselect)
- [renderOptions](XRKeyFrames.md#renderoptions)
- [scene](XRKeyFrames.md#scene)
- [transition](XRKeyFrames.md#transition)
- [\_$litElement$](XRKeyFrames.md#_$litelement$)
- [requiredAttrs](XRKeyFrames.md#requiredattrs)

### Methods

- [connected](XRKeyFrames.md#connected)
- [disconnected](XRKeyFrames.md#disconnected)
- [toAttributeObject](XRKeyFrames.md#toattributeobject)

## Other

### constructor

• **new XRKeyFrames**(): [`XRKeyFrames`](XRKeyFrames.md)

#### Returns

[`XRKeyFrames`](XRKeyFrames.md)

#### Overrides

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

• **entity**: ``null`` \| \{ `data`: `Record`\<`string`, `string`\> ; `percentage`: `number`  }[] = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRKeyFrames`](XRKeyFrames.md)\>

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

▸ **toAttributeObject**(): [`XRKeyFrames`](XRKeyFrames.md)

#### Returns

[`XRKeyFrames`](XRKeyFrames.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
