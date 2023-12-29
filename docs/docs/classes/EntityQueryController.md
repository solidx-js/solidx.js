# Class: EntityQueryController

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](EntityQueryController.md#constructor)

### Methods

- [hostConnected](EntityQueryController.md#hostconnected)
- [query](EntityQueryController.md#query)
- [queryList](EntityQueryController.md#querylist)
- [queryWatch](EntityQueryController.md#querywatch)
- [queryWatchList](EntityQueryController.md#querywatchlist)

## Constructors

### constructor

• **new EntityQueryController**(`host`): [`EntityQueryController`](EntityQueryController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> |

#### Returns

[`EntityQueryController`](EntityQueryController.md)

## Methods

### hostConnected

▸ **hostConnected**(): `void`

#### Returns

`void`

#### Implementation of

ReactiveController.hostConnected

___

### query

▸ **query**\<`T`\>(`selector`): ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

``null`` \| `T`

___

### queryList

▸ **queryList**\<`T`\>(`selector`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`T`[]

___

### queryWatch

▸ **queryWatch**\<`T`\>(`selector`, `signal`, `callback`, `issuer`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `signal` | `AbortSignal` |
| `callback` | (`entity`: `T`) => `void` |
| `issuer` | `string` |

#### Returns

`void`

___

### queryWatchList

▸ **queryWatchList**\<`T`\>(`selector`, `signal`, `callback`, `issuer`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `signal` | `AbortSignal` |
| `callback` | (`entities`: `T`[]) => `void` |
| `issuer` | `string` |

#### Returns

`void`
