# Class: XRElement\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `LitElement`

  ↳ **`XRElement`**

  ↳↳ [`XREngine`](XREngine.md)

  ↳↳ [`XRScene`](XRScene.md)

  ↳↳ [`XRSceneScopeElement`](XRSceneScopeElement.md)

## Table of contents

### Constructors

- [constructor](XRElement.md#constructor)

### Properties

- [animation](XRElement.md#animation)
- [disabled](XRElement.md#disabled)
- [entity](XRElement.md#entity)
- [evaluatedProps](XRElement.md#evaluatedprops)
- [inspect](XRElement.md#inspect)
- [logger](XRElement.md#logger)
- [onbeforexrselect](XRElement.md#onbeforexrselect)
- [renderOptions](XRElement.md#renderoptions)
- [transition](XRElement.md#transition)
- [\_$litElement$](XRElement.md#_$litelement$)
- [requiredAttrs](XRElement.md#requiredattrs)

## Other

### constructor

• **new XRElement**\<`T`\>(): [`XRElement`](XRElement.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Returns

[`XRElement`](XRElement.md)\<`T`\>

#### Overrides

LitElement.constructor

___

### animation

• **animation**: `IAniItem`[] = `[]`

___

### disabled

• `Optional` **disabled**: `boolean`

___

### entity

• **entity**: ``null`` \| `T` = `null`

___

### evaluatedProps

• `Readonly` **evaluatedProps**: `PickStringKey`\<[`XRElement`](XRElement.md)\<`T`\>\>

___

### inspect

• `Optional` **inspect**: `Record`\<`string`, `string`\>

___

### logger

• `Readonly` **logger**: `Logger`

___

### onbeforexrselect

• **onbeforexrselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `XRSessionEvent`) => `any`

An XRSessionEvent of type beforexrselect is dispatched on the DOM overlay
element before generating a WebXR selectstart input event if the -Z axis
of the input source's targetRaySpace intersects the DOM overlay element
at the time the input device's primary action is triggered.

#### Inherited from

LitElement.onbeforexrselect

___

### transition

• **transition**: \{ `delay`: `number` ; `duration`: `number` ; `property`: `string` ; `timingFunction`: `string`  }[] = `[]`

___

### \_$litElement$

▪ `Static` **\_$litElement$**: `boolean`

#### Inherited from

LitElement.\_$litElement$

___

### requiredAttrs

▪ `Static` **requiredAttrs**: `string`[] = `[]`

## rendering

### renderOptions

• `Readonly` **renderOptions**: `RenderOptions`

#### Inherited from

LitElement.renderOptions
