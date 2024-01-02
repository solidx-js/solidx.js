# Class: XRScene

## Hierarchy

- [`XRElement`](XRElement.md)

  ↳ **`XRScene`**

## Table of contents

### Constructors

- [constructor](XRScene.md#constructor)

### Properties

- [ID](XRScene.md#id)
- [background](XRScene.md#background)
- [contrast](XRScene.md#contrast)
- [disabled](XRScene.md#disabled)
- [engine](XRScene.md#engine)
- [entity](XRScene.md#entity)
- [envIntensity](XRScene.md#envintensity)
- [envRotationY](XRScene.md#envrotationy)
- [envUrl](XRScene.md#envurl)
- [evaluated](XRScene.md#evaluated)
- [exposure](XRScene.md#exposure)
- [hardwareScalingLevel](XRScene.md#hardwarescalinglevel)
- [inspect](XRScene.md#inspect)
- [logger](XRScene.md#logger)
- [onbeforexrselect](XRScene.md#onbeforexrselect)
- [querier](XRScene.md#querier)
- [renderOptions](XRScene.md#renderoptions)
- [scene](XRScene.md#scene)
- [\_$litElement$](XRScene.md#_$litelement$)
- [defaultEnvMap](XRScene.md#defaultenvmap)
- [requiredAttrs](XRScene.md#requiredattrs)

### Accessors

- [displayText](XRScene.md#displaytext)

### Methods

- [checkComputedStyles](XRScene.md#checkcomputedstyles)
- [connected](XRScene.md#connected)
- [convertPropertyValue](XRScene.md#convertpropertyvalue)
- [disconnected](XRScene.md#disconnected)
- [reloadAttrFromComputedStyles](XRScene.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRScene.md#toattributeobject)
- [createEngine](XRScene.md#createengine)

## Other

### constructor

• **new XRScene**(): [`XRScene`](XRScene.md)

#### Returns

[`XRScene`](XRScene.md)

#### Inherited from

[XRElement](XRElement.md).[constructor](XRElement.md#constructor)

___

### ID

• `Readonly` **ID**: `string`

___

### background

• **background**: ``null`` \| [`Color4`](Color4.md) = `null`

___

### contrast

• **contrast**: ``null`` \| `number` = `null`

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRElement](XRElement.md).[disabled](XRElement.md#disabled)

___

### engine

• **engine**: `Engine`

___

### entity

• **entity**: `any` = `null`

#### Inherited from

[XRElement](XRElement.md).[entity](XRElement.md#entity)

___

### envIntensity

• **envIntensity**: ``null`` \| `number` = `null`

___

### envRotationY

• **envRotationY**: ``null`` \| `number` = `null`

___

### envUrl

• **envUrl**: ``null`` \| `string` = `null`

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRScene`](XRScene.md)\>

#### Inherited from

[XRElement](XRElement.md).[evaluated](XRElement.md#evaluated)

___

### exposure

• **exposure**: ``null`` \| `number` = `null`

___

### hardwareScalingLevel

• **hardwareScalingLevel**: ``null`` \| `number` = `null`

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRElement](XRElement.md).[inspect](XRElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRElement](XRElement.md).[logger](XRElement.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[XRElement](XRElement.md).[onbeforexrselect](XRElement.md#onbeforexrselect)

___

### querier

• `Readonly` **querier**: [`EntityQueryController`](EntityQueryController.md)

___

### scene

• **scene**: `Scene`

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[XRElement](XRElement.md).[_$litElement$](XRElement.md#_$litelement$)

___

### defaultEnvMap

▪ `Static` **defaultEnvMap**: `string` = `'https://unpkg.com/solidx-assets/texture/EnvMap_3.0-256.env'`

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

#### Inherited from

[XRElement](XRElement.md).[requiredAttrs](XRElement.md#requiredattrs)

___

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

XRElement.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[XRElement](XRElement.md).[checkComputedStyles](XRElement.md#checkcomputedstyles)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRElement.connected

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

[XRElement](XRElement.md).[convertPropertyValue](XRElement.md#convertpropertyvalue)

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRElement.disconnected

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

[XRElement](XRElement.md).[reloadAttrFromComputedStyles](XRElement.md#reloadattrfromcomputedstyles)

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRScene`](XRScene.md)

#### Returns

[`XRScene`](XRScene.md)

#### Inherited from

[XRElement](XRElement.md).[toAttributeObject](XRElement.md#toattributeobject)

___

### createEngine

▸ **createEngine**(`canvas`): `Engine`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

#### Returns

`Engine`

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRElement](XRElement.md).[renderOptions](XRElement.md#renderoptions)
