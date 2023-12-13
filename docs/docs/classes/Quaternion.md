# Class: Quaternion

Class used to store quaternion data
Example Playground - Overview - https://playground.babylonjs.com/#L49EJ7#100

**`See`**

 - https://en.wikipedia.org/wiki/Quaternion
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms

## Table of contents

### Constructors

- [constructor](Quaternion.md#constructor)

### Accessors

- [w](Quaternion.md#w)
- [x](Quaternion.md#x)
- [y](Quaternion.md#y)
- [z](Quaternion.md#z)

### Methods

- [add](Quaternion.md#add)
- [addInPlace](Quaternion.md#addinplace)
- [asArray](Quaternion.md#asarray)
- [clone](Quaternion.md#clone)
- [conjugate](Quaternion.md#conjugate)
- [conjugateInPlace](Quaternion.md#conjugateinplace)
- [conjugateToRef](Quaternion.md#conjugatetoref)
- [copyFrom](Quaternion.md#copyfrom)
- [copyFromFloats](Quaternion.md#copyfromfloats)
- [dot](Quaternion.md#dot)
- [equals](Quaternion.md#equals)
- [equalsWithEpsilon](Quaternion.md#equalswithepsilon)
- [fromRotationMatrix](Quaternion.md#fromrotationmatrix)
- [getClassName](Quaternion.md#getclassname)
- [getHashCode](Quaternion.md#gethashcode)
- [invert](Quaternion.md#invert)
- [invertInPlace](Quaternion.md#invertinplace)
- [length](Quaternion.md#length)
- [lengthSquared](Quaternion.md#lengthsquared)
- [multiply](Quaternion.md#multiply)
- [multiplyInPlace](Quaternion.md#multiplyinplace)
- [multiplyToRef](Quaternion.md#multiplytoref)
- [normalize](Quaternion.md#normalize)
- [normalizeFromLength](Quaternion.md#normalizefromlength)
- [normalizeToNew](Quaternion.md#normalizetonew)
- [normalizeToRef](Quaternion.md#normalizetoref)
- [scale](Quaternion.md#scale)
- [scaleAndAddToRef](Quaternion.md#scaleandaddtoref)
- [scaleInPlace](Quaternion.md#scaleinplace)
- [scaleToRef](Quaternion.md#scaletoref)
- [set](Quaternion.md#set)
- [subtract](Quaternion.md#subtract)
- [subtractInPlace](Quaternion.md#subtractinplace)
- [toArray](Quaternion.md#toarray)
- [toEulerAngles](Quaternion.md#toeulerangles)
- [toEulerAnglesToRef](Quaternion.md#toeuleranglestoref)
- [toRotationMatrix](Quaternion.md#torotationmatrix)
- [toString](Quaternion.md#tostring)
- [AreClose](Quaternion.md#areclose)
- [Dot](Quaternion.md#dot-1)
- [FromArray](Quaternion.md#fromarray)
- [FromArrayToRef](Quaternion.md#fromarraytoref)
- [FromEulerAngles](Quaternion.md#fromeulerangles)
- [FromEulerAnglesToRef](Quaternion.md#fromeuleranglestoref)
- [FromEulerVector](Quaternion.md#fromeulervector)
- [FromEulerVectorToRef](Quaternion.md#fromeulervectortoref)
- [FromLookDirectionLH](Quaternion.md#fromlookdirectionlh)
- [FromLookDirectionLHToRef](Quaternion.md#fromlookdirectionlhtoref)
- [FromLookDirectionRH](Quaternion.md#fromlookdirectionrh)
- [FromLookDirectionRHToRef](Quaternion.md#fromlookdirectionrhtoref)
- [FromRotationMatrix](Quaternion.md#fromrotationmatrix-1)
- [FromRotationMatrixToRef](Quaternion.md#fromrotationmatrixtoref)
- [FromUnitVectorsToRef](Quaternion.md#fromunitvectorstoref)
- [Hermite](Quaternion.md#hermite)
- [Hermite1stDerivative](Quaternion.md#hermite1stderivative)
- [Hermite1stDerivativeToRef](Quaternion.md#hermite1stderivativetoref)
- [Identity](Quaternion.md#identity)
- [Inverse](Quaternion.md#inverse)
- [InverseToRef](Quaternion.md#inversetoref)
- [IsIdentity](Quaternion.md#isidentity)
- [Normalize](Quaternion.md#normalize-1)
- [NormalizeToRef](Quaternion.md#normalizetoref-1)
- [RotationAlphaBetaGamma](Quaternion.md#rotationalphabetagamma)
- [RotationAlphaBetaGammaToRef](Quaternion.md#rotationalphabetagammatoref)
- [RotationAxis](Quaternion.md#rotationaxis)
- [RotationAxisToRef](Quaternion.md#rotationaxistoref)
- [RotationQuaternionFromAxis](Quaternion.md#rotationquaternionfromaxis)
- [RotationQuaternionFromAxisToRef](Quaternion.md#rotationquaternionfromaxistoref)
- [RotationYawPitchRoll](Quaternion.md#rotationyawpitchroll)
- [RotationYawPitchRollToRef](Quaternion.md#rotationyawpitchrolltoref)
- [Slerp](Quaternion.md#slerp)
- [SlerpToRef](Quaternion.md#slerptoref)
- [SmoothToRef](Quaternion.md#smoothtoref)
- [Zero](Quaternion.md#zero)

## Constructors

### constructor

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`): [`Quaternion`](Quaternion.md)

Creates a new Quaternion from the given floats

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | defines the first component (0 by default) |
| `y?` | `number` | defines the second component (0 by default) |
| `z?` | `number` | defines the third component (0 by default) |
| `w?` | `number` | defines the fourth component (1.0 by default) |

#### Returns

[`Quaternion`](Quaternion.md)

## Accessors

### w

• `get` **w**(): `number`

Gets or sets the w coordinate

#### Returns

`number`

• `set` **w**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

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

## Methods

### add

▸ **add**(`other`): [`Quaternion`](Quaternion.md)

Adds two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second operand |

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion as the addition result of the given one and the current quaternion

___

### addInPlace

▸ **addInPlace**(`other`): [`Quaternion`](Quaternion.md)

Add a quaternion to the current one
Example Playground https://playground.babylonjs.com/#L49EJ7#11

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the quaternion to add |

#### Returns

[`Quaternion`](Quaternion.md)

the current quaternion

___

### asArray

▸ **asArray**(): `number`[]

Copy the quaternion to an array
Example Playground https://playground.babylonjs.com/#L49EJ7#13

#### Returns

`number`[]

a new array populated with 4 elements from the quaternion coordinates

___

### clone

▸ **clone**(): [`Quaternion`](Quaternion.md)

Clone the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#12

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion copied from the current one

___

### conjugate

▸ **conjugate**(): [`Quaternion`](Quaternion.md)

Conjugates (1-q) the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#83

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion

___

### conjugateInPlace

▸ **conjugateInPlace**(): [`Quaternion`](Quaternion.md)

Conjugates in place the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#82

#### Returns

[`Quaternion`](Quaternion.md)

the current updated quaternion

___

### conjugateToRef

▸ **conjugateToRef**\<`T`\>(`ref`): `T`

Conjugates the current quaternion and stores the result in the given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#81

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `T` | defines the target quaternion |

#### Returns

`T`

result input

___

### copyFrom

▸ **copyFrom**(`other`): [`Quaternion`](Quaternion.md)

Copy a quaternion to the current one
Example Playground https://playground.babylonjs.com/#L49EJ7#86

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the other quaternion |

#### Returns

[`Quaternion`](Quaternion.md)

the updated current quaternion

___

### copyFromFloats

▸ **copyFromFloats**(`x`, `y`, `z`, `w`): [`Quaternion`](Quaternion.md)

Updates the current quaternion with the given float coordinates
Example Playground https://playground.babylonjs.com/#L49EJ7#87

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate |
| `y` | `number` | defines the y coordinate |
| `z` | `number` | defines the z coordinate |
| `w` | `number` | defines the w coordinate |

#### Returns

[`Quaternion`](Quaternion.md)

the updated current quaternion

___

### dot

▸ **dot**(`other`): `number`

Returns the dot product (float) between the current quaternions and "other"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the right operand |

#### Returns

`number`

the dot product

___

### equals

▸ **equals**(`otherQuaternion`): `boolean`

Check if two quaternions are equals
Example Playground https://playground.babylonjs.com/#L49EJ7#38

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherQuaternion` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second operand |

#### Returns

`boolean`

true if the current quaternion and the given one coordinates are strictly equals

___

### equalsWithEpsilon

▸ **equalsWithEpsilon**(`otherQuaternion`, `epsilon?`): `boolean`

Gets a boolean if two quaternions are equals (using an epsilon value)
Example Playground https://playground.babylonjs.com/#L49EJ7#37

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherQuaternion` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the other quaternion |
| `epsilon?` | `number` | defines the minimal distance to consider equality |

#### Returns

`boolean`

true if the given quaternion coordinates are close to the current ones by a distance of epsilon.

___

### fromRotationMatrix

▸ **fromRotationMatrix**(`matrix`): [`Quaternion`](Quaternion.md)

Updates the current quaternion from the given rotation matrix values
Example Playground https://playground.babylonjs.com/#L49EJ7#41

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the source matrix |

#### Returns

[`Quaternion`](Quaternion.md)

the current updated quaternion

___

### getClassName

▸ **getClassName**(): `string`

Gets the class name of the quaternion

#### Returns

`string`

the string "Quaternion"

___

### getHashCode

▸ **getHashCode**(): `number`

Gets a hash code for this quaternion

#### Returns

`number`

the quaternion hash code

___

### invert

▸ **invert**(): [`Quaternion`](Quaternion.md)

Returns the inverse of the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#84

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion

___

### invertInPlace

▸ **invertInPlace**(): [`Quaternion`](Quaternion.md)

Invert in place the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#85

#### Returns

[`Quaternion`](Quaternion.md)

this quaternion

___

### length

▸ **length**(): `number`

Gets length of current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#28

#### Returns

`number`

the quaternion length (float)

___

### lengthSquared

▸ **lengthSquared**(): `number`

Gets squared length of current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#29

#### Returns

`number`

the quaternion length (float)

___

### multiply

▸ **multiply**(`q1`): [`Quaternion`](Quaternion.md)

Multiplies two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#43

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second operand |

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion set as the multiplication result of the current one with the given one "q1"

___

### multiplyInPlace

▸ **multiplyInPlace**(`q1`): [`Quaternion`](Quaternion.md)

Updates the current quaternion with the multiplication of itself with the given one "q1"
Example Playground https://playground.babylonjs.com/#L49EJ7#46

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second operand |

#### Returns

[`Quaternion`](Quaternion.md)

the currentupdated quaternion

___

### multiplyToRef

▸ **multiplyToRef**\<`T`\>(`q1`, `result`): `T`

Sets the given "result" as the multiplication result of the current one with the given one "q1"
Example Playground https://playground.babylonjs.com/#L49EJ7#45

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second operand |
| `result` | `T` | defines the target quaternion |

#### Returns

`T`

the current quaternion

___

### normalize

▸ **normalize**(): [`Quaternion`](Quaternion.md)

Normalize in place the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#54

#### Returns

[`Quaternion`](Quaternion.md)

the current updated quaternion

___

### normalizeFromLength

▸ **normalizeFromLength**(`len`): [`Quaternion`](Quaternion.md)

Normalize the current quaternion with the given input length.
Please note that this is an in place operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | the length of the quaternion |

#### Returns

[`Quaternion`](Quaternion.md)

the current updated Quaternion

___

### normalizeToNew

▸ **normalizeToNew**(): [`Quaternion`](Quaternion.md)

Normalize a copy of the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#55

#### Returns

[`Quaternion`](Quaternion.md)

the normalized quaternion

___

### normalizeToRef

▸ **normalizeToRef**\<`T`\>(`reference`): `T`

Normalize the current Quaternion to the reference

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `T` | define the Quaternion to update |

#### Returns

`T`

the updated Quaternion

___

### scale

▸ **scale**(`value`): [`Quaternion`](Quaternion.md)

Multiplies the current quaternion by a scale factor
Example Playground https://playground.babylonjs.com/#L49EJ7#88

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | defines the scale factor |

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion set by multiplying the current quaternion coordinates by the float "scale"

___

### scaleAndAddToRef

▸ **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current quaternion values by a factor and add the result to a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#91

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the Quaternion object where to store the result |

#### Returns

`T`

result input

___

### scaleInPlace

▸ **scaleInPlace**(`value`): [`Quaternion`](Quaternion.md)

Multiplies in place the current quaternion by a scale factor
Example Playground https://playground.babylonjs.com/#L49EJ7#90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | defines the scale factor |

#### Returns

[`Quaternion`](Quaternion.md)

the current modified quaternion

___

### scaleToRef

▸ **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current quaternion values by a factor and stores the result to a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#89

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the Quaternion object where to store the result |

#### Returns

`T`

result input

___

### set

▸ **set**(`x`, `y`, `z`, `w`): [`Quaternion`](Quaternion.md)

Updates the current quaternion from the given float coordinates
Example Playground https://playground.babylonjs.com/#L49EJ7#56

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the x coordinate |
| `y` | `number` | defines the y coordinate |
| `z` | `number` | defines the z coordinate |
| `w` | `number` | defines the w coordinate |

#### Returns

[`Quaternion`](Quaternion.md)

the updated current quaternion

___

### subtract

▸ **subtract**(`other`): [`Quaternion`](Quaternion.md)

Subtract two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#57

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Quaternion`](Quaternion.md) | defines the second operand |

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion as the subtraction result of the given one from the current one

___

### subtractInPlace

▸ **subtractInPlace**(`other`): [`Quaternion`](Quaternion.md)

Subtract a quaternion to the current one
Example Playground https://playground.babylonjs.com/#L49EJ7#58

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the quaternion to subtract |

#### Returns

[`Quaternion`](Quaternion.md)

the current quaternion

___

### toArray

▸ **toArray**(`array`, `index?`): [`Quaternion`](Quaternion.md)

Stores from the starting index in the given array the Quaternion successive values
Example Playground https://playground.babylonjs.com/#L49EJ7#59

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | defines the array where to store the x,y,z,w components |
| `index?` | `number` | defines an optional index in the target array to define where to start storing values |

#### Returns

[`Quaternion`](Quaternion.md)

the current Quaternion object

___

### toEulerAngles

▸ **toEulerAngles**(): [`Vector3`](Vector3.md)

Returns a new Vector3 set with the Euler angles translated from the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#32

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 containing the Euler angles

**`See`**

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions

___

### toEulerAnglesToRef

▸ **toEulerAnglesToRef**\<`T`\>(`result`): `T`

Sets the given vector3 "result" with the Euler angles translated from the current quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#31

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | defines the vector which will be filled with the Euler angles |

#### Returns

`T`

result input

**`See`**

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions

___

### toRotationMatrix

▸ **toRotationMatrix**\<`T`\>(`result`): `T`

Updates the given rotation matrix with the current quaternion values
Example Playground https://playground.babylonjs.com/#L49EJ7#67

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

the updated matrix with the rotation

___

### toString

▸ **toString**(): `string`

Gets a string representation for the current quaternion

#### Returns

`string`

a string with the Quaternion coordinates

___

### AreClose

▸ **AreClose**(`quat0`, `quat1`, `epsilon?`): `boolean`

Checks if the orientations of two rotation quaternions are close to each other
Example Playground https://playground.babylonjs.com/#L49EJ7#60

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quat0` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the first quaternion to check |
| `quat1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second quaternion to check |
| `epsilon?` | `number` | defines closeness, 0 same orientation, 1 PI apart, default 0.1 |

#### Returns

`boolean`

true if the two quaternions are close to each other within epsilon

___

### Dot

▸ **Dot**(`left`, `right`): `number`

Returns the dot product (float) between the quaternions "left" and "right"
Example Playground https://playground.babylonjs.com/#L49EJ7#61

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the left operand |
| `right` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the right operand |

#### Returns

`number`

the dot product

___

### FromArray

▸ **FromArray**(`array`, `offset?`): [`Quaternion`](Quaternion.md)

Creates a new quaternion from data stored into an array
Example Playground https://playground.babylonjs.com/#L49EJ7#63

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the data source |
| `offset?` | `number` | defines the offset in the source array where the data starts |

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion

___

### FromArrayToRef

▸ **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Updates the given quaternion "result" from the starting index of the given array.
Example Playground https://playground.babylonjs.com/#L49EJ7#64

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | the array to pull values from |
| `offset` | `number` | the offset into the array to start at |
| `result` | `T` | the quaternion to store the result in |

#### Returns

`T`

result input

___

### FromEulerAngles

▸ **FromEulerAngles**(`x`, `y`, `z`): [`Quaternion`](Quaternion.md)

Create a quaternion from Euler rotation angles
Example Playground https://playground.babylonjs.com/#L49EJ7#33

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Pitch |
| `y` | `number` | Yaw |
| `z` | `number` | Roll |

#### Returns

[`Quaternion`](Quaternion.md)

the new Quaternion

___

### FromEulerAnglesToRef

▸ **FromEulerAnglesToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Updates a quaternion from Euler rotation angles
Example Playground https://playground.babylonjs.com/#L49EJ7#34

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Pitch |
| `y` | `number` | Yaw |
| `z` | `number` | Roll |
| `result` | `T` | the quaternion to store the result |

#### Returns

`T`

the updated quaternion

___

### FromEulerVector

▸ **FromEulerVector**(`vec`): [`Quaternion`](Quaternion.md)

Create a quaternion from Euler rotation vector
Example Playground https://playground.babylonjs.com/#L49EJ7#35

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | the Euler vector (x Pitch, y Yaw, z Roll) |

#### Returns

[`Quaternion`](Quaternion.md)

the new Quaternion

___

### FromEulerVectorToRef

▸ **FromEulerVectorToRef**\<`T`\>(`vec`, `result`): `T`

Updates a quaternion from Euler rotation vector
Example Playground https://playground.babylonjs.com/#L49EJ7#36

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | the Euler vector (x Pitch, y Yaw, z Roll) |
| `result` | `T` | the quaternion to store the result |

#### Returns

`T`

the updated quaternion

___

### FromLookDirectionLH

▸ **FromLookDirectionLH**(`forward`, `up`): [`Quaternion`](Quaternion.md)

Creates a new rotation value to orient an object to look towards the given forward direction, the up direction being oriented like "up".
This function works in left handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#96

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion oriented toward the specified forward and up.

___

### FromLookDirectionLHToRef

▸ **FromLookDirectionLHToRef**\<`T`\>(`forward`, `up`, `ref`): `T`

Creates a new rotation value to orient an object to look towards the given forward direction with the up direction being oriented like "up", and stores it in the target quaternion.
This function works in left handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#97

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |
| `ref` | `T` | defines the target quaternion. |

#### Returns

`T`

result input

___

### FromLookDirectionRH

▸ **FromLookDirectionRH**(`forward`, `up`): [`Quaternion`](Quaternion.md)

Creates a new rotation value to orient an object to look towards the given forward direction, the up direction being oriented like "up".
This function works in right handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#98

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion oriented toward the specified forward and up.

___

### FromLookDirectionRHToRef

▸ **FromLookDirectionRHToRef**\<`T`\>(`forward`, `up`, `ref`): `T`

Creates a new rotation value to orient an object to look towards the given forward direction with the up direction being oriented like "up", and stores it in the target quaternion.
This function works in right handed mode
Example Playground https://playground.babylonjs.com/#L49EJ7#105

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |
| `ref` | `T` | defines the target quaternion. |

#### Returns

`T`

result input

___

### FromRotationMatrix

▸ **FromRotationMatrix**(`matrix`): [`Quaternion`](Quaternion.md)

Creates a new quaternion from a rotation matrix
Example Playground https://playground.babylonjs.com/#L49EJ7#101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the source matrix |

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion created from the given rotation matrix values

___

### FromRotationMatrixToRef

▸ **FromRotationMatrixToRef**\<`T`\>(`matrix`, `result`): `T`

Updates the given quaternion with the given rotation matrix values
Example Playground https://playground.babylonjs.com/#L49EJ7#102

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the source matrix |
| `result` | `T` | defines the target quaternion |

#### Returns

`T`

result input

___

### FromUnitVectorsToRef

▸ **FromUnitVectorsToRef**\<`T`\>(`vecFrom`, `vecTo`, `result`, `epsilon?`): `T`

Updates a quaternion so that it rotates vector vecFrom to vector vecTo
Example Playground - https://playground.babylonjs.com/#L49EJ7#70

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vecFrom` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the direction vector from which to rotate |
| `vecTo` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the direction vector to which to rotate |
| `result` | `T` | the quaternion to store the result |
| `epsilon?` | `number` | defines the minimal dot value to define vecs as opposite. Default: `BABYLON.Epsilon` |

#### Returns

`T`

the updated quaternion

___

### Hermite

▸ **Hermite**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `T`

Interpolate between two quaternions using Hermite interpolation
Example Playground https://playground.babylonjs.com/#L49EJ7#47

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines first quaternion |
| `tangent1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the incoming tangent |
| `value2` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines second quaternion |
| `tangent2` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the outgoing tangent |
| `amount` | `number` | defines the target quaternion |

#### Returns

`T`

the new interpolated quaternion

**`See`**

https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#hermite-quaternion-spline

___

### Hermite1stDerivative

▸ **Hermite1stDerivative**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `T`

Returns a new Quaternion which is the 1st derivative of the Hermite spline defined by the quaternions "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#L49EJ7#48

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |

#### Returns

`T`

1st derivative

___

### Hermite1stDerivativeToRef

▸ **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Update a Quaternion with the 1st derivative of the Hermite spline defined by the quaternions "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#L49EJ7#49

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |
| `result` | `T` | define where to store the derivative |

#### Returns

`T`

result input

___

### Identity

▸ **Identity**(): [`Quaternion`](Quaternion.md)

Creates an identity quaternion

#### Returns

[`Quaternion`](Quaternion.md)

the identity quaternion

___

### Inverse

▸ **Inverse**\<`T`\>(`q`): `T`

Inverse a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#103

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `DeepImmutable`\<`T`\> | defines the source quaternion |

#### Returns

`T`

a new quaternion as the inverted current quaternion

___

### InverseToRef

▸ **InverseToRef**\<`T`\>(`q`, `result`): `T`

Inverse a given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#104

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) | defines the source quaternion |
| `result` | `T` | the quaternion the result will be stored in |

#### Returns

`T`

the result quaternion

___

### IsIdentity

▸ **IsIdentity**(`quaternion`): `boolean`

Gets a boolean indicating if the given quaternion is identity

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quaternion` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the quaternion to check |

#### Returns

`boolean`

true if the quaternion is identity

___

### Normalize

▸ **Normalize**(`quat`): [`Quaternion`](Quaternion.md)

Returns a new Quaternion as the normalization of the given Quaternion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quat` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the Quaternion to normalize |

#### Returns

[`Quaternion`](Quaternion.md)

the new Quaternion

___

### NormalizeToRef

▸ **NormalizeToRef**\<`T`\>(`quat`, `result`): `T`

Sets the given Quaternion "result" with the normalization of the given first Quaternion

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quat` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the Quaternion to normalize |
| `result` | `T` | defines the Quaternion where to store the result |

#### Returns

`T`

result input

___

### RotationAlphaBetaGamma

▸ **RotationAlphaBetaGamma**(`alpha`, `beta`, `gamma`): [`Quaternion`](Quaternion.md)

Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation
Example Playground https://playground.babylonjs.com/#L49EJ7#68

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alpha` | `number` | defines the rotation around first axis |
| `beta` | `number` | defines the rotation around second axis |
| `gamma` | `number` | defines the rotation around third axis |

#### Returns

[`Quaternion`](Quaternion.md)

the new quaternion

___

### RotationAlphaBetaGammaToRef

▸ **RotationAlphaBetaGammaToRef**\<`T`\>(`alpha`, `beta`, `gamma`, `result`): `T`

Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#69

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alpha` | `number` | defines the rotation around first axis |
| `beta` | `number` | defines the rotation around second axis |
| `gamma` | `number` | defines the rotation around third axis |
| `result` | `T` | defines the target quaternion |

#### Returns

`T`

result input

___

### RotationAxis

▸ **RotationAxis**(`axis`, `angle`): [`Quaternion`](Quaternion.md)

Creates a quaternion from a rotation around an axis
Example Playground https://playground.babylonjs.com/#L49EJ7#72

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the axis to use |
| `angle` | `number` | defines the angle to use |

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion created from the given axis (Vector3) and angle in radians (float)

___

### RotationAxisToRef

▸ **RotationAxisToRef**\<`T`\>(`axis`, `angle`, `result`): `T`

Creates a rotation around an axis and stores it into the given quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#73

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the axis to use |
| `angle` | `number` | defines the angle to use |
| `result` | `T` | defines the target quaternion |

#### Returns

`T`

the target quaternion

___

### RotationQuaternionFromAxis

▸ **RotationQuaternionFromAxis**(`axis1`, `axis2`, `axis3`): [`Quaternion`](Quaternion.md)

Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation)
Example Playground https://playground.babylonjs.com/#L49EJ7#75

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first axis |
| `axis2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second axis |
| `axis3` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the third axis |

#### Returns

[`Quaternion`](Quaternion.md)

the new quaternion

___

### RotationQuaternionFromAxisToRef

▸ **RotationQuaternionFromAxisToRef**\<`T`\>(`axis1`, `axis2`, `axis3`, `ref`): `T`

Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#76

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis1` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the first axis |
| `axis2` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the second axis |
| `axis3` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the third axis |
| `ref` | `T` | defines the target quaternion |

#### Returns

`T`

result input

___

### RotationYawPitchRoll

▸ **RotationYawPitchRoll**(`yaw`, `pitch`, `roll`): [`Quaternion`](Quaternion.md)

Creates a new quaternion from the given Euler float angles (y, x, z)
Example Playground https://playground.babylonjs.com/#L49EJ7#77

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yaw` | `number` | defines the rotation around Y axis |
| `pitch` | `number` | defines the rotation around X axis |
| `roll` | `number` | defines the rotation around Z axis |

#### Returns

[`Quaternion`](Quaternion.md)

the new quaternion

___

### RotationYawPitchRollToRef

▸ **RotationYawPitchRollToRef**\<`T`\>(`yaw`, `pitch`, `roll`, `result`): `T`

Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#78

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yaw` | `number` | defines the rotation around Y axis |
| `pitch` | `number` | defines the rotation around X axis |
| `roll` | `number` | defines the rotation around Z axis |
| `result` | `T` | defines the target quaternion |

#### Returns

`T`

result input

___

### Slerp

▸ **Slerp**(`left`, `right`, `amount`): [`Quaternion`](Quaternion.md)

Interpolates between two quaternions
Example Playground https://playground.babylonjs.com/#L49EJ7#79

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines first quaternion |
| `right` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines second quaternion |
| `amount` | `number` | defines the gradient to use |

#### Returns

[`Quaternion`](Quaternion.md)

the new interpolated quaternion

___

### SlerpToRef

▸ **SlerpToRef**\<`T`\>(`left`, `right`, `amount`, `result`): `T`

Interpolates between two quaternions and stores it into a target quaternion
Example Playground https://playground.babylonjs.com/#L49EJ7#92

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines first quaternion |
| `right` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines second quaternion |
| `amount` | `number` | defines the gradient to use |
| `result` | `T` | defines the target quaternion |

#### Returns

`T`

result input

___

### SmoothToRef

▸ **SmoothToRef**\<`T`\>(`source`, `goal`, `deltaTime`, `lerpTime`, `result`): `T`

Smooth interpolation between two quaternions using Slerp
Example Playground https://playground.babylonjs.com/#L49EJ7#93

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Quaternion`](Quaternion.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Quaternion`](Quaternion.md) | source quaternion |
| `goal` | [`Quaternion`](Quaternion.md) | goal quaternion |
| `deltaTime` | `number` | current interpolation frame |
| `lerpTime` | `number` | total interpolation time |
| `result` | `T` | the smoothed quaternion |

#### Returns

`T`

___

### Zero

▸ **Zero**(): [`Quaternion`](Quaternion.md)

Creates an empty quaternion

#### Returns

[`Quaternion`](Quaternion.md)

a new quaternion set to (0.0, 0.0, 0.0)
