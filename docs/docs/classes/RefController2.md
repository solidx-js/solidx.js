# Class: RefController2\<T, A, B\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IEntityType` |
| `A` | extends `string` |
| `B` | extends `string` |

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](RefController2.md#constructor)

### Methods

- [hostConnected](RefController2.md#hostconnected)
- [hostDisconnected](RefController2.md#hostdisconnected)
- [hostUpdated](RefController2.md#hostupdated)

## Constructors

### constructor

• **new RefController2**\<`T`, `A`, `B`\>(`host`, `type`, `refProp`, `targetProp`): [`RefController2`](RefController2.md)\<`T`, `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IEntityType` |
| `A` | extends `string` |
| `B` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> & \{ `scene`: `Scene`  } & `Record`\<`A`, ``null`` \| `string`\> & \{ [key in string]: null \| IBjsEntityType\<T\> } |
| `type` | `T` |
| `refProp` | `A` |
| `targetProp` | `B` |

#### Returns

[`RefController2`](RefController2.md)\<`T`, `A`, `B`\>

## Methods

### hostConnected

▸ **hostConnected**(): `void`

#### Returns

`void`

#### Implementation of

ReactiveController.hostConnected

___

### hostDisconnected

▸ **hostDisconnected**(): `void`

#### Returns

`void`

#### Implementation of

ReactiveController.hostDisconnected

___

### hostUpdated

▸ **hostUpdated**(): `void`

#### Returns

`void`

#### Implementation of

ReactiveController.hostUpdated
