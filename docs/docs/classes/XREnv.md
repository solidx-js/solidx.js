# Class: XREnv

## Hierarchy

- [`PrimitiveBase`](PrimitiveBase.md)

  ↳ **`XREnv`**

## Table of contents

### Constructors

- [constructor](XREnv.md#constructor)

### Properties

- [disabled](XREnv.md#disabled)
- [entity](XREnv.md#entity)
- [evaluated](XREnv.md#evaluated)
- [inspect](XREnv.md#inspect)
- [logger](XREnv.md#logger)
- [onbeforexrselect](XREnv.md#onbeforexrselect)
- [position](XREnv.md#position)
- [renderOptions](XREnv.md#renderoptions)
- [rotation](XREnv.md#rotation)
- [scale](XREnv.md#scale)
- [scene](XREnv.md#scene)
- [\_$litElement$](XREnv.md#_$litelement$)
- [defaultGroundTexture](XREnv.md#defaultgroundtexture)
- [defaultSkyBoxTexture](XREnv.md#defaultskyboxtexture)
- [requiredAttrs](XREnv.md#requiredattrs)

### Accessors

- [displayText](XREnv.md#displaytext)

### Methods

- [checkComputedStyles](XREnv.md#checkcomputedstyles)
- [connected](XREnv.md#connected)
- [convertPropertyValue](XREnv.md#convertpropertyvalue)
- [disconnected](XREnv.md#disconnected)
- [reloadAttrFromComputedStyles](XREnv.md#reloadattrfromcomputedstyles)
- [render](XREnv.md#render)
- [toAttributeObject](XREnv.md#toattributeobject)

## Other

### constructor

• **new XREnv**(): [`XREnv`](XREnv.md)

#### Returns

[`XREnv`](XREnv.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[constructor](PrimitiveBase.md#constructor)

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[disabled](PrimitiveBase.md#disabled)

___

### entity

• **entity**: ``null``

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[entity](PrimitiveBase.md#entity)

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XREnv`](XREnv.md)\>

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[evaluated](PrimitiveBase.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[inspect](PrimitiveBase.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[logger](PrimitiveBase.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[onbeforexrselect](PrimitiveBase.md#onbeforexrselect)

___

### position

• **position**: ``null`` \| [`Vector3`](Vector3.md) = `null`

___

### rotation

• **rotation**: ``null`` \| [`Vector3`](Vector3.md) = `null`

___

### scale

• **scale**: ``null`` \| [`Vector3`](Vector3.md) = `null`

___

### scene

• **scene**: `Scene`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[scene](PrimitiveBase.md#scene)

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[_$litElement$](PrimitiveBase.md#_$litelement$)

___

### defaultGroundTexture

▪ `Static` **defaultGroundTexture**: `string` = `'https://unpkg.com/solidx-assets/texture/Ground_2.0-256.png'`

___

### defaultSkyBoxTexture

▪ `Static` **defaultSkyBoxTexture**: `string` = `'https://unpkg.com/solidx-assets/texture/Skybox_2.0-256.dds'`

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[requiredAttrs](PrimitiveBase.md#requiredattrs)

___

### displayText

• `get` **displayText**(): `string`

#### Returns

`string`

#### Inherited from

PrimitiveBase.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[checkComputedStyles](PrimitiveBase.md#checkcomputedstyles)

___

### connected

▸ **connected**(): `void`

#### Returns

`void`

#### Overrides

PrimitiveBase.connected

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

[PrimitiveBase](PrimitiveBase.md).[convertPropertyValue](PrimitiveBase.md#convertpropertyvalue)

___

### disconnected

▸ **disconnected**(): `void`

#### Returns

`void`

#### Overrides

PrimitiveBase.disconnected

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

[PrimitiveBase](PrimitiveBase.md).[reloadAttrFromComputedStyles](PrimitiveBase.md#reloadattrfromcomputedstyles)

___

### render

▸ **render**(): `TemplateResult`\<``1``\>

#### Returns

`TemplateResult`\<``1``\>

#### Overrides

PrimitiveBase.render

___

### toAttributeObject

▸ **toAttributeObject**(): [`XREnv`](XREnv.md)

#### Returns

[`XREnv`](XREnv.md)

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[toAttributeObject](PrimitiveBase.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

[PrimitiveBase](PrimitiveBase.md).[renderOptions](PrimitiveBase.md#renderoptions)
