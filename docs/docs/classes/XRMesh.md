# Class: XRMesh

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`Mesh`\>

  ↳ **`XRMesh`**

## Table of contents

### Constructors

- [constructor](XRMesh.md#constructor)

### Properties

- [\_geometry](XRMesh.md#_geometry)
- [\_gridMaterial](XRMesh.md#_gridmaterial)
- [\_material](XRMesh.md#_material)
- [animation](XRMesh.md#animation)
- [disabled](XRMesh.md#disabled)
- [entity](XRMesh.md#entity)
- [evaluated](XRMesh.md#evaluated)
- [geometry](XRMesh.md#geometry)
- [gridMaterial](XRMesh.md#gridmaterial)
- [inspect](XRMesh.md#inspect)
- [logger](XRMesh.md#logger)
- [material](XRMesh.md#material)
- [onbeforexrselect](XRMesh.md#onbeforexrselect)
- [position](XRMesh.md#position)
- [renderOptions](XRMesh.md#renderoptions)
- [rotation](XRMesh.md#rotation)
- [scale](XRMesh.md#scale)
- [scene](XRMesh.md#scene)
- [transition](XRMesh.md#transition)
- [\_$litElement$](XRMesh.md#_$litelement$)
- [requiredAttrs](XRMesh.md#requiredattrs)

### Methods

- [connected](XRMesh.md#connected)
- [disconnected](XRMesh.md#disconnected)
- [toAttributeObject](XRMesh.md#toattributeobject)

## Other

### constructor

• **new XRMesh**(): [`XRMesh`](XRMesh.md)

#### Returns

[`XRMesh`](XRMesh.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### \_geometry

• **\_geometry**: ``null`` \| `Geometry` = `null`

___

### \_gridMaterial

• **\_gridMaterial**: ``null`` \| `GridMaterial` = `null`

___

### \_material

• **\_material**: ``null`` \| `Material` = `null`

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

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRMesh`](XRMesh.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### geometry

• **geometry**: ``null`` \| `string` = `null`

___

### gridMaterial

• **gridMaterial**: ``null`` \| `string` = `null`

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

### material

• **material**: ``null`` \| `string` = `null`

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

• **rotation**: [`Vector3`](Vector3.md)

___

### scale

• **scale**: [`Vector3`](Vector3.md)

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

### toAttributeObject

▸ **toAttributeObject**(): [`XRMesh`](XRMesh.md)

#### Returns

[`XRMesh`](XRMesh.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
