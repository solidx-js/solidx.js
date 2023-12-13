# Class: XRCamera

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`ArcRotateCamera`\>

  ↳ **`XRCamera`**

## Table of contents

### Constructors

- [constructor](XRCamera.md#constructor)

### Properties

- [alpha](XRCamera.md#alpha)
- [animation](XRCamera.md#animation)
- [beta](XRCamera.md#beta)
- [disabled](XRCamera.md#disabled)
- [entity](XRCamera.md#entity)
- [evaluatedProps](XRCamera.md#evaluatedprops)
- [inspect](XRCamera.md#inspect)
- [lockTarget](XRCamera.md#locktarget)
- [lockToCenter](XRCamera.md#locktocenter)
- [logger](XRCamera.md#logger)
- [maxZ](XRCamera.md#maxz)
- [minZ](XRCamera.md#minz)
- [onbeforexrselect](XRCamera.md#onbeforexrselect)
- [radius](XRCamera.md#radius)
- [renderOptions](XRCamera.md#renderoptions)
- [scene](XRCamera.md#scene)
- [target](XRCamera.md#target)
- [transition](XRCamera.md#transition)
- [\_$litElement$](XRCamera.md#_$litelement$)
- [requiredAttrs](XRCamera.md#requiredattrs)

### Methods

- [connected](XRCamera.md#connected)
- [remove](XRCamera.md#remove)

## Other

### constructor

• **new XRCamera**(): [`XRCamera`](XRCamera.md)

#### Returns

[`XRCamera`](XRCamera.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### alpha

• **alpha**: `number` = `-90`

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### beta

• **beta**: `number` = `90`

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `ArcRotateCamera` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluatedProps

• `Readonly` **evaluatedProps**: `PickStringKey`\<[`XRCamera`](XRCamera.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluatedProps](XRSceneScopeElement.md#evaluatedprops)

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### lockTarget

• `Optional` **lockTarget**: `string`

___

### lockToCenter

• **lockToCenter**: `boolean` = `false`

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[logger](XRSceneScopeElement.md#logger)

___

### maxZ

• **maxZ**: `number` = `100`

___

### minZ

• **minZ**: `number` = `0.1`

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

### radius

• **radius**: `number` = `10`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### target

• **target**: [`Vector3`](Vector3.md)

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
