# Class: XRGridMaterial

## Hierarchy

- [`XRBaseMaterial`](XRBaseMaterial.md)\<`GridMaterial`\>

  ↳ **`XRGridMaterial`**

## Table of contents

### Constructors

- [constructor](XRGridMaterial.md#constructor)

### Properties

- [alpha](XRGridMaterial.md#alpha)
- [alphaMode](XRGridMaterial.md#alphamode)
- [animation](XRGridMaterial.md#animation)
- [backFaceCulling](XRGridMaterial.md#backfaceculling)
- [disableDepthWrite](XRGridMaterial.md#disabledepthwrite)
- [disabled](XRGridMaterial.md#disabled)
- [entity](XRGridMaterial.md#entity)
- [evaluated](XRGridMaterial.md#evaluated)
- [gridRatio](XRGridMaterial.md#gridratio)
- [inspect](XRGridMaterial.md#inspect)
- [lineColor](XRGridMaterial.md#linecolor)
- [logger](XRGridMaterial.md#logger)
- [mainColor](XRGridMaterial.md#maincolor)
- [majorUnitFrequency](XRGridMaterial.md#majorunitfrequency)
- [minorUnitVisibility](XRGridMaterial.md#minorunitvisibility)
- [onbeforexrselect](XRGridMaterial.md#onbeforexrselect)
- [opacity](XRGridMaterial.md#opacity)
- [renderOptions](XRGridMaterial.md#renderoptions)
- [scene](XRGridMaterial.md#scene)
- [sideOrientation](XRGridMaterial.md#sideorientation)
- [transition](XRGridMaterial.md#transition)
- [wireframe](XRGridMaterial.md#wireframe)
- [zOffset](XRGridMaterial.md#zoffset)
- [\_$litElement$](XRGridMaterial.md#_$litelement$)
- [requiredAttrs](XRGridMaterial.md#requiredattrs)

### Methods

- [connected](XRGridMaterial.md#connected)
- [disconnected](XRGridMaterial.md#disconnected)
- [toAttributeObject](XRGridMaterial.md#toattributeobject)

## Other

### constructor

• **new XRGridMaterial**(): [`XRGridMaterial`](XRGridMaterial.md)

#### Returns

[`XRGridMaterial`](XRGridMaterial.md)

#### Overrides

[XRBaseMaterial](XRBaseMaterial.md).[constructor](XRBaseMaterial.md#constructor)

___

### alpha

• **alpha**: `number` = `1`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alpha](XRBaseMaterial.md#alpha)

___

### alphaMode

• **alphaMode**: `number` = `2`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alphaMode](XRBaseMaterial.md#alphamode)

___

### animation

• **animation**: `IAniItem`[] = `[]`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[animation](XRBaseMaterial.md#animation)

___

### backFaceCulling

• **backFaceCulling**: `boolean` = `false`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[backFaceCulling](XRBaseMaterial.md#backfaceculling)

___

### disableDepthWrite

• **disableDepthWrite**: `boolean` = `false`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disableDepthWrite](XRBaseMaterial.md#disabledepthwrite)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disabled](XRBaseMaterial.md#disabled)

___

### entity

• **entity**: ``null`` \| `GridMaterial` = `null`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[entity](XRBaseMaterial.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRGridMaterial`](XRGridMaterial.md)\>

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[evaluated](XRBaseMaterial.md#evaluated)

___

### gridRatio

• **gridRatio**: `number` = `1`

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[inspect](XRBaseMaterial.md#inspect)

___

### lineColor

• **lineColor**: [`Color3`](Color3.md)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[logger](XRBaseMaterial.md#logger)

___

### mainColor

• **mainColor**: [`Color3`](Color3.md)

___

### majorUnitFrequency

• **majorUnitFrequency**: `number` = `10`

___

### minorUnitVisibility

• **minorUnitVisibility**: `number` = `0.5`

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[onbeforexrselect](XRBaseMaterial.md#onbeforexrselect)

___

### opacity

• **opacity**: `number` = `0.99`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[scene](XRBaseMaterial.md#scene)

___

### sideOrientation

• **sideOrientation**: `number` = `1`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[sideOrientation](XRBaseMaterial.md#sideorientation)

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[transition](XRBaseMaterial.md#transition)

___

### wireframe

• **wireframe**: `boolean` = `false`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[wireframe](XRBaseMaterial.md#wireframe)

___

### zOffset

• **zOffset**: `number` = `0`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[zOffset](XRBaseMaterial.md#zoffset)

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[_$litElement$](XRBaseMaterial.md#_$litelement$)

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[]

#### Overrides

[XRBaseMaterial](XRBaseMaterial.md).[requiredAttrs](XRBaseMaterial.md#requiredattrs)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.connected

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.disconnected

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRGridMaterial`](XRGridMaterial.md)

#### Returns

[`XRGridMaterial`](XRGridMaterial.md)

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[toAttributeObject](XRBaseMaterial.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[renderOptions](XRBaseMaterial.md#renderoptions)
