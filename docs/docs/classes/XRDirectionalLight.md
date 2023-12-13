# Class: XRDirectionalLight

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`DirectionalLight`\>

  ↳ **`XRDirectionalLight`**

## Table of contents

### Constructors

- [constructor](XRDirectionalLight.md#constructor)

### Properties

- [animation](XRDirectionalLight.md#animation)
- [disabled](XRDirectionalLight.md#disabled)
- [entity](XRDirectionalLight.md#entity)
- [evaluatedProps](XRDirectionalLight.md#evaluatedprops)
- [inspect](XRDirectionalLight.md#inspect)
- [intensity](XRDirectionalLight.md#intensity)
- [logger](XRDirectionalLight.md#logger)
- [onbeforexrselect](XRDirectionalLight.md#onbeforexrselect)
- [renderOptions](XRDirectionalLight.md#renderoptions)
- [rotation](XRDirectionalLight.md#rotation)
- [scene](XRDirectionalLight.md#scene)
- [transition](XRDirectionalLight.md#transition)
- [\_$litElement$](XRDirectionalLight.md#_$litelement$)
- [requiredAttrs](XRDirectionalLight.md#requiredattrs)

### Methods

- [connected](XRDirectionalLight.md#connected)
- [remove](XRDirectionalLight.md#remove)

## Other

### constructor

• **new XRDirectionalLight**(): [`XRDirectionalLight`](XRDirectionalLight.md)

#### Returns

[`XRDirectionalLight`](XRDirectionalLight.md)

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

• **entity**: ``null`` \| `DirectionalLight` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluatedProps

• `Readonly` **evaluatedProps**: `PickStringKey`\<[`XRDirectionalLight`](XRDirectionalLight.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluatedProps](XRSceneScopeElement.md#evaluatedprops)

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### intensity

• **intensity**: `number` = `1`

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

### rotation

• **rotation**: [`Vector2`](Vector2.md)

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
