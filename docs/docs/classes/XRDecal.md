# Class: XRDecal

贴花

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`Mesh`\>

  ↳ **`XRDecal`**

## Table of contents

### Constructors

- [constructor](XRDecal.md#constructor)

### Properties

- [angle](XRDecal.md#angle)
- [animation](XRDecal.md#animation)
- [direction](XRDecal.md#direction)
- [disabled](XRDecal.md#disabled)
- [entity](XRDecal.md#entity)
- [evaluated](XRDecal.md#evaluated)
- [img](XRDecal.md#img)
- [imgLevel](XRDecal.md#imglevel)
- [inspect](XRDecal.md#inspect)
- [logger](XRDecal.md#logger)
- [onbeforexrselect](XRDecal.md#onbeforexrselect)
- [origin](XRDecal.md#origin)
- [renderOptions](XRDecal.md#renderoptions)
- [scene](XRDecal.md#scene)
- [size](XRDecal.md#size)
- [transition](XRDecal.md#transition)
- [useRay](XRDecal.md#useray)
- [\_$litElement$](XRDecal.md#_$litelement$)
- [requiredAttrs](XRDecal.md#requiredattrs)

### Methods

- [connected](XRDecal.md#connected)
- [disconnected](XRDecal.md#disconnected)
- [reload](XRDecal.md#reload)
- [toAttributeObject](XRDecal.md#toattributeobject)

## Other

### constructor

• **new XRDecal**(): [`XRDecal`](XRDecal.md)

#### Returns

[`XRDecal`](XRDecal.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### angle

• **angle**: `number` = `0`

贴花投影角度

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### direction

• **direction**: [`Vector3`](Vector3.md)

贴花投影方向

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `Mesh` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRDecal`](XRDecal.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### img

• `Optional` **img**: `string`

___

### imgLevel

• **imgLevel**: `number` = `1`

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

### origin

• **origin**: [`Vector3`](Vector3.md)

贴花投影体的中心

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### size

• **size**: [`Vector3`](Vector3.md)

贴花尺寸

- x: width
- y: height
- z: depth

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[transition](XRSceneScopeElement.md#transition)

___

### useRay

• `Optional` **useRay**: `boolean`

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

### reload

▸ **reload**(): `void`

#### Returns

`void`

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRDecal`](XRDecal.md)

#### Returns

[`XRDecal`](XRDecal.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
