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
- [disabled](XRDecal.md#disabled)
- [entity](XRDecal.md#entity)
- [evaluatedProps](XRDecal.md#evaluatedprops)
- [img](XRDecal.md#img)
- [imgLevel](XRDecal.md#imglevel)
- [inspect](XRDecal.md#inspect)
- [logger](XRDecal.md#logger)
- [normal](XRDecal.md#normal)
- [onbeforexrselect](XRDecal.md#onbeforexrselect)
- [position](XRDecal.md#position)
- [renderOptions](XRDecal.md#renderoptions)
- [scene](XRDecal.md#scene)
- [size](XRDecal.md#size)
- [transition](XRDecal.md#transition)
- [\_$litElement$](XRDecal.md#_$litelement$)
- [requiredAttrs](XRDecal.md#requiredattrs)

### Methods

- [connected](XRDecal.md#connected)
- [remove](XRDecal.md#remove)

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

• **entity**: ``null`` \| `Mesh` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluatedProps

• `Readonly` **evaluatedProps**: `PickStringKey`\<[`XRDecal`](XRDecal.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluatedProps](XRSceneScopeElement.md#evaluatedprops)

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

### normal

• **normal**: [`Vector3`](Vector3.md)

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

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### size

• **size**: [`Vector3`](Vector3.md)

贴花尺寸

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

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.remove

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
