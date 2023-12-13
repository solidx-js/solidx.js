# Class: HierarchyController

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](HierarchyController.md#constructor)

### Methods

- [hostConnected](HierarchyController.md#hostconnected)
- [hostDisconnected](HierarchyController.md#hostdisconnected)
- [hostUpdate](HierarchyController.md#hostupdate)

## Constructors

### constructor

• **new HierarchyController**(`host`, `_onParentChanged`): [`HierarchyController`](HierarchyController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRSceneScopeElement`](XRSceneScopeElement.md)\<`any`\> |
| `_onParentChanged` | (`parent`: ``null`` \| `TransformNode`) => `any` |

#### Returns

[`HierarchyController`](HierarchyController.md)

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

### hostUpdate

▸ **hostUpdate**(): `void`

#### Returns

`void`

#### Implementation of

ReactiveController.hostUpdate
