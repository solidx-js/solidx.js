# Class: TagListRefController\<T, A, B\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |
| `A` | extends `string` |
| `B` | extends `string` |

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](TagListRefController.md#constructor)

### Methods

- [hostConnected](TagListRefController.md#hostconnected)
- [hostDisconnected](TagListRefController.md#hostdisconnected)
- [hostUpdated](TagListRefController.md#hostupdated)

## Constructors

### constructor

• **new TagListRefController**\<`T`, `A`, `B`\>(`host`, `selectorProp`, `targetProp`): [`TagListRefController`](TagListRefController.md)\<`T`, `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |
| `A` | extends `string` |
| `B` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> & \{ [key in string]?: null \| string } & \{ [key in string]: null \| T[] } |
| `selectorProp` | `A` |
| `targetProp` | `B` |

#### Returns

[`TagListRefController`](TagListRefController.md)\<`T`, `A`, `B`\>

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
