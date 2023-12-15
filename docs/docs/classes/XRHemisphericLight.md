# Class: XRHemisphericLight

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`HemisphericLight`\>

  ↳ **`XRHemisphericLight`**

## Table of contents

### Constructors

- [constructor](XRHemisphericLight.md#constructor)

### Properties

- [animation](XRHemisphericLight.md#animation)
- [diffuse](XRHemisphericLight.md#diffuse)
- [disabled](XRHemisphericLight.md#disabled)
- [entity](XRHemisphericLight.md#entity)
- [evaluated](XRHemisphericLight.md#evaluated)
- [inspect](XRHemisphericLight.md#inspect)
- [intensity](XRHemisphericLight.md#intensity)
- [logger](XRHemisphericLight.md#logger)
- [onbeforexrselect](XRHemisphericLight.md#onbeforexrselect)
- [position](XRHemisphericLight.md#position)
- [renderOptions](XRHemisphericLight.md#renderoptions)
- [rotation](XRHemisphericLight.md#rotation)
- [scene](XRHemisphericLight.md#scene)
- [shadowEnabled](XRHemisphericLight.md#shadowenabled)
- [specular](XRHemisphericLight.md#specular)
- [transition](XRHemisphericLight.md#transition)
- [\_$litElement$](XRHemisphericLight.md#_$litelement$)
- [requiredAttrs](XRHemisphericLight.md#requiredattrs)

### Methods

- [connected](XRHemisphericLight.md#connected)
- [disconnected](XRHemisphericLight.md#disconnected)
- [toAttributeObject](XRHemisphericLight.md#toattributeobject)

## Other

### constructor

• **new XRHemisphericLight**(): [`XRHemisphericLight`](XRHemisphericLight.md)

#### Returns

[`XRHemisphericLight`](XRHemisphericLight.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### diffuse

• **diffuse**: [`Color3`](Color3.md)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `HemisphericLight` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRHemisphericLight`](XRHemisphericLight.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

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

### position

• **position**: [`Vector3`](Vector3.md)

___

### rotation

• **rotation**: [`Vector2`](Vector2.md)

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### shadowEnabled

• **shadowEnabled**: `boolean` = `false`

___

### specular

• **specular**: [`Color3`](Color3.md)

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

▸ **toAttributeObject**(): [`XRHemisphericLight`](XRHemisphericLight.md)

#### Returns

[`XRHemisphericLight`](XRHemisphericLight.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
