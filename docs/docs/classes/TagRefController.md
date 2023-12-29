# Class: TagRefController\<T, A, B\>

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

- [constructor](TagRefController.md#constructor)

### Methods

- [hostConnected](TagRefController.md#hostconnected)
- [hostDisconnected](TagRefController.md#hostdisconnected)
- [hostUpdated](TagRefController.md#hostupdated)

## Constructors

### constructor

• **new TagRefController**\<`T`, `A`, `B`\>(`host`, `selectorProp`, `targetProp`, `fallbackTagName`): [`TagRefController`](TagRefController.md)\<`T`, `A`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |
| `A` | extends `string` |
| `B` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> & \{ [key in string]?: null \| string } & \{ [key in string]: null \| T } |
| `selectorProp` | `A` |
| `targetProp` | `B` |
| `fallbackTagName` | ``null`` \| `string` \| (`data`: `Record`\<`string`, `string`\>) => `string` |

#### Returns

[`TagRefController`](TagRefController.md)\<`T`, `A`, `B`\>

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
