# Class: XRPointLight

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`PointLight`\>

  ↳ **`XRPointLight`**

## Table of contents

### Constructors

- [constructor](XRPointLight.md#constructor)

### Properties

- [animation](XRPointLight.md#animation)
- [diffuse](XRPointLight.md#diffuse)
- [disabled](XRPointLight.md#disabled)
- [entity](XRPointLight.md#entity)
- [evaluated](XRPointLight.md#evaluated)
- [inspect](XRPointLight.md#inspect)
- [intensity](XRPointLight.md#intensity)
- [logger](XRPointLight.md#logger)
- [onbeforexrselect](XRPointLight.md#onbeforexrselect)
- [position](XRPointLight.md#position)
- [renderOptions](XRPointLight.md#renderoptions)
- [scene](XRPointLight.md#scene)
- [shadowEnabled](XRPointLight.md#shadowenabled)
- [specular](XRPointLight.md#specular)
- [transition](XRPointLight.md#transition)
- [\_$litElement$](XRPointLight.md#_$litelement$)
- [requiredAttrs](XRPointLight.md#requiredattrs)

### Methods

- [connected](XRPointLight.md#connected)
- [disconnected](XRPointLight.md#disconnected)
- [toAttributeObject](XRPointLight.md#toattributeobject)

## Other

### constructor

• **new XRPointLight**(): [`XRPointLight`](XRPointLight.md)

#### Returns

[`XRPointLight`](XRPointLight.md)

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

• **entity**: ``null`` \| `PointLight` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRPointLight`](XRPointLight.md)\>

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

▸ **toAttributeObject**(): [`XRPointLight`](XRPointLight.md)

#### Returns

[`XRPointLight`](XRPointLight.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
