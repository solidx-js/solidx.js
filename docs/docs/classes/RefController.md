# Class: RefController\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IEntityType` |

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](RefController.md#constructor)

### Properties

- [target](RefController.md#target)

### Methods

- [hostDisconnected](RefController.md#hostdisconnected)
- [hostUpdate](RefController.md#hostupdate)
- [reload](RefController.md#reload)

## Constructors

### constructor

• **new RefController**\<`T`\>(`host`, `_type`, `_onGetRefString`, `_onResult`, `_onResolveRef?`): [`RefController`](RefController.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IEntityType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> & \{ `scene`: `Scene`  } |
| `_type` | `T` |
| `_onGetRefString` | () => ``null`` \| `string` |
| `_onResult` | (`target`: ``null`` \| `IBjsEntityType`\<`T`\>) => `void` |
| `_onResolveRef?` | (`ref`: `string`) => \{ `dispose`: () => `any` ; `entity`: `IBjsEntityType`\<`T`\>  } |

#### Returns

[`RefController`](RefController.md)\<`T`\>

## Properties

### target

• **target**: ``null`` \| `IBjsEntityType`\<`T`\> = `null`

## Methods

### hostDisconnected

▸ **hostDisconnected**(): `void`

#### Returns

`void`

#### Implementation of

ReactiveController.hostDisconnected

___

### hostUpdate

▸ **hostUpdate**(): `void`

#### Returns

`void`

#### Implementation of

ReactiveController.hostUpdate

___

### reload

▸ **reload**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`
