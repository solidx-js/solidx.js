# Class: TickController

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](TickController.md#constructor)

### Methods

- [hostConnected](TickController.md#hostconnected)
- [hostDisconnected](TickController.md#hostdisconnected)

## Constructors

### constructor

• **new TickController**(`host`, `_onTick`): [`TickController`](TickController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> & \{ `scene?`: `Scene`  } |
| `_onTick` | (`deltaTime`: `number`) => `any` |

#### Returns

[`TickController`](TickController.md)

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
