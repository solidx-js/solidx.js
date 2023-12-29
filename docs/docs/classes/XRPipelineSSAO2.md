# Class: XRPipelineSSAO2

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`SSAO2RenderingPipeline`\>

  ↳ **`XRPipelineSSAO2`**

## Table of contents

### Constructors

- [constructor](XRPipelineSSAO2.md#constructor)

### Properties

- [disabled](XRPipelineSSAO2.md#disabled)
- [entity](XRPipelineSSAO2.md#entity)
- [evaluated](XRPipelineSSAO2.md#evaluated)
- [inspect](XRPipelineSSAO2.md#inspect)
- [logger](XRPipelineSSAO2.md#logger)
- [maxZ](XRPipelineSSAO2.md#maxz)
- [onbeforexrselect](XRPipelineSSAO2.md#onbeforexrselect)
- [radius](XRPipelineSSAO2.md#radius)
- [renderOptions](XRPipelineSSAO2.md#renderoptions)
- [samples](XRPipelineSSAO2.md#samples)
- [scene](XRPipelineSSAO2.md#scene)
- [totalStrength](XRPipelineSSAO2.md#totalstrength)
- [\_$litElement$](XRPipelineSSAO2.md#_$litelement$)
- [requiredAttrs](XRPipelineSSAO2.md#requiredattrs)

### Accessors

- [displayText](XRPipelineSSAO2.md#displaytext)

### Methods

- [checkComputedStyles](XRPipelineSSAO2.md#checkcomputedstyles)
- [connected](XRPipelineSSAO2.md#connected)
- [convertPropertyValue](XRPipelineSSAO2.md#convertpropertyvalue)
- [disconnected](XRPipelineSSAO2.md#disconnected)
- [reloadAttrFromComputedStyles](XRPipelineSSAO2.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRPipelineSSAO2.md#toattributeobject)

## Other

### constructor

• **new XRPipelineSSAO2**(): [`XRPipelineSSAO2`](XRPipelineSSAO2.md)

#### Returns

[`XRPipelineSSAO2`](XRPipelineSSAO2.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `SSAO2RenderingPipeline` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRPipelineSSAO2`](XRPipelineSSAO2.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[logger](XRSceneScopeElement.md#logger)

___

### maxZ

• **maxZ**: ``null`` \| `number` = `null`

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

• **radius**: ``null`` \| `number` = `null`

___

### samples

• **samples**: ``null`` \| `number` = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### totalStrength

• **totalStrength**: ``null`` \| `number` = `null`

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

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

XRSceneScopeElement.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[checkComputedStyles](XRSceneScopeElement.md#checkcomputedstyles)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.connected

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

[XRSceneScopeElement](XRSceneScopeElement.md).[convertPropertyValue](XRSceneScopeElement.md#convertpropertyvalue)

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

XRSceneScopeElement.disconnected

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

[XRSceneScopeElement](XRSceneScopeElement.md).[reloadAttrFromComputedStyles](XRSceneScopeElement.md#reloadattrfromcomputedstyles)

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRPipelineSSAO2`](XRPipelineSSAO2.md)

#### Returns

[`XRPipelineSSAO2`](XRPipelineSSAO2.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
