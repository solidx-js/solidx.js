# Class: TweenController

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](TweenController.md#constructor)

### Methods

- [hostConnected](TweenController.md#hostconnected)
- [hostDisconnected](TweenController.md#hostdisconnected)
- [triggerChange](TweenController.md#triggerchange)

## Constructors

### constructor

• **new TweenController**(`host`, `_tweenRef`, `_onUpdate`, `_onComplete`): [`TweenController`](TweenController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> & \{ `scene?`: `Scene`  } |
| `_tweenRef` | `any` |
| `_onUpdate` | (`property`: `string`) => `void` |
| `_onComplete` | (`property`: `string`) => `void` |

#### Returns

[`TweenController`](TweenController.md)

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

### triggerChange

▸ **triggerChange**(`property`, `newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `newValue` | `any` |
| `oldValue` | `any` |

#### Returns

`void`
