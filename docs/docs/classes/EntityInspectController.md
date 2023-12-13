# Class: EntityInspectController

## Implements

- `ReactiveController`

## Table of contents

### Constructors

- [constructor](EntityInspectController.md#constructor)

### Accessors

- [scene](EntityInspectController.md#scene)
- [uLayer](EntityInspectController.md#ulayer)
- [uLayerScene](EntityInspectController.md#ulayerscene)

### Methods

- [hostDisconnected](EntityInspectController.md#hostdisconnected)
- [hostUpdate](EntityInspectController.md#hostupdate)

## Constructors

### constructor

• **new EntityInspectController**(`host`): [`EntityInspectController`](EntityInspectController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`XRElement`](XRElement.md)\<`any`\> & \{ `scene`: `Scene`  } |

#### Returns

[`EntityInspectController`](EntityInspectController.md)

## Accessors

### scene

• `get` **scene**(): `Scene`

#### Returns

`Scene`

___

### uLayer

• `get` **uLayer**(): `UtilityLayerRenderer`

#### Returns

`UtilityLayerRenderer`

___

### uLayerScene

• `get` **uLayerScene**(): `Scene`

#### Returns

`Scene`

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
