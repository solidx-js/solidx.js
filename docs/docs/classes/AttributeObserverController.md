# Class: AttributeObserverController

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](AttributeObserverController.md#constructor)

### Methods

- [hostConnected](AttributeObserverController.md#hostconnected)
- [hostDisconnected](AttributeObserverController.md#hostdisconnected)

## Constructors

### constructor

• **new AttributeObserverController**(`host`, `_onChange?`, `_skipRequestUpdate?`): [`AttributeObserverController`](AttributeObserverController.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> | `undefined` |
| `_onChange?` | (`name`: `string`, `oldValue`: ``null`` \| `string`) => `void` | `undefined` |
| `_skipRequestUpdate` | `boolean` | `false` |

#### Returns

[`AttributeObserverController`](AttributeObserverController.md)

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
