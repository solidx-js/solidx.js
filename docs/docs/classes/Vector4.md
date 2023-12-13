# Class: Vector4

Vector4 class created for EulerAngle class conversion to Quaternion

## Table of contents

### Constructors

- [constructor](Vector4.md#constructor)

### Properties

- [w](Vector4.md#w)
- [x](Vector4.md#x)
- [y](Vector4.md#y)
- [z](Vector4.md#z)

### Accessors

- [ZeroReadOnly](Vector4.md#zeroreadonly)

### Methods

- [add](Vector4.md#add)
- [addInPlace](Vector4.md#addinplace)
- [addToRef](Vector4.md#addtoref)
- [asArray](Vector4.md#asarray)
- [clone](Vector4.md#clone)
- [copyFrom](Vector4.md#copyfrom)
- [copyFromFloats](Vector4.md#copyfromfloats)
- [divide](Vector4.md#divide)
- [divideInPlace](Vector4.md#divideinplace)
- [divideToRef](Vector4.md#dividetoref)
- [dot](Vector4.md#dot)
- [equals](Vector4.md#equals)
- [equalsToFloats](Vector4.md#equalstofloats)
- [equalsWithEpsilon](Vector4.md#equalswithepsilon)
- [floor](Vector4.md#floor)
- [fract](Vector4.md#fract)
- [fromArray](Vector4.md#fromarray)
- [getClassName](Vector4.md#getclassname)
- [getHashCode](Vector4.md#gethashcode)
- [length](Vector4.md#length)
- [lengthSquared](Vector4.md#lengthsquared)
- [maximizeInPlace](Vector4.md#maximizeinplace)
- [minimizeInPlace](Vector4.md#minimizeinplace)
- [multiply](Vector4.md#multiply)
- [multiplyByFloats](Vector4.md#multiplybyfloats)
- [multiplyInPlace](Vector4.md#multiplyinplace)
- [multiplyToRef](Vector4.md#multiplytoref)
- [negate](Vector4.md#negate)
- [negateInPlace](Vector4.md#negateinplace)
- [negateToRef](Vector4.md#negatetoref)
- [normalize](Vector4.md#normalize)
- [normalizeFromLength](Vector4.md#normalizefromlength)
- [normalizeToNew](Vector4.md#normalizetonew)
- [normalizeToRef](Vector4.md#normalizetoref)
- [scale](Vector4.md#scale)
- [scaleAndAddToRef](Vector4.md#scaleandaddtoref)
- [scaleInPlace](Vector4.md#scaleinplace)
- [scaleToRef](Vector4.md#scaletoref)
- [set](Vector4.md#set)
- [setAll](Vector4.md#setall)
- [subtract](Vector4.md#subtract)
- [subtractFromFloats](Vector4.md#subtractfromfloats)
- [subtractFromFloatsToRef](Vector4.md#subtractfromfloatstoref)
- [subtractInPlace](Vector4.md#subtractinplace)
- [subtractToRef](Vector4.md#subtracttoref)
- [toArray](Vector4.md#toarray)
- [toString](Vector4.md#tostring)
- [toVector3](Vector4.md#tovector3)
- [Center](Vector4.md#center)
- [CenterToRef](Vector4.md#centertoref)
- [Distance](Vector4.md#distance)
- [DistanceSquared](Vector4.md#distancesquared)
- [Dot](Vector4.md#dot-1)
- [FromArray](Vector4.md#fromarray-1)
- [FromArrayToRef](Vector4.md#fromarraytoref)
- [FromFloatArrayToRef](Vector4.md#fromfloatarraytoref)
- [FromFloatsToRef](Vector4.md#fromfloatstoref)
- [FromVector3](Vector4.md#fromvector3)
- [Maximize](Vector4.md#maximize)
- [Minimize](Vector4.md#minimize)
- [Normalize](Vector4.md#normalize-1)
- [NormalizeToRef](Vector4.md#normalizetoref-1)
- [One](Vector4.md#one)
- [Random](Vector4.md#random)
- [TransformCoordinates](Vector4.md#transformcoordinates)
- [TransformCoordinatesFromFloatsToRef](Vector4.md#transformcoordinatesfromfloatstoref)
- [TransformCoordinatesToRef](Vector4.md#transformcoordinatestoref)
- [TransformNormal](Vector4.md#transformnormal)
- [TransformNormalFromFloatsToRef](Vector4.md#transformnormalfromfloatstoref)
- [TransformNormalToRef](Vector4.md#transformnormaltoref)
- [Zero](Vector4.md#zero)

## Constructors

### constructor

• **new Vector4**(`x?`, `y?`, `z?`, `w?`): [`Vector4`](Vector4.md)

Creates a Vector4 object from the given floats.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x value of the vector |
| `y?` | `number` | y value of the vector |
| `z?` | `number` | z value of the vector |
| `w?` | `number` | w value of the vector |

#### Returns

[`Vector4`](Vector4.md)

## Properties

### w

• **w**: `number`

w value of the vector

___

### x

• **x**: `number`

x value of the vector

___

### y

• **y**: `number`

y value of the vector

___

### z

• **z**: `number`

z value of the vector

## Accessors

### ZeroReadOnly

• `get` **ZeroReadOnly**(): `DeepImmutableObject`\<[`Vector4`](Vector4.md)\>

Gets a zero Vector4 that must not be updated

#### Returns

`DeepImmutableObject`\<[`Vector4`](Vector4.md)\>

## Methods

### add

▸ **add**(`otherVector`): [`Vector4`](Vector4.md)

Returns a new Vector4 as the result of the addition of the current Vector4 and the given one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to add |

#### Returns

[`Vector4`](Vector4.md)

the resulting vector

___

### addInPlace

▸ **addInPlace**(`otherVector`): [`Vector4`](Vector4.md)

Adds the given vector to the current Vector4.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to add |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### addToRef

▸ **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Updates the given vector "result" with the result of the addition of the current Vector4 and the given one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to add |
| `result` | `T` | the vector to store the result |

#### Returns

`T`

result input

___

### asArray

▸ **asArray**(): `number`[]

Returns a new array populated with 4 elements : the Vector4 coordinates.

#### Returns

`number`[]

the resulting array

___

### clone

▸ **clone**(): [`Vector4`](Vector4.md)

Returns a new Vector4 copied from the current one.

#### Returns

[`Vector4`](Vector4.md)

the new cloned vector

___

### copyFrom

▸ **copyFrom**(`source`): [`Vector4`](Vector4.md)

Updates the current Vector4 with the given one coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the source vector to copy from |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### copyFromFloats

▸ **copyFromFloats**(`x`, `y`, `z`, `w`): [`Vector4`](Vector4.md)

Updates the current Vector4 coordinates with the given floats.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | float to copy from |
| `y` | `number` | float to copy from |
| `z` | `number` | float to copy from |
| `w` | `number` | float to copy from |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### divide

▸ **divide**(`otherVector`): [`Vector4`](Vector4.md)

Returns a new Vector4 set with the division result of the current Vector4 by the given one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | vector to devide with |

#### Returns

[`Vector4`](Vector4.md)

resulting new vector

___

### divideInPlace

▸ **divideInPlace**(`otherVector`): [`Vector4`](Vector4.md)

Divides the current Vector3 coordinates by the given ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | vector to devide with |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector3.

___

### divideToRef

▸ **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Updates the given vector "result" with the division result of the current Vector4 by the given one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | vector to devide with |
| `result` | `T` | vector to store the result |

#### Returns

`T`

result input

___

### dot

▸ **dot**(`otherVector`): `number`

Returns the dot product (float) between the current vectors and "otherVector"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | defines the right operand |

#### Returns

`number`

the dot product

___

### equals

▸ **equals**(`otherVector`): `boolean`

Boolean : True if the current Vector4 coordinates are stricly equal to the given ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to compare against |

#### Returns

`boolean`

true if they are equal

___

### equalsToFloats

▸ **equalsToFloats**(`x`, `y`, `z`, `w`): `boolean`

Boolean : True if the given floats are strictly equal to the current Vector4 coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x value to compare against |
| `y` | `number` | y value to compare against |
| `z` | `number` | z value to compare against |
| `w` | `number` | w value to compare against |

#### Returns

`boolean`

true if equal

___

### equalsWithEpsilon

▸ **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | vector to compare against |
| `epsilon?` | `number` | (Default: very small number) |

#### Returns

`boolean`

true if they are equal

___

### floor

▸ **floor**(): [`Vector4`](Vector4.md)

Gets a new Vector4 from current Vector4 floored values

#### Returns

[`Vector4`](Vector4.md)

a new Vector4

___

### fract

▸ **fract**(): [`Vector4`](Vector4.md)

Gets a new Vector4 from current Vector4 fractional values

#### Returns

[`Vector4`](Vector4.md)

a new Vector4

___

### fromArray

▸ **fromArray**(`array`, `index?`): [`Vector4`](Vector4.md)

Update the current vector from an array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | defines the destination array |
| `index?` | `number` | defines the offset in the destination array |

#### Returns

[`Vector4`](Vector4.md)

the current Vector3

___

### getClassName

▸ **getClassName**(): `string`

Returns the string "Vector4".

#### Returns

`string`

"Vector4"

___

### getHashCode

▸ **getHashCode**(): `number`

Returns the Vector4 hash code.

#### Returns

`number`

a unique hash code

___

### length

▸ **length**(): `number`

Returns the Vector4 length (float).

#### Returns

`number`

the length

___

### lengthSquared

▸ **lengthSquared**(): `number`

Returns the Vector4 squared length (float).

#### Returns

`number`

the length squared

___

### maximizeInPlace

▸ **maximizeInPlace**(`other`): [`Vector4`](Vector4.md)

Updates the Vector4 coordinates with the maximum values between its own and the given vector ones

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | defines the second operand |

#### Returns

[`Vector4`](Vector4.md)

the current updated Vector4

___

### minimizeInPlace

▸ **minimizeInPlace**(`other`): [`Vector4`](Vector4.md)

Updates the Vector4 coordinates with the minimum values between its own and the given vector ones

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | defines the second operand |

#### Returns

[`Vector4`](Vector4.md)

the current updated Vector4

___

### multiply

▸ **multiply**(`otherVector`): [`Vector4`](Vector4.md)

Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | vector to multiple with |

#### Returns

[`Vector4`](Vector4.md)

resulting new vector

___

### multiplyByFloats

▸ **multiplyByFloats**(`x`, `y`, `z`, `w`): [`Vector4`](Vector4.md)

Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x value multiply with |
| `y` | `number` | y value multiply with |
| `z` | `number` | z value multiply with |
| `w` | `number` | w value multiply with |

#### Returns

[`Vector4`](Vector4.md)

resulting new vector

___

### multiplyInPlace

▸ **multiplyInPlace**(`otherVector`): [`Vector4`](Vector4.md)

Multiplies in place the current Vector4 by the given one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector4`](Vector4.md) | vector to multiple with |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### multiplyToRef

▸ **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Updates the given vector "result" with the multiplication result of the current Vector4 and the given one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | vector to multiple with |
| `result` | `T` | vector to store the result |

#### Returns

`T`

result input

___

### negate

▸ **negate**(): [`Vector4`](Vector4.md)

Returns a new Vector4 set with the current Vector4 negated coordinates.

#### Returns

[`Vector4`](Vector4.md)

a new vector with the negated values

___

### negateInPlace

▸ **negateInPlace**(): [`Vector4`](Vector4.md)

Negate this vector in place

#### Returns

[`Vector4`](Vector4.md)

this

___

### negateToRef

▸ **negateToRef**\<`T`\>(`result`): `T`

Negate the current Vector4 and stores the result in the given vector "result" coordinates

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | defines the Vector3 object where to store the result |

#### Returns

`T`

the result

___

### normalize

▸ **normalize**(): [`Vector4`](Vector4.md)

Normalizes in place the Vector4.

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### normalizeFromLength

▸ **normalizeFromLength**(`len`): [`Vector4`](Vector4.md)

Normalize the current Vector4 with the given input length.
Please note that this is an in place operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | the length of the vector |

#### Returns

[`Vector4`](Vector4.md)

the current updated Vector4

___

### normalizeToNew

▸ **normalizeToNew**(): [`Vector4`](Vector4.md)

Normalize the current Vector4 to a new vector

#### Returns

[`Vector4`](Vector4.md)

the new Vector4

___

### normalizeToRef

▸ **normalizeToRef**\<`T`\>(`reference`): `T`

Normalize the current Vector4 to the reference

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reference` | `T` | define the Vector4 to update |

#### Returns

`T`

the updated Vector4

___

### scale

▸ **scale**(`scale`): [`Vector4`](Vector4.md)

Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | the number to scale with |

#### Returns

[`Vector4`](Vector4.md)

a new vector with the result

___

### scaleAndAddToRef

▸ **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current Vector4 values by a factor and add the result to a given Vector4

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the Vector4 object where to store the result |

#### Returns

`T`

result input

___

### scaleInPlace

▸ **scaleInPlace**(`scale`): [`Vector4`](Vector4.md)

Multiplies the current Vector4 coordinates by scale (float).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | the number to scale with |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### scaleToRef

▸ **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | the number to scale with |
| `result` | `T` | a vector to store the result in |

#### Returns

`T`

result input

___

### set

▸ **set**(`x`, `y`, `z`, `w`): [`Vector4`](Vector4.md)

Updates the current Vector4 coordinates with the given floats.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | float to set from |
| `y` | `number` | float to set from |
| `z` | `number` | float to set from |
| `w` | `number` | float to set from |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### setAll

▸ **setAll**(`v`): [`Vector4`](Vector4.md)

Copies the given float to the current Vector3 coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | defines the x, y, z and w coordinates of the operand |

#### Returns

[`Vector4`](Vector4.md)

the current updated Vector3

___

### subtract

▸ **subtract**(`otherVector`): [`Vector4`](Vector4.md)

Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to add |

#### Returns

[`Vector4`](Vector4.md)

the new vector with the result

___

### subtractFromFloats

▸ **subtractFromFloats**(`x`, `y`, `z`, `w`): [`Vector4`](Vector4.md)

Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | value to subtract |
| `y` | `number` | value to subtract |
| `z` | `number` | value to subtract |
| `w` | `number` | value to subtract |

#### Returns

[`Vector4`](Vector4.md)

new vector containing the result

___

### subtractFromFloatsToRef

▸ **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | value to subtract |
| `y` | `number` | value to subtract |
| `z` | `number` | value to subtract |
| `w` | `number` | value to subtract |
| `result` | `T` | the vector to store the result in |

#### Returns

`T`

result input

___

### subtractInPlace

▸ **subtractInPlace**(`otherVector`): [`Vector4`](Vector4.md)

Subtract in place the given vector from the current Vector4.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to subtract |

#### Returns

[`Vector4`](Vector4.md)

the updated Vector4.

___

### subtractToRef

▸ **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to subtract |
| `result` | `T` | the vector to store the result |

#### Returns

`T`

result input

___

### toArray

▸ **toArray**(`array`, `index?`): [`Vector4`](Vector4.md)

Populates the given array from the given index with the Vector4 coordinates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | array to populate |
| `index?` | `number` | index of the array to start at (default: 0) |

#### Returns

[`Vector4`](Vector4.md)

the Vector4.

___

### toString

▸ **toString**(): `string`

Returns the string with the Vector4 coordinates.

#### Returns

`string`

a string containing all the vector values

___

### toVector3

▸ **toVector3**(): [`Vector3`](Vector3.md)

Returns a new Vector3 from the Vector4 (x, y, z) coordinates.

#### Returns

[`Vector3`](Vector3.md)

this converted to a new vector3

___

### Center

▸ **Center**(`value1`, `value2`): [`Vector4`](Vector4.md)

Returns a new Vector4 located at the center between the vectors "value1" and "value2".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | value to calulate the center between |
| `value2` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | value to calulate the center between |

#### Returns

[`Vector4`](Vector4.md)

the center between the two vectors

___

### CenterToRef

▸ **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | defines first vector |
| `value2` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | defines second vector |
| `ref` | `T` | defines third vector |

#### Returns

`T`

ref

___

### Distance

▸ **Distance**(`value1`, `value2`): `number`

Returns the distance (float) between the vectors "value1" and "value2".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | value to calulate the distance between |
| `value2` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | value to calulate the distance between |

#### Returns

`number`

the distance between the two vectors

___

### DistanceSquared

▸ **DistanceSquared**(`value1`, `value2`): `number`

Returns the squared distance (float) between the vectors "value1" and "value2".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | value to calulate the distance between |
| `value2` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | value to calulate the distance between |

#### Returns

`number`

the distance between the two vectors squared

___

### Dot

▸ **Dot**(`left`, `right`): `number`

Returns the dot product (float) between the vectors "left" and "right"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | defines the left operand |
| `right` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | defines the right operand |

#### Returns

`number`

the dot product

___

### FromArray

▸ **FromArray**(`array`, `offset?`): [`Vector4`](Vector4.md)

Returns a new Vector4 set from the starting index of the given array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | the array to pull values from |
| `offset?` | `number` | the offset into the array to start at |

#### Returns

[`Vector4`](Vector4.md)

the new vector

___

### FromArrayToRef

▸ **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Updates the given vector "result" from the starting index of the given array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | the array to pull values from |
| `offset` | `number` | the offset into the array to start at |
| `result` | `T` | the vector to store the result in |

#### Returns

`T`

result input

___

### FromFloatArrayToRef

▸ **FromFloatArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Updates the given vector "result" from the starting index of the given Float32Array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`Float32Array`\> | the array to pull values from |
| `offset` | `number` | the offset into the array to start at |
| `result` | `T` | the vector to store the result in |

#### Returns

`T`

result input

___

### FromFloatsToRef

▸ **FromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Updates the given vector "result" coordinates from the given floats.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | float to set from |
| `y` | `number` | float to set from |
| `z` | `number` | float to set from |
| `w` | `number` | float to set from |
| `result` | `T` | the vector to the floats in |

#### Returns

`T`

result input

___

### FromVector3

▸ **FromVector3**(`source`, `w?`): [`Vector4`](Vector4.md)

Creates a new Vector4 from a Vector3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Vector3`](Vector3.md) | defines the source data |
| `w?` | `number` | defines the 4th component (default is 0) |

#### Returns

[`Vector4`](Vector4.md)

a new Vector4

___

### Maximize

▸ **Maximize**\<`T`\>(`left`, `right`): `T`

Returns a vector with the maximum values from the left and right vectors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutable`\<`T`\> | left vector to maximize |
| `right` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | right vector to maximize |

#### Returns

`T`

a new vector with the maximum of the left and right vector values

___

### Minimize

▸ **Minimize**\<`T`\>(`left`, `right`): `T`

Returns a vector with the minimum values from the left and right vectors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutable`\<`T`\> | left vector to minimize |
| `right` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | right vector to minimize |

#### Returns

`T`

a new vector with the minimum of the left and right vector values

___

### Normalize

▸ **Normalize**(`vector`): [`Vector4`](Vector4.md)

Returns a new normalized Vector4 from the given one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to normalize |

#### Returns

[`Vector4`](Vector4.md)

the vector

___

### NormalizeToRef

▸ **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Updates the given vector "result" from the normalization of the given one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to normalize |
| `result` | `T` | the vector to store the result in |

#### Returns

`T`

result input

___

### One

▸ **One**(): [`Vector4`](Vector4.md)

Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)

#### Returns

[`Vector4`](Vector4.md)

the new vector

___

### Random

▸ **Random**(`min?`, `max?`): [`Vector4`](Vector4.md)

Returns a new Vector4 with random values between min and max

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min?` | `number` | the minimum random value |
| `max?` | `number` | the maximum random value |

#### Returns

[`Vector4`](Vector4.md)

a Vector4 with random values between min and max

___

### TransformCoordinates

▸ **TransformCoordinates**(`vector`, `transformation`): [`Vector4`](Vector4.md)

Returns a new Vector4 set with the result of the transformation by the given matrix of the given vector.
This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
The difference with Vector3.TransformCoordinates is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |

#### Returns

[`Vector4`](Vector4.md)

the transformed Vector4

___

### TransformCoordinatesFromFloatsToRef

▸ **TransformCoordinatesFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
This method computes tranformed coordinates only, not transformed direction vectors
The difference with Vector3.TransformCoordinatesFromFloatsToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | define the x coordinate of the source vector |
| `y` | `number` | define the y coordinate of the source vector |
| `z` | `number` | define the z coordinate of the source vector |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |
| `result` | `T` | defines the Vector4 where to store the result |

#### Returns

`T`

result input

___

### TransformCoordinatesToRef

▸ **TransformCoordinatesToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
The difference with Vector3.TransformCoordinatesToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the Vector3 to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the transformation matrix |
| `result` | `T` | defines the Vector4 where to store the result |

#### Returns

`T`

result input

___

### TransformNormal

▸ **TransformNormal**\<`T`\>(`vector`, `transformation`): `T`

Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector.
This methods computes transformed normalized direction vectors only.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutable`\<`T`\> | the vector to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | the transformation matrix to apply |

#### Returns

`T`

the new vector

___

### TransformNormalFromFloatsToRef

▸ **TransformNormalFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `transformation`, `result`): `T`

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w).
This methods computes transformed normalized direction vectors only.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | value to transform |
| `y` | `number` | value to transform |
| `z` | `number` | value to transform |
| `w` | `number` | value to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | the transformation matrix to apply |
| `result` | `T` | the vector to store the results in |

#### Returns

`T`

result input

___

### TransformNormalToRef

▸ **TransformNormalToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector.
This methods computes transformed normalized direction vectors only.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | `DeepImmutableObject`\<[`Vector4`](Vector4.md)\> | the vector to transform |
| `transformation` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | the transformation matrix to apply |
| `result` | `T` | the vector to store the result in |

#### Returns

`T`

result input

___

### Zero

▸ **Zero**(): [`Vector4`](Vector4.md)

Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)

#### Returns

[`Vector4`](Vector4.md)

the new vector
