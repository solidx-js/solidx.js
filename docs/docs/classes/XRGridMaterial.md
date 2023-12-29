# Class: XRGridMaterial

## Hierarchy

- [`XRBaseMaterial`](XRBaseMaterial.md)\<`GridMaterial`\>

  ↳ **`XRGridMaterial`**

## Implements

- [`IMaterialImpl`](../README.md#imaterialimpl)

## Table of contents

### Constructors

- [constructor](XRGridMaterial.md#constructor)

### Properties

- [alpha](XRGridMaterial.md#alpha)
- [alphaMode](XRGridMaterial.md#alphamode)
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
- [wireframe](XRGridMaterial.md#wireframe)
- [zOffset](XRGridMaterial.md#zoffset)
- [\_$litElement$](XRGridMaterial.md#_$litelement$)
- [requiredAttrs](XRGridMaterial.md#requiredattrs)

### Accessors

- [displayText](XRGridMaterial.md#displaytext)

### Methods

- [checkComputedStyles](XRGridMaterial.md#checkcomputedstyles)
- [connected](XRGridMaterial.md#connected)
- [convertPropertyValue](XRGridMaterial.md#convertpropertyvalue)
- [disconnected](XRGridMaterial.md#disconnected)
- [reloadAttrFromComputedStyles](XRGridMaterial.md#reloadattrfromcomputedstyles)
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

• **alpha**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.alpha

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alpha](XRBaseMaterial.md#alpha)

___

### alphaMode

• **alphaMode**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.alphaMode

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[alphaMode](XRBaseMaterial.md#alphamode)

___

### backFaceCulling

• **backFaceCulling**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialImpl.backFaceCulling

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[backFaceCulling](XRBaseMaterial.md#backfaceculling)

___

### disableDepthWrite

• **disableDepthWrite**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialImpl.disableDepthWrite

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disableDepthWrite](XRBaseMaterial.md#disabledepthwrite)

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[disabled](XRBaseMaterial.md#disabled)

___

### entity

• **entity**: ``null`` \| `GridMaterial` = `null`

#### Implementation of

IMaterialImpl.entity

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[entity](XRBaseMaterial.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRGridMaterial`](XRGridMaterial.md)\>

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[evaluated](XRBaseMaterial.md#evaluated)

___

### gridRatio

• **gridRatio**: ``null`` \| `number` = `null`

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[inspect](XRBaseMaterial.md#inspect)

___

### lineColor

• **lineColor**: ``null`` \| [`Color3`](Color3.md) = `null`

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[logger](XRBaseMaterial.md#logger)

___

### mainColor

• **mainColor**: ``null`` \| [`Color3`](Color3.md) = `null`

___

### majorUnitFrequency

• **majorUnitFrequency**: ``null`` \| `number` = `null`

___

### minorUnitVisibility

• **minorUnitVisibility**: ``null`` \| `number` = `null`

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

• **opacity**: ``null`` \| `number` = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[scene](XRBaseMaterial.md#scene)

___

### sideOrientation

• **sideOrientation**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.sideOrientation

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[sideOrientation](XRBaseMaterial.md#sideorientation)

___

### wireframe

• **wireframe**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialImpl.wireframe

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[wireframe](XRBaseMaterial.md#wireframe)

___

### zOffset

• **zOffset**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialImpl.zOffset

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

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

XRBaseMaterial.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[checkComputedStyles](XRBaseMaterial.md#checkcomputedstyles)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.connected

___

### convertPropertyValue

▸ **convertPropertyValue**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`any`

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[convertPropertyValue](XRBaseMaterial.md#convertpropertyvalue)

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRBaseMaterial.disconnected

___

### reloadAttrFromComputedStyles

▸ **reloadAttrFromComputedStyles**(`property`): `undefined` \| ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

`undefined` \| ``true``

#### Inherited from

[XRBaseMaterial](XRBaseMaterial.md).[reloadAttrFromComputedStyles](XRBaseMaterial.md#reloadattrfromcomputedstyles)

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
