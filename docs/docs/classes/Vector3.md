# Class: Vector3

Class used to store (x,y,z) vector representation
A Vector3 is the main object used in 3D geometry
It can represent either the coordinates of a point the space, either a direction
Reminder: js uses a left handed forward facing system
Example Playground - Overview - https://playground.babylonjs.com/#R1F8YU

## Table of contents

### Constructors

- [constructor](Vector3.md#constructor)

### Accessors

- [hasAZeroComponent](Vector3.md#hasazerocomponent)
- [isNonUniform](Vector3.md#isnonuniform)
- [x](Vector3.md#x)
- [y](Vector3.md#y)
- [z](Vector3.md#z)
- [DownReadOnly](Vector3.md#downreadonly)
- [LeftHandedBackwardReadOnly](Vector3.md#lefthandedbackwardreadonly)
- [LeftHandedForwardReadOnly](Vector3.md#lefthandedforwardreadonly)
- [LeftReadOnly](Vector3.md#leftreadonly)
- [OneReadOnly](Vector3.md#onereadonly)
- [RightHandedBackwardReadOnly](Vector3.md#righthandedbackwardreadonly)
- [RightHandedForwardReadOnly](Vector3.md#righthandedforwardreadonly)
- [RightReadOnly](Vector3.md#rightreadonly)
- [UpReadOnly](Vector3.md#upreadonly)
- [ZeroReadOnly](Vector3.md#zeroreadonly)

### Methods

- [add](Vector3.md#add)
- [addInPlace](Vector3.md#addinplace)
- [addInPlaceFromFloats](Vector3.md#addinplacefromfloats)
- [addToRef](Vector3.md#addtoref)
- [applyRotationQuaternion](Vector3.md#applyrotationquaternion)
- [applyRotationQuaternionInPlace](Vector3.md#applyrotationquaternioninplace)
- [applyRotationQuaternionToRef](Vector3.md#applyrotationquaterniontoref)
- [asArray](Vector3.md#asarray)
- [clone](Vector3.md#clone)
- [copyFrom](Vector3.md#copyfrom)
- [copyFromFloats](Vector3.md#copyfromfloats)
- [cross](Vector3.md#cross)
- [divide](Vector3.md#divide)
- [divideInPlace](Vector3.md#divideinplace)
- [divideToRef](Vector3.md#dividetoref)
- [dot](Vector3.md#dot)
- [equals](Vector3.md#equals)
- [equalsToFloats](Vector3.md#equalstofloats)
- [equalsWithEpsilon](Vector3.md#equalswithepsilon)
- [floor](Vector3.md#floor)
- [fract](Vector3.md#fract)
- [fromArray](Vector3.md#fromarray)
- [getClassName](Vector3.md#getclassname)
- [getHashCode](Vector3.md#gethashcode)
- [getNormalToRef](Vector3.md#getnormaltoref)
- [isNonUniformWithinEpsilon](Vector3.md#isnonuniformwithinepsilon)
- [length](Vector3.md#length)
- [lengthSquared](Vector3.md#lengthsquared)
- [maximizeInPlace](Vector3.md#maximizeinplace)
- [maximizeInPlaceFromFloats](Vector3.md#maximizeinplacefromfloats)
- [minimizeInPlace](Vector3.md#minimizeinplace)
- [minimizeInPlaceFromFloats](Vector3.md#minimizeinplacefromfloats)
- [multiply](Vector3.md#multiply)
- [multiplyByFloats](Vector3.md#multiplybyfloats)
- [multiplyInPlace](Vector3.md#multiplyinplace)
- [multiplyToRef](Vector3.md#multiplytoref)
- [negate](Vector3.md#negate)
- [negateInPlace](Vector3.md#negateinplace)
- [negateToRef](Vector3.md#negatetoref)
- [normalize](Vector3.md#normalize)
- [normalizeFromLength](Vector3.md#normalizefromlength)
- [normalizeToNew](Vector3.md#normalizetonew)
- [normalizeToRef](Vector3.md#normalizetoref)
- [projectOnPlane](Vector3.md#projectonplane)
- [projectOnPlaneToRef](Vector3.md#projectonplanetoref)
- [reorderInPlace](Vector3.md#reorderinplace)
- [rotateByQuaternionAroundPointToRef](Vector3.md#rotatebyquaternionaroundpointtoref)
- [rotateByQuaternionToRef](Vector3.md#rotatebyquaterniontoref)
- [scale](Vector3.md#scale)
- [scaleAndAddToRef](Vector3.md#scaleandaddtoref)
- [scaleInPlace](Vector3.md#scaleinplace)
- [scaleToRef](Vector3.md#scaletoref)
- [set](Vector3.md#set)
- [setAll](Vector3.md#setall)
- [subtract](Vector3.md#subtract)
- [subtractFromFloats](Vector3.md#subtractfromfloats)
- [subtractFromFloatsToRef](Vector3.md#subtractfromfloatstoref)
- [subtractInPlace](Vector3.md#subtractinplace)
- [subtractToRef](Vector3.md#subtracttoref)
- [toArray](Vector3.md#toarray)
- [toQuaternion](Vector3.md#toquaternion)
- [toString](Vector3.md#tostring)
- [Backward](Vector3.md#backward)
- [CatmullRom](Vector3.md#catmullrom)
- [Center](Vector3.md#center)
- [CenterToRef](Vector3.md#centertoref)
- [CheckExtends](Vector3.md#checkextends)
- [Clamp](Vector3.md#clamp)
- [ClampToRef](Vector3.md#clamptoref)
- [Cross](Vector3.md#cross-1)
- [CrossToRef](Vector3.md#crosstoref)
- [Distance](Vector3.md#distance)
- [DistanceSquared](Vector3.md#distancesquared)
- [Dot](Vector3.md#dot-1)
- [Down](Vector3.md#down)
- [Forward](Vector3.md#forward)
- [FromArray](Vector3.md#fromarray-1)
- [FromArrayToRef](Vector3.md#fromarraytoref)
- [FromFloatArray](Vector3.md#fromfloatarray)
- [FromFloatArrayToRef](Vector3.md#fromfloatarraytoref)
- [FromFloatsToRef](Vector3.md#fromfloatstoref)
- [GetAngleBetweenVectors](Vector3.md#getanglebetweenvectors)
- [GetAngleBetweenVectorsOnPlane](Vector3.md#getanglebetweenvectorsonplane)
- [GetClipFactor](Vector3.md#getclipfactor)
- [Hermite](Vector3.md#hermite)
- [Hermite1stDerivative](Vector3.md#hermite1stderivative)
- [Hermite1stDerivativeToRef](Vector3.md#hermite1stderivativetoref)
- [Left](Vector3.md#left)
- [Lerp](Vector3.md#lerp)
- [LerpToRef](Vector3.md#lerptoref)
- [Maximize](Vector3.md#maximize)
- [Minimize](Vector3.md#minimize)
- [Normalize](Vector3.md#normalize-1)
- [NormalizeToRef](Vector3.md#normalizetoref-1)
- [One](Vector3.md#one)
- [PitchYawRollToMoveBetweenPoints](Vector3.md#pitchyawrolltomovebetweenpoints)
- [PitchYawRollToMoveBetweenPointsToRef](Vector3.md#pitchyawrolltomovebetweenpointstoref)
- [Project](Vector3.md#project)
- [ProjectOnTriangleToRef](Vector3.md#projectontriangletoref)
- [ProjectToRef](Vector3.md#projecttoref)
- [Random](Vector3.md#random)
- [Reflect](Vector3.md#reflect)
- [ReflectToRef](Vector3.md#reflecttoref)
- [Right](Vector3.md#right)
- [RotationFromAxis](Vector3.md#rotationfromaxis)
- [RotationFromAxisToRef](Vector3.md#rotationfromaxistoref)
- [SlerpToRef](Vector3.md#slerptoref)
- [SmoothToRef](Vector3.md#smoothtoref)
- [TransformCoordinates](Vector3.md#transformcoordinates)
- [TransformCoordinatesFromFloatsToRef](Vector3.md#transformcoordinatesfromfloatstoref)
- [TransformCoordinatesToRef](Vector3.md#transformcoordinatestoref)
- [TransformNormal](Vector3.md#transformnormal)
- [TransformNormalFromFloatsToRef](Vector3.md#transformnormalfromfloatstoref)
- [TransformNormalToRef](Vector3.md#transformnormaltoref)
- [Unproject](Vector3.md#unproject)
- [UnprojectFloatsToRef](Vector3.md#unprojectfloatstoref)
- [UnprojectFromTransform](Vector3.md#unprojectfromtransform)
- [UnprojectToRef](Vector3.md#unprojecttoref)
- [Up](Vector3.md#up)
- [Zero](Vector3.md#zero)

## Constructors

### constructor

• **new Vector3**(`x?`, `y?`, `z?`): [`Vector3`](Vector3.md)

Creates a new Vector3 object from the given x, y, z (floats) coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | defines the first coordinates (on X axis) |
| `y?` | `number` | defines the second coordinates (on Y axis) |
| `z?` | `number` | defines the third coordinates (on Z axis) |

#### Returns

[`Vector3`](Vector3.md)

## Accessors

### hasAZeroComponent

• `get` **hasAZeroComponent**(): `boolean`

Gets a boolean indicating if the vector contains a zero in one of its components
Example Playground https://playground.babylonjs.com/#R1F8YU#1

#### Returns

`boolean`

___

### isNonUniform

• `get` **isNonUniform**(): `boolean`

Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same

#### Returns

`boolean`

___

### x

• `get` **x**(): `number`

Gets or sets the x coordinate

#### Returns

`number`

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### y

• `get` **y**(): `number`

Gets or sets the y coordinate

#### Returns

`number`

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### z

• `get` **z**(): `number`

Gets or sets the z coordinate

#### Returns

`number`

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### DownReadOnly

• `get` **DownReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a down Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### LeftHandedBackwardReadOnly

• `get` **LeftHandedBackwardReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a backward Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### LeftHandedForwardReadOnly

• `get` **LeftHandedForwardReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a forward Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### LeftReadOnly

• `get` **LeftReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a left Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### OneReadOnly

• `get` **OneReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a one Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### RightHandedBackwardReadOnly

• `get` **RightHandedBackwardReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a backward Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### RightHandedForwardReadOnly

• `get` **RightHandedForwardReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a forward Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### RightReadOnly

• `get` **RightReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a right Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### UpReadOnly

• `get` **UpReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets an up Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

___

### ZeroReadOnly

• `get` **ZeroReadOnly**(): `DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

Gets a zero Vector3 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector3`](Vector3.md)\>

## Methods

### add

▸ **add**(`otherVector`): [`Vector3`](Vector3.md)

Gets a new Vector3, result of the addition the current Vector3 and the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the resulting Vector3

___

### addInPlace

▸ **addInPlace**(`otherVector`): [`Vector3`](Vector3.md)

Adds the given vector to the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### addInPlaceFromFloats

▸ **addInPlaceFromFloats**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Adds the given coordinates to the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### addToRef

▸ **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Adds the current Vector3 to the given one and stores the result in the vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#6

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### applyRotationQuaternion

▸ **applyRotationQuaternion**(`q`): [`Vector3`](Vector3.md)

Rotates the vector using the given unit quaternion and returns the new vector
Example Playground https://playground.babylonjs.com/#R1F8YU#7

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) | the unit quaternion representing the rotation |

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

___

### applyRotationQuaternionInPlace

▸ **applyRotationQuaternionInPlace**(`q`): [`Vector3`](Vector3.md)

Rotates the vector in place using the given unit quaternion
Example Playground https://playground.babylonjs.com/#R1F8YU#8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) | the unit quaternion representing the rotation |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### applyRotationQuaternionToRef

▸ **applyRotationQuaternionToRef**\<`T`\>(`q`, `result`): `T`

Rotates the vector using the given unit quaternion and stores the new vector in result
Example Playground https://playground.babylonjs.com/#R1F8YU#9

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) | the unit quaternion representing the rotation |
| `result` | `T` | the output vector |

#### Returns

`T`

the result

___

### asArray

▸ **asArray**(): `number`[]

Creates an array containing three elements : the coordinates of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#10

#### Returns

`number`[]

a new array of numbers

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

Creates a new Vector3 copied from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#11

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### copyFrom

▸ **copyFrom**(`source`): [`Vector3`](Vector3.md)

Copies the given vector coordinates to the current Vector3 ones
Example Playground https://playground.babylonjs.com/#R1F8YU#12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the source Vector3 |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### copyFromFloats

▸ **copyFromFloats**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Copies the given floats to the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#13

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### cross

▸ **cross**(`other`): [`Vector3`](Vector3.md)

Returns a new Vector3 as the cross product of the current vector and the "other" one
The cross product is then orthogonal to both current and "other"
Example Playground https://playground.babylonjs.com/#R1F8YU#14

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector3`](Vector3.md) | defines the right operand |

#### Returns

[`Vector3`](Vector3.md)

the cross product

___

### divide

▸ **divide**(`otherVector`): [`Vector3`](Vector3.md)

Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#R1F8YU#16

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### divideInPlace

▸ **divideInPlace**(`otherVector`): [`Vector3`](Vector3.md)

Divides the current Vector3 coordinates by the given ones.
Example Playground https://playground.babylonjs.com/#R1F8YU#17

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector3`](Vector3.md) | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### divideToRef

▸ **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#18

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### dot

▸ **dot**(`otherVector`): `number`

Returns the dot product (float) between the current vectors and "otherVector"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the right operand |

#### Returns

`number`

the dot product

___

### equals

▸ **equals**(`otherVector`): `boolean`

Returns true if the current Vector3 and the given vector coordinates are strictly equal
Example Playground https://playground.babylonjs.com/#R1F8YU#19

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

`boolean`

true if both vectors are equals

___

### equalsToFloats

▸ **equalsToFloats**(`x`, `y`, `z`): `boolean`

Returns true if the current Vector3 coordinates equals the given floats
Example Playground https://playground.babylonjs.com/#R1F8YU#20

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

`boolean`

true if both vectors are equal

___

### equalsWithEpsilon

▸ **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon
Example Playground https://playground.babylonjs.com/#R1F8YU#21

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |
| `epsilon?` | `number` | defines the minimal distance to define values as equals |

#### Returns

`boolean`

true if both vectors are distant less than epsilon

___

### floor

▸ **floor**(): [`Vector3`](Vector3.md)

Gets a new Vector3 from current Vector3 floored values
Example Playground https://playground.babylonjs.com/#R1F8YU#22

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

___

### fract

▸ **fract**(): [`Vector3`](Vector3.md)

Gets a new Vector3 from current Vector3 fractional values
Example Playground https://playground.babylonjs.com/#R1F8YU#23

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

___

### fromArray

▸ **fromArray**(`array`, `index?`): [`Vector3`](Vector3.md)

Update the current vector from an array
Example Playground https://playground.babylonjs.com/#R1F8YU#24

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | defines the destination array |
| `index?` | `number` | defines the offset in the destination array |

#### Returns

[`Vector3`](Vector3.md)

the current Vector3

___

### getClassName

▸ **getClassName**(): `string`

Gets the class name

#### Returns

`string`

the string "Vector3"

___

### getHashCode

▸ **getHashCode**(): `number`

Creates the Vector3 hash code

#### Returns

`number`

a number which tends to be unique between Vector3 instances

___

### getNormalToRef

▸ **getNormalToRef**(`result`): [`Vector3`](Vector3.md)

Creates a vector normal (perpendicular) to the current Vector3 and stores the result in the given vector
Out of the infinite possibilities the normal chosen is the one formed by rotating the current vector
90 degrees about an axis which lies perpendicular to the current vector
and its projection on the xz plane. In the case of a current vector in the xz plane
the normal is calculated to be along the y axis.
Example Playground https://playground.babylonjs.com/#R1F8YU#230
Example Playground https://playground.babylonjs.com/#R1F8YU#231

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 object where to store the resultant normal returns the result |

#### Returns

[`Vector3`](Vector3.md)

___

### isNonUniformWithinEpsilon

▸ **isNonUniformWithinEpsilon**(`epsilon`): `boolean`

Due to float precision, scale of a mesh could be uniform but float values are off by a small fraction
Check if is non uniform within a certain amount of decimal places to account for this

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `epsilon` | `number` | the amount the values can differ |

#### Returns

`boolean`

if the vector is non uniform to a certain number of decimal places

___

### length

▸ **length**(): `number`

Gets the length of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#25

#### Returns

`number`

the length of the Vector3

___

### lengthSquared

▸ **lengthSquared**(): `number`

Gets the squared length of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#26

#### Returns

`number`

squared length of the Vector3

___

### maximizeInPlace

▸ **maximizeInPlace**(`other`): [`Vector3`](Vector3.md)

Updates the current Vector3 with the maximal coordinate values between its and the given vector ones.
Example Playground https://playground.babylonjs.com/#R1F8YU#27

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### maximizeInPlaceFromFloats

▸ **maximizeInPlaceFromFloats**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Updates the current Vector3 with the maximal coordinate values between its and the given coordinates.
Example Playground https://playground.babylonjs.com/#R1F8YU#28

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### minimizeInPlace

▸ **minimizeInPlace**(`other`): [`Vector3`](Vector3.md)

Updates the current Vector3 with the minimal coordinate values between its and the given vector ones
Example Playground https://playground.babylonjs.com/#R1F8YU#29

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### minimizeInPlaceFromFloats

▸ **minimizeInPlaceFromFloats**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Updates the current Vector3 with the minimal coordinate values between its and the given coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#30

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### multiply

▸ **multiply**(`otherVector`): [`Vector3`](Vector3.md)

Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#31

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### multiplyByFloats

▸ **multiplyByFloats**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Returns a new Vector3 set with the result of the multiplication of the current Vector3 coordinates by the given floats
Example Playground https://playground.babylonjs.com/#R1F8YU#34

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### multiplyInPlace

▸ **multiplyInPlace**(`otherVector`): [`Vector3`](Vector3.md)

Multiplies the current Vector3 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#R1F8YU#32

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### multiplyToRef

▸ **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Multiplies the current Vector3 by the given one and stores the result in the given vector "result"
Example Playground https://playground.babylonjs.com/#R1F8YU#33

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### negate

▸ **negate**(): [`Vector3`](Vector3.md)

Gets a new Vector3 set with the current Vector3 negated coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#35

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

___

### negateInPlace

▸ **negateInPlace**(): [`Vector3`](Vector3.md)

Negate this vector in place
Example Playground https://playground.babylonjs.com/#R1F8YU#36

#### Returns

[`Vector3`](Vector3.md)

this

___

### negateToRef

▸ **negateToRef**\<`T`\>(`result`): `T`

Negate the current Vector3 and stores the result in the given vector "result" coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#37

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) = [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### normalize

▸ **normalize**(): [`Vector3`](Vector3.md)

Normalize the current Vector3.
Please note that this is an in place operation.
Example Playground https://playground.babylonjs.com/#R1F8YU#122

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### normalizeFromLength

▸ **normalizeFromLength**(`len`): [`Vector3`](Vector3.md)

Normalize the current Vector3 with the given input length.
Please note that this is an in place operation.
Example Playground https://playground.babylonjs.com/#R1F8YU#123

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | the length of the vector |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### normalizeToNew

▸ **normalizeToNew**(): [`Vector3`](Vector3.md)

Normalize the current Vector3 to a new vector
Example Playground https://playground.babylonjs.com/#R1F8YU#124

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### normalizeToRef

▸ **normalizeToRef**\<`T`\>(`reference`): `T`

Normalize the current Vector3 to the reference
Example Playground https://playground.babylonjs.com/#R1F8YU#125

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `T` | define the Vector3 to update |

#### Returns

`T`

the updated Vector3

___

### projectOnPlane

▸ **projectOnPlane**\<`T`\>(`plane`, `origin`): `T`

Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
Example Playground https://playground.babylonjs.com/#R1F8YU#48

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane` | [`Plane`](Plane.md) | defines the plane to project to |
| `origin` | [`Vector3`](Vector3.md) | defines the origin of the projection ray |

#### Returns

`T`

the projected vector3

___

### projectOnPlaneToRef

▸ **projectOnPlaneToRef**\<`T`\>(`plane`, `origin`, `result`): `T`

Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
Example Playground https://playground.babylonjs.com/#R1F8YU#49

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane` | [`Plane`](Plane.md) | defines the plane to project to |
| `origin` | [`Vector3`](Vector3.md) | defines the origin of the projection ray |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### reorderInPlace

▸ **reorderInPlace**(`order`): [`Vector3`](Vector3.md)

Reorders the x y z properties of the vector in place
Example Playground https://playground.babylonjs.com/#R1F8YU#44

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order` | `string` | new ordering of the properties (eg. for vector 1,2,3 with "ZYX" will produce 3,2,1) |

#### Returns

[`Vector3`](Vector3.md)

the current updated vector

___

### rotateByQuaternionAroundPointToRef

▸ **rotateByQuaternionAroundPointToRef**\<`T`\>(`quaternion`, `point`, `result`): `T`

Rotates a vector around a given point
Example Playground https://playground.babylonjs.com/#R1F8YU#46

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) | the rotation quaternion |
| `point` | [`Vector3`](Vector3.md) | the point to rotate around |
| `result` | `T` | vector to store the result |

#### Returns

`T`

the resulting vector

___

### rotateByQuaternionToRef

▸ **rotateByQuaternionToRef**\<`T`\>(`quaternion`, `result`): `T`

Rotates the vector around 0,0,0 by a quaternion
Example Playground https://playground.babylonjs.com/#R1F8YU#47

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) | the rotation quaternion |
| `result` | `T` | vector to store the result |

#### Returns

`T`

the resulting vector

___

### scale

▸ **scale**(`scale`): [`Vector3`](Vector3.md)

Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
Example Playground https://playground.babylonjs.com/#R1F8YU#53

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the multiplier factor |

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

___

### scaleAndAddToRef

▸ **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current Vector3 values by a factor and add the result to a given Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#55

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

result input

___

### scaleInPlace

▸ **scaleInPlace**(`scale`): [`Vector3`](Vector3.md)

Multiplies the Vector3 coordinates by the float "scale"
Example Playground https://playground.babylonjs.com/#R1F8YU#56

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the multiplier factor |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### scaleToRef

▸ **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the given vector "result" coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#57

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the multiplier factor |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### set

▸ **set**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Copies the given floats to the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#58

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### setAll

▸ **setAll**(`v`): [`Vector3`](Vector3.md)

Copies the given float to the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#59

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | defines the x, y and z coordinates of the operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### subtract

▸ **subtract**(`otherVector`): [`Vector3`](Vector3.md)

Returns a new Vector3, result of the subtraction of the given vector from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#60

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the resulting Vector3

___

### subtractFromFloats

▸ **subtractFromFloats**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Returns a new Vector3 set with the subtraction of the given floats from the current Vector3 coordinates
Example Playground https://playground.babylonjs.com/#R1F8YU#62

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |

#### Returns

[`Vector3`](Vector3.md)

the resulting Vector3

___

### subtractFromFloatsToRef

▸ **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Subtracts the given floats from the current Vector3 coordinates and set the given vector "result" with this result
Example Playground https://playground.babylonjs.com/#R1F8YU#64

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the operand |
| `y` | `number` | defines the y coordinate of the operand |
| `z` | `number` | defines the z coordinate of the operand |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### subtractInPlace

▸ **subtractInPlace**(`otherVector`): [`Vector3`](Vector3.md)

Subtract the given vector from the current Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#61

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the current updated Vector3

___

### subtractToRef

▸ **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Subtracts the given vector from the current Vector3 and stores the result in the vector "result".
Example Playground https://playground.babylonjs.com/#R1F8YU#63

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### toArray

▸ **toArray**(`array`, `index?`): [`Vector3`](Vector3.md)

Populates the given array or Float32Array from the given index with the successive coordinates of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#65

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | defines the destination array |
| `index?` | `number` | defines the offset in the destination array |

#### Returns

[`Vector3`](Vector3.md)

the current Vector3

___

### toQuaternion

▸ **toQuaternion**(): [`Quaternion`](Quaternion.md)

Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation)
Example Playground https://playground.babylonjs.com/#R1F8YU#66

#### Returns

[`Quaternion`](Quaternion.md)

a new Quaternion object, computed from the Vector3 coordinates

___

### toString

▸ **toString**(): `string`

Creates a string representation of the Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#67

#### Returns

`string`

a string with the Vector3 coordinates.

___

### Backward

▸ **Backward**(`rightHandedSystem?`): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (0.0, 0.0, -1.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rightHandedSystem?` | `boolean` | is the scene right-handed (negative-z) |

#### Returns

[`Vector3`](Vector3.md)

a new Backward Vector3

___

### CatmullRom

▸ **CatmullRom**\<`T`\>(`value1`, `value2`, `value3`, `value4`, `amount`): `T`

Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"
Example Playground https://playground.babylonjs.com/#R1F8YU#69

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines the first control point |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second control point |
| `value3` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the third control point |
| `value4` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the fourth control point |
| `amount` | `number` | defines the amount on the spline to use |

#### Returns

`T`

the new Vector3

___

### Center

▸ **Center**(`value1`, `value2`): [`Vector3`](Vector3.md)

Returns a new Vector3 located at the center between "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#72

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first operand |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### CenterToRef

▸ **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
Example Playground https://playground.babylonjs.com/#R1F8YU#73

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines first vector |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines second vector |
| `ref` | `T` | defines third vector |

#### Returns

`T`

ref

___

### CheckExtends

▸ **CheckExtends**(`v`, `min`, `max`): `void`

Checks if a given vector is inside a specific range
Example Playground https://playground.babylonjs.com/#R1F8YU#75

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | defines the vector to test |
| `min` | [`Vector3`](Vector3.md) | defines the minimum range |
| `max` | [`Vector3`](Vector3.md) | defines the maximum range |

#### Returns

`void`

___

### Clamp

▸ **Clamp**\<`T`\>(`value`, `min`, `max`): `T`

Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
Example Playground https://playground.babylonjs.com/#R1F8YU#76

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `DeepImmutable`\<`T`\> | defines the current value |
| `min` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the lower range value |
| `max` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the upper range value |

#### Returns

`T`

the new Vector3

___

### ClampToRef

▸ **ClampToRef**\<`T`\>(`value`, `min`, `max`, `result`): `T`

Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
Example Playground https://playground.babylonjs.com/#R1F8YU#77

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the current value |
| `min` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the lower range value |
| `max` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the upper range value |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### Cross

▸ **Cross**\<`T`\>(`left`, `right`): `T`

Returns a new Vector3 as the cross product of the vectors "left" and "right"
The cross product is then orthogonal to both "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#15

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutable`\<`T`\> | defines the left operand |
| `right` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the right operand |

#### Returns

`T`

the cross product

___

### CrossToRef

▸ **CrossToRef**\<`T`\>(`left`, `right`, `result`): `T`

Sets the given vector "result" with the cross product of "left" and "right"
The cross product is then orthogonal to both "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#78

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the left operand |
| `right` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the right operand |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### Distance

▸ **Distance**(`value1`, `value2`): `number`

Returns the distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#81

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first operand |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

`number`

the distance

___

### DistanceSquared

▸ **DistanceSquared**(`value1`, `value2`): `number`

Returns the squared distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#R1F8YU#80

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first operand |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

`number`

the squared distance

___

### Dot

▸ **Dot**(`left`, `right`): `number`

Returns the dot product (float) between the vectors "left" and "right"
Example Playground https://playground.babylonjs.com/#R1F8YU#82

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the left operand |
| `right` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the right operand |

#### Returns

`number`

the dot product

___

### Down

▸ **Down**(): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (0.0, -1.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](Vector3.md)

a new down Vector3

___

### Forward

▸ **Forward**(`rightHandedSystem?`): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (0.0, 0.0, 1.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rightHandedSystem?` | `boolean` | is the scene right-handed (negative z) |

#### Returns

[`Vector3`](Vector3.md)

a new forward Vector3

___

### FromArray

▸ **FromArray**(`array`, `offset?`): [`Vector3`](Vector3.md)

Returns a new Vector3 set from the index "offset" of the given array
Example Playground https://playground.babylonjs.com/#R1F8YU#83

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the source array |
| `offset?` | `number` | defines the offset in the source array |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### FromArrayToRef

▸ **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Sets the given vector "result" with the element values from the index "offset" of the given array
Example Playground https://playground.babylonjs.com/#R1F8YU#84

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the source array |
| `offset` | `number` | defines the offset in the source array |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### FromFloatArray

▸ **FromFloatArray**(`array`, `offset?`): [`Vector3`](Vector3.md)

Returns a new Vector3 set from the index "offset" of the given Float32Array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`Float32Array`\> | defines the source array |
| `offset?` | `number` | defines the offset in the source array |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

**`Deprecated`**

Please use FromArray instead.

___

### FromFloatArrayToRef

▸ **FromFloatArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Sets the given vector "result" with the element values from the index "offset" of the given Float32Array

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`Float32Array`\> | defines the source array |
| `offset` | `number` | defines the offset in the source array |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

**`Deprecated`**

Please use FromArrayToRef instead.

___

### FromFloatsToRef

▸ **FromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Sets the given vector "result" with the given floats.
Example Playground https://playground.babylonjs.com/#R1F8YU#85

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) = [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate of the source |
| `y` | `number` | defines the y coordinate of the source |
| `z` | `number` | defines the z coordinate of the source |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

___

### GetAngleBetweenVectors

▸ **GetAngleBetweenVectors**(`vector0`, `vector1`, `normal`): `number`

Get angle between two vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#86

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector0` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | the starting point |
| `vector1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | the ending point |
| `normal` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | direction of the normal |

#### Returns

`number`

the angle between vector0 and vector1

___

### GetAngleBetweenVectorsOnPlane

▸ **GetAngleBetweenVectorsOnPlane**(`vector0`, `vector1`, `normal`): `number`

Get angle between two vectors projected on a plane
Example Playground https://playground.babylonjs.com/#R1F8YU#87
Expectation compute time: 0.01 ms (median) and 0.02 ms (percentile 95%)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector0` | [`Vector3`](Vector3.md) | angle between vector0 and vector1 |
| `vector1` | [`Vector3`](Vector3.md) | angle between vector0 and vector1 |
| `normal` | [`Vector3`](Vector3.md) | Normal of the projection plane |

#### Returns

`number`

the angle in radians (float) between vector0 and vector1 projected on the plane with the specified normal

___

### GetClipFactor

▸ **GetClipFactor**(`vector0`, `vector1`, `axis`, `size`): `number`

Get the clip factor between two vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#126

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector0` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first operand |
| `vector1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |
| `axis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the axis to use |
| `size` | `number` | defines the size along the axis |

#### Returns

`number`

the clip factor

___

### Hermite

▸ **Hermite**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `T`

Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
Example Playground https://playground.babylonjs.com/#R1F8YU#89

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first tangent vector |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second tangent vector |
| `amount` | `number` | defines the amount on the interpolation spline (between 0 and 1) |

#### Returns

`T`

the new Vector3

___

### Hermite1stDerivative

▸ **Hermite1stDerivative**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `T`

Returns a new Vector3 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#R1F8YU#90

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |

#### Returns

`T`

1st derivative

___

### Hermite1stDerivativeToRef

▸ **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Update a Vector3 with the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#R1F8YU#91

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |
| `result` | `T` | define where to store the derivative |

#### Returns

`T`

result input

___

### Left

▸ **Left**(): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (-1.0, 0.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](Vector3.md)

a new left Vector3

___

### Lerp

▸ **Lerp**\<`T`\>(`start`, `end`, `amount`): `T`

Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
Example Playground https://playground.babylonjs.com/#R1F8YU#95

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `DeepImmutable`\<`T`\> | defines the start value |
| `end` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the end value |
| `amount` | `number` | max defines amount between both (between 0 and 1) |

#### Returns

`T`

the new Vector3

___

### LerpToRef

▸ **LerpToRef**\<`T`\>(`start`, `end`, `amount`, `result`): `T`

Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
Example Playground https://playground.babylonjs.com/#R1F8YU#93

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the start value |
| `end` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the end value |
| `amount` | `number` | max defines amount between both (between 0 and 1) |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### Maximize

▸ **Maximize**\<`T`\>(`left`, `right`): `T`

Gets the maximal coordinate values between two Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#96

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutable`\<`T`\> | defines the first operand |
| `right` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

`T`

the new Vector3

___

### Minimize

▸ **Minimize**\<`T`\>(`left`, `right`): `T`

Gets the minimal coordinate values between two Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#97

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutable`\<`T`\> | defines the first operand |
| `right` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second operand |

#### Returns

`T`

the new Vector3

___

### Normalize

▸ **Normalize**(`vector`): [`Vector3`](Vector3.md)

Returns a new Vector3 as the normalization of the given vector
Example Playground https://playground.babylonjs.com/#R1F8YU#98

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to normalize |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### NormalizeToRef

▸ **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Sets the given vector "result" with the normalization of the given first vector
Example Playground https://playground.babylonjs.com/#R1F8YU#98

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to normalize |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### One

▸ **One**(): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (1.0, 1.0, 1.0)

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

___

### PitchYawRollToMoveBetweenPoints

▸ **PitchYawRollToMoveBetweenPoints**(`start`, `target`): [`Vector3`](Vector3.md)

Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point
Example PG https://playground.babylonjs.com/#R1F8YU#188

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`Vector3`](Vector3.md) | the starting point |
| `target` | [`Vector3`](Vector3.md) | the target point |

#### Returns

[`Vector3`](Vector3.md)

the rotation in the form (pitch, yaw, 0)

___

### PitchYawRollToMoveBetweenPointsToRef

▸ **PitchYawRollToMoveBetweenPointsToRef**\<`T`\>(`start`, `target`, `ref`): `T`

Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point and stores it in the ref Vector3
Example PG https://playground.babylonjs.com/#R1F8YU#189

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`Vector3`](Vector3.md) | the starting point |
| `target` | [`Vector3`](Vector3.md) | the target point |
| `ref` | `T` | the vector3 to store the result |

#### Returns

`T`

ref in the form (pitch, yaw, 0)

___

### Project

▸ **Project**\<`T`\>(`vector`, `world`, `transform`, `viewport`): `T`

Project a Vector3 onto screen space
Example Playground https://playground.babylonjs.com/#R1F8YU#101

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutable`\<`T`\> | defines the Vector3 to project |
| `world` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the world matrix to use |
| `transform` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transform (view x projection) matrix to use |
| `viewport` | `DeepImmutableObject`\<`Viewport`\> | defines the screen viewport to use |

#### Returns

`T`

the new Vector3

___

### ProjectOnTriangleToRef

▸ **ProjectOnTriangleToRef**(`vector`, `p0`, `p1`, `p2`, `ref`): `number`

Projects "vector" on the triangle determined by its extremities "p0", "p1" and "p2", stores the result in "ref"
and returns the distance to the projected point.
Example Playground https://playground.babylonjs.com/#R1F8YU#104
From http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.104.4264&rep=rep1&type=pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | the vector to get distance from |
| `p0` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | extremity of the triangle |
| `p1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | extremity of the triangle |
| `p2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | extremity of the triangle |
| `ref` | [`Vector3`](Vector3.md) | variable to store the result to |

#### Returns

`number`

The distance between "ref" and "vector"

___

### ProjectToRef

▸ **ProjectToRef**\<`T`\>(`vector`, `world`, `transform`, `viewport`, `result`): `T`

Project a Vector3 onto screen space to reference
Example Playground https://playground.babylonjs.com/#R1F8YU#102

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to project |
| `world` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the world matrix to use |
| `transform` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transform (view x projection) matrix to use |
| `viewport` | `DeepImmutableObject`\<`Viewport`\> | defines the screen viewport to use |
| `result` | `T` | the vector in which the screen space will be stored |

#### Returns

`T`

result input

___

### Random

▸ **Random**(`min?`, `max?`): [`Vector3`](Vector3.md)

Returns a new Vector3 with random values between min and max

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | `number` | the minimum random value |
| `max?` | `number` | the maximum random value |

#### Returns

[`Vector3`](Vector3.md)

a Vector3 with random values between min and max

___

### Reflect

▸ **Reflect**\<`T`\>(`inDirection`, `normal`): [`Vector3`](Vector3.md)

Reflects a vector off the plane defined by a normalized normal

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDirection` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the vector direction |
| `normal` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the normal - Must be normalized |

#### Returns

[`Vector3`](Vector3.md)

the resulting vector

___

### ReflectToRef

▸ **ReflectToRef**\<`T`\>(`inDirection`, `normal`, `ref`): `T`

Reflects a vector off the plane defined by a normalized normal to reference

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDirection` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the vector direction |
| `normal` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the normal - Must be normalized |
| `ref` | `T` | - |

#### Returns

`T`

the resulting vector

___

### Right

▸ **Right**(): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (1.0, 0.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](Vector3.md)

a new right Vector3

___

### RotationFromAxis

▸ **RotationFromAxis**\<`T`\>(`axis1`, `axis2`, `axis3`): `T`

Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
to something in order to rotate it from its local system to the given target system
Note: axis1, axis2 and axis3 are normalized during this operation
Example Playground https://playground.babylonjs.com/#R1F8YU#106

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis1` | `DeepImmutable`\<`T`\> | defines the first axis |
| `axis2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second axis |
| `axis3` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the third axis |

#### Returns

`T`

a new Vector3

**`See`**

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/target_align

___

### RotationFromAxisToRef

▸ **RotationFromAxisToRef**\<`T`\>(`axis1`, `axis2`, `axis3`, `ref`): `T`

The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3
Example Playground https://playground.babylonjs.com/#R1F8YU#107

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first axis |
| `axis2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second axis |
| `axis3` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the third axis |
| `ref` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### SlerpToRef

▸ **SlerpToRef**\<`T`\>(`vector0`, `vector1`, `slerp`, `result`): `T`

Slerp between two vectors. See also `SmoothToRef`
Slerp is a spherical linear interpolation
giving a slow in and out effect
Example Playground 1 https://playground.babylonjs.com/#R1F8YU#108
Example Playground 2 https://playground.babylonjs.com/#R1F8YU#109

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) = [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector0` | [`Vector3`](Vector3.md) | Start vector |
| `vector1` | [`Vector3`](Vector3.md) | End vector |
| `slerp` | `number` | amount (will be clamped between 0 and 1) |
| `result` | `T` | The slerped vector |

#### Returns

`T`

___

### SmoothToRef

▸ **SmoothToRef**\<`T`\>(`source`, `goal`, `deltaTime`, `lerpTime`, `result`): `T`

Smooth interpolation between two vectors using Slerp
Example Playground https://playground.babylonjs.com/#R1F8YU#110

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) = [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Vector3`](Vector3.md) | source vector |
| `goal` | [`Vector3`](Vector3.md) | goal vector |
| `deltaTime` | `number` | current interpolation frame |
| `lerpTime` | `number` | total interpolation time |
| `result` | `T` | the smoothed vector |

#### Returns

`T`

___

### TransformCoordinates

▸ **TransformCoordinates**\<`T`\>(`vector`, `transformation`): [`Vector3`](Vector3.md)

Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector.
This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
Example Playground https://playground.babylonjs.com/#R1F8YU#111

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |

#### Returns

[`Vector3`](Vector3.md)

the transformed Vector3

___

### TransformCoordinatesFromFloatsToRef

▸ **TransformCoordinatesFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
This method computes transformed coordinates only, not transformed direction vectors
Example Playground https://playground.babylonjs.com/#R1F8YU#115

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | define the x coordinate of the source vector |
| `y` | `number` | define the y coordinate of the source vector |
| `z` | `number` | define the z coordinate of the source vector |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### TransformCoordinatesToRef

▸ **TransformCoordinatesToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
Example Playground https://playground.babylonjs.com/#R1F8YU#113

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### TransformNormal

▸ **TransformNormal**(`vector`, `transformation`): [`Vector3`](Vector3.md)

Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#112

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |

#### Returns

[`Vector3`](Vector3.md)

the new Vector3

___

### TransformNormalFromFloatsToRef

▸ **TransformNormalFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z)
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#116

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | define the x coordinate of the source vector |
| `y` | `number` | define the y coordinate of the source vector |
| `z` | `number` | define the z coordinate of the source vector |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### TransformNormalToRef

▸ **TransformNormalToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector
This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
Example Playground https://playground.babylonjs.com/#R1F8YU#114

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### Unproject

▸ **Unproject**\<`T`\>(`source`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`): `T`

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#117

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `DeepImmutable`\<`T`\> | defines the screen space Vector3 to use |
| `viewportWidth` | `number` | defines the current width of the viewport |
| `viewportHeight` | `number` | defines the current height of the viewport |
| `world` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the world matrix to use (can be set to Identity to go to world space) |
| `view` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the view matrix to use |
| `projection` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the projection matrix to use |

#### Returns

`T`

the new Vector3

___

### UnprojectFloatsToRef

▸ **UnprojectFloatsToRef**\<`T`\>(`sourceX`, `sourceY`, `sourceZ`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`, `result`): `T`

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#120

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceX` | `number` | defines the screen space x coordinate to use |
| `sourceY` | `number` | defines the screen space y coordinate to use |
| `sourceZ` | `number` | defines the screen space z coordinate to use |
| `viewportWidth` | `number` | defines the current width of the viewport |
| `viewportHeight` | `number` | defines the current height of the viewport |
| `world` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the world matrix to use (can be set to Identity to go to world space) |
| `view` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the view matrix to use |
| `projection` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the projection matrix to use |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### UnprojectFromTransform

▸ **UnprojectFromTransform**\<`T`\>(`source`, `viewportWidth`, `viewportHeight`, `world`, `transform`): `T`

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#121

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `DeepImmutable`\<`T`\> | defines the screen space Vector3 to use |
| `viewportWidth` | `number` | defines the current width of the viewport |
| `viewportHeight` | `number` | defines the current height of the viewport |
| `world` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the world matrix to use (can be set to Identity to go to world space) |
| `transform` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transform (view x projection) matrix to use |

#### Returns

`T`

the new Vector3

___

### UnprojectToRef

▸ **UnprojectToRef**\<`T`\>(`source`, `viewportWidth`, `viewportHeight`, `world`, `view`, `projection`, `result`): `T`

Unproject from screen space to object space
Example Playground https://playground.babylonjs.com/#R1F8YU#119

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the screen space Vector3 to use |
| `viewportWidth` | `number` | defines the current width of the viewport |
| `viewportHeight` | `number` | defines the current height of the viewport |
| `world` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the world matrix to use (can be set to Identity to go to world space) |
| `view` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the view matrix to use |
| `projection` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the projection matrix to use |
| `result` | `T` | defines the Vector3 where to store the result |

#### Returns

`T`

result input

___

### Up

▸ **Up**(): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (0.0, 1.0, 0.0)
Example Playground https://playground.babylonjs.com/#R1F8YU#71

#### Returns

[`Vector3`](Vector3.md)

a new up Vector3

___

### Zero

▸ **Zero**(): [`Vector3`](Vector3.md)

Returns a new Vector3 set to (0.0, 0.0, 0.0)

#### Returns

[`Vector3`](Vector3.md)

a new empty Vector3
