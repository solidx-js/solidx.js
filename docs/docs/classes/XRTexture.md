# Class: XRTexture

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`Texture`\>

  ↳ **`XRTexture`**

## Implements

- [`IXRTextureProps`](../README.md#ixrtextureprops)

## Table of contents

### Constructors

- [constructor](XRTexture.md#constructor)

### Properties

- [coordinatesIndex](XRTexture.md#coordinatesindex)
- [coordinatesMode](XRTexture.md#coordinatesmode)
- [disabled](XRTexture.md#disabled)
- [entity](XRTexture.md#entity)
- [entityDelegated](XRTexture.md#entitydelegated)
- [evaluated](XRTexture.md#evaluated)
- [hasAlpha](XRTexture.md#hasalpha)
- [inspect](XRTexture.md#inspect)
- [invertY](XRTexture.md#inverty)
- [level](XRTexture.md#level)
- [logger](XRTexture.md#logger)
- [onbeforexrselect](XRTexture.md#onbeforexrselect)
- [renderOptions](XRTexture.md#renderoptions)
- [scene](XRTexture.md#scene)
- [uOffset](XRTexture.md#uoffset)
- [uScale](XRTexture.md#uscale)
- [url](XRTexture.md#url)
- [vOffset](XRTexture.md#voffset)
- [vScale](XRTexture.md#vscale)
- [wrapU](XRTexture.md#wrapu)
- [wrapV](XRTexture.md#wrapv)
- [\_$litElement$](XRTexture.md#_$litelement$)
- [requiredAttrs](XRTexture.md#requiredattrs)

### Accessors

- [displayText](XRTexture.md#displaytext)

### Methods

- [checkComputedStyles](XRTexture.md#checkcomputedstyles)
- [connected](XRTexture.md#connected)
- [convertPropertyValue](XRTexture.md#convertpropertyvalue)
- [disconnected](XRTexture.md#disconnected)
- [reloadAttrFromComputedStyles](XRTexture.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRTexture.md#toattributeobject)
- [getPropsFrom](XRTexture.md#getpropsfrom)

## Other

### constructor

• **new XRTexture**(): [`XRTexture`](XRTexture.md)

#### Returns

[`XRTexture`](XRTexture.md)

#### Overrides

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### coordinatesIndex

• **coordinatesIndex**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.coordinatesIndex

___

### coordinatesMode

• **coordinatesMode**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.coordinatesMode

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `Texture` = `null`

#### Implementation of

IXRTextureProps.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### entityDelegated

• **entityDelegated**: ``null`` \| `boolean` = `null`

#### Implementation of

IXRTextureProps.entityDelegated

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRTexture`](XRTexture.md)\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### hasAlpha

• **hasAlpha**: ``null`` \| `boolean` = `null`

#### Implementation of

IXRTextureProps.hasAlpha

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### invertY

• **invertY**: ``null`` \| `boolean` = `null`

#### Implementation of

IXRTextureProps.invertY

___

### level

• **level**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.level

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

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### uOffset

• **uOffset**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.uOffset

___

### uScale

• **uScale**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.uScale

___

### url

• **url**: ``null`` \| `string` = `null`

#### Implementation of

IXRTextureProps.url

___

### vOffset

• **vOffset**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.vOffset

___

### vScale

• **vScale**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.vScale

___

### wrapU

• **wrapU**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.wrapU

___

### wrapV

• **wrapV**: ``null`` \| `number` = `null`

#### Implementation of

IXRTextureProps.wrapV

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

▸ **toAttributeObject**(): [`XRTexture`](XRTexture.md)

#### Returns

[`XRTexture`](XRTexture.md)

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

___

### getPropsFrom

▸ **getPropsFrom**(`tex`): [`IXRTextureProps`](../README.md#ixrtextureprops)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | `Texture` |

#### Returns

[`IXRTextureProps`](../README.md#ixrtextureprops)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
