# Class: XRBaseMaterial\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Material` |

## Hierarchy

- [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`T`\>

  ↳ **`XRBaseMaterial`**

  ↳↳ [`XRBackgroundMaterial`](XRBackgroundMaterial.md)

  ↳↳ [`XRGridMaterial`](XRGridMaterial.md)

  ↳↳ [`XRMaterial`](XRMaterial.md)

## Implements

- [`IMaterialControllerHostType`](../README.md#imaterialcontrollerhosttype)

## Table of contents

### Constructors

- [constructor](XRBaseMaterial.md#constructor)

### Properties

- [alpha](XRBaseMaterial.md#alpha)
- [alphaMode](XRBaseMaterial.md#alphamode)
- [backFaceCulling](XRBaseMaterial.md#backfaceculling)
- [disableDepthWrite](XRBaseMaterial.md#disabledepthwrite)
- [disabled](XRBaseMaterial.md#disabled)
- [entity](XRBaseMaterial.md#entity)
- [entityDelegated](XRBaseMaterial.md#entitydelegated)
- [evaluated](XRBaseMaterial.md#evaluated)
- [inspect](XRBaseMaterial.md#inspect)
- [logger](XRBaseMaterial.md#logger)
- [onbeforexrselect](XRBaseMaterial.md#onbeforexrselect)
- [renderOptions](XRBaseMaterial.md#renderoptions)
- [scene](XRBaseMaterial.md#scene)
- [sideOrientation](XRBaseMaterial.md#sideorientation)
- [wireframe](XRBaseMaterial.md#wireframe)
- [zOffset](XRBaseMaterial.md#zoffset)
- [\_$litElement$](XRBaseMaterial.md#_$litelement$)
- [requiredAttrs](XRBaseMaterial.md#requiredattrs)

### Accessors

- [displayText](XRBaseMaterial.md#displaytext)

### Methods

- [checkComputedStyles](XRBaseMaterial.md#checkcomputedstyles)
- [convertPropertyValue](XRBaseMaterial.md#convertpropertyvalue)
- [reloadAttrFromComputedStyles](XRBaseMaterial.md#reloadattrfromcomputedstyles)
- [toAttributeObject](XRBaseMaterial.md#toattributeobject)

## Other

### constructor

• **new XRBaseMaterial**\<`T`\>(): [`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Material` |

#### Returns

[`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[constructor](XRSceneScopeElement.md#constructor)

___

### alpha

• **alpha**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialControllerHostType.alpha

___

### alphaMode

• **alphaMode**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialControllerHostType.alphaMode

___

### backFaceCulling

• **backFaceCulling**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialControllerHostType.backFaceCulling

___

### disableDepthWrite

• **disableDepthWrite**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialControllerHostType.disableDepthWrite

___

### disabled

• **disabled**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialControllerHostType.disabled

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[disabled](XRSceneScopeElement.md#disabled)

___

### entity

• **entity**: ``null`` \| `T` = `null`

#### Implementation of

IMaterialControllerHostType.entity

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[entity](XRSceneScopeElement.md#entity)

___

### entityDelegated

• **entityDelegated**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialControllerHostType.entityDelegated

___

### evaluated

• `Readonly` **evaluated**: `PickStringKey`\<[`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>\>

#### Implementation of

IMaterialControllerHostType.evaluated

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[evaluated](XRSceneScopeElement.md#evaluated)

___

### inspect

• **inspect**: ``null`` \| `Record`\<`string`, `string`\> = `null`

#### Implementation of

IMaterialControllerHostType.inspect

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[inspect](XRSceneScopeElement.md#inspect)

___

### logger

• `Readonly` **logger**: `Logger`

#### Implementation of

IMaterialControllerHostType.logger

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[logger](XRSceneScopeElement.md#logger)

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Implementation of

IMaterialControllerHostType.onbeforexrselect

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[onbeforexrselect](XRSceneScopeElement.md#onbeforexrselect)

___

### scene

• **scene**: `Scene`

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[scene](XRSceneScopeElement.md#scene)

___

### sideOrientation

• **sideOrientation**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialControllerHostType.sideOrientation

___

### wireframe

• **wireframe**: ``null`` \| `boolean` = `null`

#### Implementation of

IMaterialControllerHostType.wireframe

___

### zOffset

• **zOffset**: ``null`` \| `number` = `null`

#### Implementation of

IMaterialControllerHostType.zOffset

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

#### Implementation of

IMaterialControllerHostType.displayText

#### Inherited from

XRSceneScopeElement.displayText

___

### checkComputedStyles

▸ **checkComputedStyles**(): `void`

#### Returns

`void`

#### Implementation of

IMaterialControllerHostType.checkComputedStyles

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[checkComputedStyles](XRSceneScopeElement.md#checkcomputedstyles)

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

#### Implementation of

IMaterialControllerHostType.convertPropertyValue

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[convertPropertyValue](XRSceneScopeElement.md#convertpropertyvalue)

___

### reloadAttrFromComputedStyles

▸ **reloadAttrFromComputedStyles**(`property`): `undefined` \| ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

`undefined` \| ``true``

#### Implementation of

IMaterialControllerHostType.reloadAttrFromComputedStyles

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[reloadAttrFromComputedStyles](XRSceneScopeElement.md#reloadattrfromcomputedstyles)

___

### toAttributeObject

▸ **toAttributeObject**(): [`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Returns

[`XRBaseMaterial`](XRBaseMaterial.md)\<`T`\>

#### Implementation of

IMaterialControllerHostType.toAttributeObject

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[toAttributeObject](XRSceneScopeElement.md#toattributeobject)

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Implementation of

IMaterialControllerHostType.renderOptions

#### Inherited from

[XRSceneScopeElement](XRSceneScopeElement.md).[renderOptions](XRSceneScopeElement.md#renderoptions)
