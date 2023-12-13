# Class: XRMaterial

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`PBRMaterial`\>

  ↳ **`XRMaterial`**

## Table of contents

### Constructors

- [constructor](XRMaterial.md#constructor)

### Properties

- [albedoColor](XRMaterial.md#albedocolor)
- [animation](XRMaterial.md#animation)
- [backFaceCulling](XRMaterial.md#backfaceculling)
- [disabled](XRMaterial.md#disabled)
- [emissiveColor](XRMaterial.md#emissivecolor)
- [entity](XRMaterial.md#entity)
- [evaluatedProps](XRMaterial.md#evaluatedprops)
- [inspect](XRMaterial.md#inspect)
- [logger](XRMaterial.md#logger)
- [metallic](XRMaterial.md#metallic)
- [onbeforexrselect](XRMaterial.md#onbeforexrselect)
- [renderOptions](XRMaterial.md#renderoptions)
- [roughness](XRMaterial.md#roughness)
- [scene](XRMaterial.md#scene)
- [transition](XRMaterial.md#transition)
- [\_$litElement$](XRMaterial.md#_$litelement$)
- [requiredAttrs](XRMaterial.md#requiredattrs)

### Methods

- [connected](XRMaterial.md#connected)
- [disconnected](XRMaterial.md#disconnected)

## Other

### constructor

• **new XRMaterial**(): [`XRMaterial`](XRMaterial.md)

#### Returns

[`XRMaterial`](XRMaterial.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### albedoColor

• `Optional` **albedoColor**: [`Color3`](Color3.md)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[animation](XRSceneScopeElement.md#animation)

___

### backFaceCulling

• **backFaceCulling**: `boolean` = `false`

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### emissiveColor

• `Optional` **emissiveColor**: [`Color3`](Color3.md)

___

### entity

• **entity**: ``null`` \| `PBRMaterial` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluatedProps

• `Readonly` **evaluatedProps**: `PickStringKey`\<[`XRMaterial`](XRMaterial.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluatedProps](XRSceneScopeElement.md#evaluatedprops)

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

### metallic

• **metallic**: `number` = `0.2`

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

### roughness

• **roughness**: `number` = `0.8`

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

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
