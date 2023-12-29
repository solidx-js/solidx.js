# Class: XRCubeTexture

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`CubeTexture`\>

  ↳ **`XRCubeTexture`**

## Implements

- [`ITextureImpl`](../README.md#itextureimpl)

## Table of contents

### Constructors

- [constructor](XRCubeTexture.md#constructor)

### Properties

- [coordinatesIndex](XRCubeTexture.md#coordinatesindex)
- [coordinatesMode](XRCubeTexture.md#coordinatesmode)
- [disabled](XRCubeTexture.md#disabled)
- [entity](XRCubeTexture.md#entity)
- [evaluated](XRCubeTexture.md#evaluated)
- [extension](XRCubeTexture.md#extension)
- [hasAlpha](XRCubeTexture.md#hasalpha)
- [inspect](XRCubeTexture.md#inspect)
- [level](XRCubeTexture.md#level)
- [logger](XRCubeTexture.md#logger)
- [onbeforexrselect](XRCubeTexture.md#onbeforexrselect)
- [renderOptions](XRCubeTexture.md#renderoptions)
- [rotationY](XRCubeTexture.md#rotationy)
- [scene](XRCubeTexture.md#scene)
- [url](XRCubeTexture.md#url)
- [wrapU](XRCubeTexture.md#wrapu)
- [wrapV](XRCubeTexture.md#wrapv)
- [\_$litElement$](XRCubeTexture.md#_$litelement$)
- [requiredAttrs](XRCubeTexture.md#requiredattrs)

### Accessors

- [displayText](XRCubeTexture.md#displaytext)

### Methods

- [checkComputedStyles](XRCubeTexture.md#checkcomputedstyles)
- [connected](XRCubeTexture.md#connected)
- [convertPropertyValue](XRCubeTexture.md#convertpropertyvalue)
- [disconnected](XRCubeTexture.md#disconnected)
- [reloadAttrFromComputedStyles](XRCubeTexture.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRCubeTexture.md#toattributeobject)

## Other

### constructor

• **new XRCubeTexture**(): [`XRCubeTexture`](XRCubeTexture.md)

#### Returns

[`XRCubeTexture`](XRCubeTexture.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### coordinatesIndex

• **coordinatesIndex**: ``null`` \| `number` = `null`

#### Implementation of

ITextureImpl.coordinatesIndex

___

### coordinatesMode

• **coordinatesMode**: ``null`` \| `number` = `null`

#### Implementation of

ITextureImpl.coordinatesMode

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `CubeTexture` = `null`

#### Implementation of

ITextureImpl.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRCubeTexture`](XRCubeTexture.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### extension

• **extension**: ``null`` \| `string` = `null`

___

### hasAlpha

• **hasAlpha**: ``null`` \| `boolean` = `null`

#### Implementation of

ITextureImpl.hasAlpha

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### level

• **level**: ``null`` \| `number` = `null`

#### Implementation of

ITextureImpl.level

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

### rotationY

• **rotationY**: ``null`` \| `number` = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### url

• **url**: ``null`` \| `string` = `null`

___

### wrapU

• **wrapU**: ``null`` \| `number` = `null`

#### Implementation of

ITextureImpl.wrapU

___

### wrapV

• **wrapV**: ``null`` \| `number` = `null`

#### Implementation of

ITextureImpl.wrapV

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

▸ **toAttributeObject**(): [`XRCubeTexture`](XRCubeTexture.md)

#### Returns

[`XRCubeTexture`](XRCubeTexture.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
