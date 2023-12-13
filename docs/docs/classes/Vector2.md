# Class: Vector2

Class representing a vector containing 2 coordinates
Example Playground - Overview -  https://playground.babylonjs.com/#QYBWV4#9

## Table of contents

### Constructors

- [constructor](Vector2.md#constructor)

### Properties

- [x](Vector2.md#x)
- [y](Vector2.md#y)

### Accessors

- [ZeroReadOnly](Vector2.md#zeroreadonly)

### Methods

- [add](Vector2.md#add)
- [addInPlace](Vector2.md#addinplace)
- [addToRef](Vector2.md#addtoref)
- [addVector3](Vector2.md#addvector3)
- [asArray](Vector2.md#asarray)
- [clone](Vector2.md#clone)
- [copyFrom](Vector2.md#copyfrom)
- [copyFromFloats](Vector2.md#copyfromfloats)
- [divide](Vector2.md#divide)
- [divideInPlace](Vector2.md#divideinplace)
- [divideToRef](Vector2.md#dividetoref)
- [dot](Vector2.md#dot)
- [equals](Vector2.md#equals)
- [equalsWithEpsilon](Vector2.md#equalswithepsilon)
- [floor](Vector2.md#floor)
- [fract](Vector2.md#fract)
- [fromArray](Vector2.md#fromarray)
- [getClassName](Vector2.md#getclassname)
- [getHashCode](Vector2.md#gethashcode)
- [length](Vector2.md#length)
- [lengthSquared](Vector2.md#lengthsquared)
- [multiply](Vector2.md#multiply)
- [multiplyByFloats](Vector2.md#multiplybyfloats)
- [multiplyInPlace](Vector2.md#multiplyinplace)
- [multiplyToRef](Vector2.md#multiplytoref)
- [negate](Vector2.md#negate)
- [negateInPlace](Vector2.md#negateinplace)
- [negateToRef](Vector2.md#negatetoref)
- [normalize](Vector2.md#normalize)
- [normalizeFromLength](Vector2.md#normalizefromlength)
- [normalizeToNew](Vector2.md#normalizetonew)
- [normalizeToRef](Vector2.md#normalizetoref)
- [rotateToRef](Vector2.md#rotatetoref)
- [scale](Vector2.md#scale)
- [scaleAndAddToRef](Vector2.md#scaleandaddtoref)
- [scaleInPlace](Vector2.md#scaleinplace)
- [scaleToRef](Vector2.md#scaletoref)
- [set](Vector2.md#set)
- [subtract](Vector2.md#subtract)
- [subtractInPlace](Vector2.md#subtractinplace)
- [subtractToRef](Vector2.md#subtracttoref)
- [toArray](Vector2.md#toarray)
- [toString](Vector2.md#tostring)
- [CatmullRom](Vector2.md#catmullrom)
- [Center](Vector2.md#center)
- [CenterToRef](Vector2.md#centertoref)
- [Clamp](Vector2.md#clamp)
- [Distance](Vector2.md#distance)
- [DistanceOfPointFromSegment](Vector2.md#distanceofpointfromsegment)
- [DistanceSquared](Vector2.md#distancesquared)
- [Dot](Vector2.md#dot-1)
- [FromArray](Vector2.md#fromarray-1)
- [FromArrayToRef](Vector2.md#fromarraytoref)
- [Hermite](Vector2.md#hermite)
- [Hermite1stDerivative](Vector2.md#hermite1stderivative)
- [Hermite1stDerivativeToRef](Vector2.md#hermite1stderivativetoref)
- [Lerp](Vector2.md#lerp)
- [Maximize](Vector2.md#maximize)
- [Minimize](Vector2.md#minimize)
- [Normalize](Vector2.md#normalize-1)
- [NormalizeToRef](Vector2.md#normalizetoref-1)
- [One](Vector2.md#one)
- [PointInTriangle](Vector2.md#pointintriangle)
- [Random](Vector2.md#random)
- [Transform](Vector2.md#transform)
- [TransformToRef](Vector2.md#transformtoref)
- [Zero](Vector2.md#zero)

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`): [`Vector2`](Vector2.md)

Creates a new Vector2 from the given x and y coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | defines the first coordinate |
| `y?` | `number` | defines the second coordinate |

#### Returns

[`Vector2`](Vector2.md)

## Properties

### x

• **x**: `number`

defines the first coordinate

___

### y

• **y**: `number`

defines the second coordinate

## Accessors

### ZeroReadOnly

• `get` **ZeroReadOnly**(): `DeepImmutableObject`\<[`Vector2`](Vector2.md)\>

Gets a zero Vector2 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector2`](Vector2.md)\>

## Methods

### add

▸ **add**(`otherVector`): [`Vector2`](Vector2.md)

Add another vector with the current one
Example Playground https://playground.babylonjs.com/#QYBWV4#11

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2 set with the addition of the current Vector2 and the given one coordinates

___

### addInPlace

▸ **addInPlace**(`otherVector`): [`Vector2`](Vector2.md)

Set the Vector2 coordinates by adding the given Vector2 coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#13

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### addToRef

▸ **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#12

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |
| `result` | `T` | defines the target vector |

#### Returns

`T`

result input

___

### addVector3

▸ **addVector3**(`otherVector`): [`Vector2`](Vector2.md)

Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#14

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector3`](Vector3.md) | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### asArray

▸ **asArray**(): `number`[]

Copy the current vector to an array
Example Playground https://playground.babylonjs.com/#QYBWV4#40

#### Returns

`number`[]

a new array with 2 elements: the Vector2 coordinates.

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

Gets a new Vector2 copied from the Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#20

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### copyFrom

▸ **copyFrom**(`source`): [`Vector2`](Vector2.md)

Sets the Vector2 coordinates with the given Vector2 coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#24

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the source Vector2 |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### copyFromFloats

▸ **copyFromFloats**(`x`, `y`): [`Vector2`](Vector2.md)

Sets the Vector2 coordinates with the given floats
Example Playground https://playground.babylonjs.com/#QYBWV4#25

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the first coordinate |
| `y` | `number` | defines the second coordinate |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### divide

▸ **divide**(`otherVector`): [`Vector2`](Vector2.md)

Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#27

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector2`](Vector2.md) | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### divideInPlace

▸ **divideInPlace**(`otherVector`): [`Vector2`](Vector2.md)

Divides the current Vector2 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#QYBWV4#28

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### divideToRef

▸ **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Sets the "result" coordinates with the Vector2 divided by the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#30

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |
| `result` | `T` | defines the target vector |

#### Returns

`T`

result input

___

### dot

▸ **dot**(`otherVector`): `number`

Gets the dot product of the current vector and the vector "otherVector"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines second vector |

#### Returns

`number`

the dot product (float)

___

### equals

▸ **equals**(`otherVector`): `boolean`

Gets a boolean if two vectors are equals
Example Playground https://playground.babylonjs.com/#QYBWV4#31

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |

#### Returns

`boolean`

true if the given vector coordinates strictly equal the current Vector2 ones

___

### equalsWithEpsilon

▸ **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Gets a boolean if two vectors are equals (using an epsilon value)
Example Playground https://playground.babylonjs.com/#QYBWV4#32

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |
| `epsilon?` | `number` | defines the minimal distance to consider equality |

#### Returns

`boolean`

true if the given vector coordinates are close to the current ones by a distance of epsilon.

___

### floor

▸ **floor**(): [`Vector2`](Vector2.md)

Gets a new Vector2 from current Vector2 floored values
Example Playground https://playground.babylonjs.com/#QYBWV4#35
eg (1.2, 2.31) returns (1, 2)

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### fract

▸ **fract**(): [`Vector2`](Vector2.md)

Gets a new Vector2 from current Vector2 fractional values
Example Playground https://playground.babylonjs.com/#QYBWV4#34
eg (1.2, 2.31) returns (0.2, 0.31)

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### fromArray

▸ **fromArray**(`array`, `index?`): [`Vector2`](Vector2.md)

Update the current vector from an array
Example Playground https://playground.babylonjs.com/#QYBWV4#39

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | defines the destination array |
| `index?` | `number` | defines the offset in the destination array |

#### Returns

[`Vector2`](Vector2.md)

the current Vector2

___

### getClassName

▸ **getClassName**(): `string`

Gets class name

#### Returns

`string`

the string "Vector2"

___

### getHashCode

▸ **getHashCode**(): `number`

Gets current vector hash code

#### Returns

`number`

the Vector2 hash code as a number

___

### length

▸ **length**(): `number`

Gets the length of the vector

#### Returns

`number`

the vector length (float)

___

### lengthSquared

▸ **lengthSquared**(): `number`

Gets the vector squared length

#### Returns

`number`

the vector squared length (float)

___

### multiply

▸ **multiply**(`otherVector`): [`Vector2`](Vector2.md)

Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#42

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### multiplyByFloats

▸ **multiplyByFloats**(`x`, `y`): [`Vector2`](Vector2.md)

Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats
Example Playground https://playground.babylonjs.com/#QYBWV4#89

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the first coordinate |
| `y` | `number` | defines the second coordinate |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### multiplyInPlace

▸ **multiplyInPlace**(`otherVector`): [`Vector2`](Vector2.md)

Multiplies in place the current Vector2 coordinates by the given ones
Example Playground https://playground.babylonjs.com/#QYBWV4#43

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### multiplyToRef

▸ **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#44

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |
| `result` | `T` | defines the target vector |

#### Returns

`T`

result input

___

### negate

▸ **negate**(): [`Vector2`](Vector2.md)

Gets a new Vector2 with current Vector2 negated coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#22

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### negateInPlace

▸ **negateInPlace**(): [`Vector2`](Vector2.md)

Negate this vector in place
Example Playground https://playground.babylonjs.com/#QYBWV4#23

#### Returns

[`Vector2`](Vector2.md)

this

___

### negateToRef

▸ **negateToRef**\<`T`\>(`result`): `T`

Negate the current Vector2 and stores the result in the given vector "result" coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#41

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### normalize

▸ **normalize**(): [`Vector2`](Vector2.md)

Normalize the vector
Example Playground https://playground.babylonjs.com/#QYBWV4#48

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### normalizeFromLength

▸ **normalizeFromLength**(`len`): [`Vector2`](Vector2.md)

Normalize the current Vector2 with the given input length.
Please note that this is an in place operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | the length of the vector |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### normalizeToNew

▸ **normalizeToNew**(): [`Vector2`](Vector2.md)

Normalize the current Vector2 to a new vector

#### Returns

[`Vector2`](Vector2.md)

the new Vector2

___

### normalizeToRef

▸ **normalizeToRef**\<`T`\>(`reference`): `T`

Normalize the current Vector2 to the reference

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `T` | define the Vector2 to update |

#### Returns

`T`

the updated Vector2

___

### rotateToRef

▸ **rotateToRef**\<`T`\>(`angle`, `result`): `T`

Rotate the current vector into a given result vector
Example Playground https://playground.babylonjs.com/#QYBWV4#49

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | defines the rotation angle |
| `result` | `T` | defines the result vector where to store the rotated vector |

#### Returns

`T`

result input

___

### scale

▸ **scale**(`scale`): [`Vector2`](Vector2.md)

Returns a new Vector2 scaled by "scale" from the current Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#52

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scaling factor |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### scaleAndAddToRef

▸ **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current Vector2 values by a factor and add the result to a given Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#58

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the Vector2 object where to store the result |

#### Returns

`T`

result input

___

### scaleInPlace

▸ **scaleInPlace**(`scale`): [`Vector2`](Vector2.md)

Multiply the Vector2 coordinates by
Example Playground https://playground.babylonjs.com/#QYBWV4#59

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scaling factor |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### scaleToRef

▸ **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current Vector2 values by a factor to a given Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#57

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the Vector2 object where to store the result |

#### Returns

`T`

result input

___

### set

▸ **set**(`x`, `y`): [`Vector2`](Vector2.md)

Sets the Vector2 coordinates with the given floats
Example Playground https://playground.babylonjs.com/#QYBWV4#62

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the first coordinate |
| `y` | `number` | defines the second coordinate |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### subtract

▸ **subtract**(`otherVector`): [`Vector2`](Vector2.md)

Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#61

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector2`](Vector2.md) | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### subtractInPlace

▸ **subtractInPlace**(`otherVector`): [`Vector2`](Vector2.md)

Sets the current Vector2 coordinates by subtracting from it the given one coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#88

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |

#### Returns

[`Vector2`](Vector2.md)

the current updated Vector2

___

### subtractToRef

▸ **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
Example Playground https://playground.babylonjs.com/#QYBWV4#63

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other vector |
| `result` | `T` | defines the target vector |

#### Returns

`T`

result input

___

### toArray

▸ **toArray**(`array`, `index?`): [`Vector2`](Vector2.md)

Sets the Vector2 coordinates in the given array or Float32Array from the given index.
Example Playground https://playground.babylonjs.com/#QYBWV4#15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | defines the source array |
| `index?` | `number` | defines the offset in source array |

#### Returns

[`Vector2`](Vector2.md)

the current Vector2

___

### toString

▸ **toString**(): `string`

Gets a string with the Vector2 coordinates

#### Returns

`string`

a string with the Vector2 coordinates

___

### CatmullRom

▸ **CatmullRom**\<`T`\>(`value1`, `value2`, `value3`, `value4`, `amount`): `T`

Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
Example Playground https://playground.babylonjs.com/#QYBWV4#65

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines 1st point of control |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 2nd point of control |
| `value3` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 3rd point of control |
| `value4` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 4th point of control |
| `amount` | `number` | defines the interpolation factor |

#### Returns

`T`

a new Vector2

___

### Center

▸ **Center**\<`T`\>(`value1`, `value2`): `T`

Gets a new Vector2 located at the center of the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#86
Example Playground https://playground.babylonjs.com/#QYBWV4#66

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines first vector |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines second vector |

#### Returns

`T`

a new Vector2

___

### CenterToRef

▸ **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
Example Playground https://playground.babylonjs.com/#QYBWV4#66

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines first vector |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines second vector |
| `ref` | `T` | defines third vector |

#### Returns

`T`

ref

___

### Clamp

▸ **Clamp**\<`T`\>(`value`, `min`, `max`): `T`

Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
Example Playground https://playground.babylonjs.com/#QYBWV4#76

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `DeepImmutable`\<`T`\> | defines the value to clamp |
| `min` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the lower limit |
| `max` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the upper limit |

#### Returns

`T`

a new Vector2

___

### Distance

▸ **Distance**(`value1`, `value2`): `number`

Gets the distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#71

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines first vector |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines second vector |

#### Returns

`number`

the distance between vectors

___

### DistanceOfPointFromSegment

▸ **DistanceOfPointFromSegment**(`p`, `segA`, `segB`): `number`

Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
Example Playground https://playground.babylonjs.com/#QYBWV4#77

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the middle point |
| `segA` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines one point of the segment |
| `segB` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the other point of the segment |

#### Returns

`number`

the shortest distance

___

### DistanceSquared

▸ **DistanceSquared**(`value1`, `value2`): `number`

Returns the squared distance between the vectors "value1" and "value2"
Example Playground https://playground.babylonjs.com/#QYBWV4#72

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines first vector |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines second vector |

#### Returns

`number`

the squared distance between vectors

___

### Dot

▸ **Dot**(`left`, `right`): `number`

Gets the dot product of the vector "left" and the vector "right"
Example Playground https://playground.babylonjs.com/#QYBWV4#90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines first vector |
| `right` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines second vector |

#### Returns

`number`

the dot product (float)

___

### FromArray

▸ **FromArray**(`array`, `offset?`): [`Vector2`](Vector2.md)

Gets a new Vector2 set from the given index element of the given array
Example Playground https://playground.babylonjs.com/#QYBWV4#79

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the data source |
| `offset?` | `number` | defines the offset in the data source |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### FromArrayToRef

▸ **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Sets "result" from the given index element of the given array
Example Playground https://playground.babylonjs.com/#QYBWV4#80

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the data source |
| `offset` | `number` | defines the offset in the data source |
| `result` | `T` | defines the target vector |

#### Returns

`T`

result input

___

### Hermite

▸ **Hermite**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `T`

Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2"
Example Playground https://playground.babylonjs.com/#QYBWV4#81

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines the 1st control point |
| `tangent1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the outgoing tangent |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the 2nd control point |
| `tangent2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the incoming tangent |
| `amount` | `number` | defines the interpolation factor |

#### Returns

`T`

a new Vector2

___

### Hermite1stDerivative

▸ **Hermite1stDerivative**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `T`

Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#QYBWV4#82

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutable`\<`T`\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |

#### Returns

`T`

1st derivative

___

### Hermite1stDerivativeToRef

▸ **Hermite1stDerivativeToRef**\<`T`\>(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `T`

Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
Example Playground https://playground.babylonjs.com/#QYBWV4#83

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |
| `result` | `T` | define where the derivative will be stored |

#### Returns

`T`

result input

___

### Lerp

▸ **Lerp**\<`T`\>(`start`, `end`, `amount`): [`Vector2`](Vector2.md)

Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
Example Playground https://playground.babylonjs.com/#QYBWV4#84

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `DeepImmutable`\<`T`\> | defines the start vector |
| `end` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the end vector |
| `amount` | `number` | defines the interpolation factor |

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### Maximize

▸ **Maximize**\<`T`\>(`left`, `right`): `T`

Gets a new Vector2 set with the maximal coordinate values from the "left" and "right" vectors
Example Playground https://playground.babylonjs.com/#QYBWV4#86

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutable`\<`T`\> | defines 1st vector |
| `right` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 2nd vector |

#### Returns

`T`

a new Vector2

___

### Minimize

▸ **Minimize**\<`T`\>(`left`, `right`): `T`

Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
Example Playground https://playground.babylonjs.com/#QYBWV4#86

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutable`\<`T`\> | defines 1st vector |
| `right` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 2nd vector |

#### Returns

`T`

a new Vector2

___

### Normalize

▸ **Normalize**\<`T`\>(`vector`): `T`

Returns a new Vector2 equal to the normalized given vector
Example Playground https://playground.babylonjs.com/#QYBWV4#46

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutable`\<`T`\> | defines the vector to normalize |

#### Returns

`T`

a new Vector2

___

### NormalizeToRef

▸ **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Normalize a given vector into a second one
Example Playground https://playground.babylonjs.com/#QYBWV4#50

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the vector to normalize |
| `result` | `T` | defines the vector where to store the result |

#### Returns

`T`

result input

___

### One

▸ **One**(): [`Vector2`](Vector2.md)

Gets a new Vector2(1, 1)

#### Returns

[`Vector2`](Vector2.md)

a new Vector2

___

### PointInTriangle

▸ **PointInTriangle**(`p`, `p0`, `p1`, `p2`): `boolean`

Determines if a given vector is included in a triangle
Example Playground https://playground.babylonjs.com/#QYBWV4#87

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the vector to test |
| `p0` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 1st triangle point |
| `p1` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 2nd triangle point |
| `p2` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines 3rd triangle point |

#### Returns

`boolean`

true if the point "p" is in the triangle defined by the vectors "p0", "p1", "p2"

___

### Random

▸ **Random**(`min?`, `max?`): [`Vector2`](Vector2.md)

Returns a new Vector2 with random values between min and max

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | `number` | the minimum random value |
| `max?` | `number` | the maximum random value |

#### Returns

[`Vector2`](Vector2.md)

a Vector2 with random values between min and max

___

### Transform

▸ **Transform**\<`T`\>(`vector`, `transformation`): `T`

Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix
Example Playground https://playground.babylonjs.com/#QYBWV4#17

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutable`\<`T`\> | defines the vector to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the matrix to apply |

#### Returns

`T`

a new Vector2

___

### TransformToRef

▸ **TransformToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates
Example Playground https://playground.babylonjs.com/#QYBWV4#19

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector2`](Vector2.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector2`](Vector2.md)\> | defines the vector to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the matrix to apply |
| `result` | `T` | defines the target vector |

#### Returns

`T`

result input

___

### Zero

▸ **Zero**(): [`Vector2`](Vector2.md)

Gets a new Vector2(0, 0)

#### Returns

[`Vector2`](Vector2.md)

a new Vector2
