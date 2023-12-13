# Class: Color4

Class used to hold a RBGA color

## Table of contents

### Constructors

- [constructor](Color4.md#constructor)

### Properties

- [a](Color4.md#a)
- [b](Color4.md#b)
- [g](Color4.md#g)
- [r](Color4.md#r)

### Methods

- [add](Color4.md#add)
- [addInPlace](Color4.md#addinplace)
- [asArray](Color4.md#asarray)
- [clampToRef](Color4.md#clamptoref)
- [clone](Color4.md#clone)
- [copyFrom](Color4.md#copyfrom)
- [copyFromFloats](Color4.md#copyfromfloats)
- [equals](Color4.md#equals)
- [fromArray](Color4.md#fromarray)
- [getClassName](Color4.md#getclassname)
- [getHashCode](Color4.md#gethashcode)
- [multiply](Color4.md#multiply)
- [multiplyToRef](Color4.md#multiplytoref)
- [scale](Color4.md#scale)
- [scaleAndAddToRef](Color4.md#scaleandaddtoref)
- [scaleInPlace](Color4.md#scaleinplace)
- [scaleToRef](Color4.md#scaletoref)
- [set](Color4.md#set)
- [subtract](Color4.md#subtract)
- [subtractToRef](Color4.md#subtracttoref)
- [toArray](Color4.md#toarray)
- [toGammaSpace](Color4.md#togammaspace)
- [toGammaSpaceToRef](Color4.md#togammaspacetoref)
- [toHexString](Color4.md#tohexstring)
- [toLinearSpace](Color4.md#tolinearspace)
- [toLinearSpaceToRef](Color4.md#tolinearspacetoref)
- [toString](Color4.md#tostring)
- [CheckColors4](Color4.md#checkcolors4)
- [FromArray](Color4.md#fromarray-1)
- [FromArrayToRef](Color4.md#fromarraytoref)
- [FromColor3](Color4.md#fromcolor3)
- [FromHexString](Color4.md#fromhexstring)
- [FromInts](Color4.md#fromints)
- [Hermite](Color4.md#hermite)
- [Hermite1stDerivative](Color4.md#hermite1stderivative)
- [Hermite1stDerivativeToRef](Color4.md#hermite1stderivativetoref)
- [Lerp](Color4.md#lerp)
- [LerpToRef](Color4.md#lerptoref)

## Constructors

### constructor

• **new Color4**(`r?`, `g?`, `b?`, `a?`): [`Color4`](Color4.md)

Creates a new Color4 object from red, green, blue values, all between 0 and 1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r?` | `number` | defines the red component (between 0 and 1, default is 0) |
| `g?` | `number` | defines the green component (between 0 and 1, default is 0) |
| `b?` | `number` | defines the blue component (between 0 and 1, default is 0) |
| `a?` | `number` | defines the alpha component (between 0 and 1, default is 1) |

#### Returns

[`Color4`](Color4.md)

## Properties

### a

• **a**: `number`

Defines the alpha component (between 0 and 1, default is 1)

___

### b

• **b**: `number`

Defines the blue component (between 0 and 1, default is 0)

___

### g

• **g**: `number`

Defines the green component (between 0 and 1, default is 0)

___

### r

• **r**: `number`

Defines the red component (between 0 and 1, default is 0)

## Methods

### add

▸ **add**(`right`): [`Color4`](Color4.md)

Creates a new Color4 set with the added values of the current Color4 and of the given one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second operand |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### addInPlace

▸ **addInPlace**(`right`): [`Color4`](Color4.md)

Adds in place the given Color4 values to the current Color4 object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second operand |

#### Returns

[`Color4`](Color4.md)

the current updated Color4 object

___

### asArray

▸ **asArray**(): `number`[]

Creates a new array populated with 4 numeric elements : red, green, blue, alpha values

#### Returns

`number`[]

the new array

___

### clampToRef

▸ **clampToRef**(`min`, `max`, `result`): [`Color4`](Color4.md)

Clamps the rgb values by the min and max values and stores the result into "result"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `undefined` \| `number` | defines minimum clamping value (default is 0) |
| `max` | `undefined` \| `number` | defines maximum clamping value (default is 1) |
| `result` | [`Color4`](Color4.md) | defines color to store the result into. |

#### Returns

[`Color4`](Color4.md)

the current Color4

___

### clone

▸ **clone**(): [`Color4`](Color4.md)

Creates a new Color4 copied from the current one

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### copyFrom

▸ **copyFrom**(`source`): [`Color4`](Color4.md)

Copies the given Color4 values into the current one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Color4`](Color4.md) | defines the source Color4 object |

#### Returns

[`Color4`](Color4.md)

the current updated Color4 object

___

### copyFromFloats

▸ **copyFromFloats**(`r`, `g`, `b`, `a`): [`Color4`](Color4.md)

Copies the given float values into the current one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | defines the red component to read from |
| `g` | `number` | defines the green component to read from |
| `b` | `number` | defines the blue component to read from |
| `a` | `number` | defines the alpha component to read from |

#### Returns

[`Color4`](Color4.md)

the current updated Color4 object

___

### equals

▸ **equals**(`otherColor`): `boolean`

Determines equality between Color4 objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherColor` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second operand |

#### Returns

`boolean`

true if the rgba values are equal to the given ones

___

### fromArray

▸ **fromArray**(`array`, `offset?`): [`Color4`](Color4.md)

Update the current color with values stored in an array from the starting index of the given array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the source array |
| `offset?` | `number` | defines an offset in the source array |

#### Returns

[`Color4`](Color4.md)

the current Color4 object

___

### getClassName

▸ **getClassName**(): `string`

Returns the string "Color4"

#### Returns

`string`

"Color4"

___

### getHashCode

▸ **getHashCode**(): `number`

Compute the Color4 hash code

#### Returns

`number`

an unique number that can be used to hash Color4 objects

___

### multiply

▸ **multiply**(`color`): [`Color4`](Color4.md)

Multiply an Color4 value by another and return a new Color4 object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color4`](Color4.md) | defines the Color4 value to multiply by |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### multiplyToRef

▸ **multiplyToRef**(`color`, `result`): [`Color4`](Color4.md)

Multiply a Color4 value by another and push the result in a reference value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color4`](Color4.md) | defines the Color4 value to multiply by |
| `result` | [`Color4`](Color4.md) | defines the Color4 to fill the result in |

#### Returns

[`Color4`](Color4.md)

the result Color4

___

### scale

▸ **scale**(`scale`): [`Color4`](Color4.md)

Creates a new Color4 with the current Color4 values multiplied by scale

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scaling factor to apply |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### scaleAndAddToRef

▸ **scaleAndAddToRef**(`scale`, `result`): [`Color4`](Color4.md)

Scale the current Color4 values by a factor and add the result to a given Color4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | [`Color4`](Color4.md) | defines the Color4 object where to store the result |

#### Returns

[`Color4`](Color4.md)

the unmodified current Color4

___

### scaleInPlace

▸ **scaleInPlace**(`scale`): [`Color4`](Color4.md)

Multiplies the Color4 values by the float "scale"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scaling factor to apply |

#### Returns

[`Color4`](Color4.md)

the current updated Color4

___

### scaleToRef

▸ **scaleToRef**(`scale`, `result`): [`Color4`](Color4.md)

Multiplies the current Color4 values by scale and stores the result in "result"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scaling factor to apply |
| `result` | [`Color4`](Color4.md) | defines the Color4 object where to store the result |

#### Returns

[`Color4`](Color4.md)

the current unmodified Color4

___

### set

▸ **set**(`r`, `g`, `b`, `a`): [`Color4`](Color4.md)

Copies the given float values into the current one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | defines the red component to read from |
| `g` | `number` | defines the green component to read from |
| `b` | `number` | defines the blue component to read from |
| `a` | `number` | defines the alpha component to read from |

#### Returns

[`Color4`](Color4.md)

the current updated Color4 object

___

### subtract

▸ **subtract**(`right`): [`Color4`](Color4.md)

Creates a new Color4 set with the subtracted values of the given one from the current Color4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second operand |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### subtractToRef

▸ **subtractToRef**(`right`, `result`): [`Color4`](Color4.md)

Subtracts the given ones from the current Color4 values and stores the results in "result"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `right` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second operand |
| `result` | [`Color4`](Color4.md) | defines the Color4 object where to store the result |

#### Returns

[`Color4`](Color4.md)

the current Color4 object

___

### toArray

▸ **toArray**(`array`, `index?`): [`Color4`](Color4.md)

Stores from the starting index in the given array the Color4 successive values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `FloatArray` | defines the array where to store the r,g,b components |
| `index?` | `number` | defines an optional index in the target array to define where to start storing values |

#### Returns

[`Color4`](Color4.md)

the current Color4 object

___

### toGammaSpace

▸ **toGammaSpace**(`exact?`): [`Color4`](Color4.md)

Computes a new Color4 converted from the current one to gamma space

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exact?` | `boolean` | defines if the conversion will be done in an exact way which is slower but more accurate (default is false) |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### toGammaSpaceToRef

▸ **toGammaSpaceToRef**(`convertedColor`, `exact?`): [`Color4`](Color4.md)

Converts the Color4 values to gamma space and stores the result in "convertedColor"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `convertedColor` | [`Color4`](Color4.md) | defines the Color4 object where to store the gamma space version |
| `exact?` | `boolean` | defines if the conversion will be done in an exact way which is slower but more accurate (default is false) |

#### Returns

[`Color4`](Color4.md)

the unmodified Color4

___

### toHexString

▸ **toHexString**(`returnAsColor3?`): `string`

Compute the Color4 hexadecimal code as a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnAsColor3?` | `boolean` | defines if the string should only contains RGB values (off by default) |

#### Returns

`string`

a string containing the hexadecimal representation of the Color4 object

___

### toLinearSpace

▸ **toLinearSpace**(`exact?`): [`Color4`](Color4.md)

Computes a new Color4 converted from the current one to linear space

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exact?` | `boolean` | defines if the conversion will be done in an exact way which is slower but more accurate (default is false) |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### toLinearSpaceToRef

▸ **toLinearSpaceToRef**(`convertedColor`, `exact?`): [`Color4`](Color4.md)

Converts the Color4 values to linear space and stores the result in "convertedColor"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `convertedColor` | [`Color4`](Color4.md) | defines the Color4 object where to store the linear space version |
| `exact?` | `boolean` | defines if the conversion will be done in an exact way which is slower but more accurate (default is false) |

#### Returns

[`Color4`](Color4.md)

the unmodified Color4

___

### toString

▸ **toString**(): `string`

Creates a string with the Color4 current values

#### Returns

`string`

the string representation of the Color4 object

___

### CheckColors4

▸ **CheckColors4**(`colors`, `count`): `number`[]

Check the content of a given array and convert it to an array containing RGBA data
If the original array was already containing count * 4 values then it is returned directly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `number`[] | defines the array to check |
| `count` | `number` | defines the number of RGBA data to expect |

#### Returns

`number`[]

an array containing count * 4 values (RGBA)

___

### FromArray

▸ **FromArray**(`array`, `offset?`): [`Color4`](Color4.md)

Creates a new Color4 from the starting index element of the given array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the source array to read from |
| `offset?` | `number` | defines the offset in the source array |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### FromArrayToRef

▸ **FromArrayToRef**(`array`, `offset`, `result`): `void`

Creates a new Color4 from the starting index element of the given array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the source array to read from |
| `offset` | `undefined` \| `number` | defines the offset in the source array |
| `result` | [`Color4`](Color4.md) | defines the target Color4 object |

#### Returns

`void`

___

### FromColor3

▸ **FromColor3**(`color3`, `alpha?`): [`Color4`](Color4.md)

Creates a new Color4 from a Color3 and an alpha value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color3` | `DeepImmutableObject`\<[`Color3`](Color3.md)\> | defines the source Color3 to read from |
| `alpha?` | `number` | defines the alpha component (1.0 by default) |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### FromHexString

▸ **FromHexString**(`hex`): [`Color4`](Color4.md)

Creates a new Color4 from the string containing valid hexadecimal values.

A valid hex string is either in the format #RRGGBB or #RRGGBBAA.

When a hex string without alpha is passed, the resulting Color4 has
its alpha value set to 1.0.

An invalid string results in a Color with all its channels set to 0.0,
i.e. "transparent black".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | defines a string containing valid hexadecimal values |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### FromInts

▸ **FromInts**(`r`, `g`, `b`, `a`): [`Color4`](Color4.md)

Creates a new Color3 from integer values (< 256)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | defines the red component to read from (value between 0 and 255) |
| `g` | `number` | defines the green component to read from (value between 0 and 255) |
| `b` | `number` | defines the blue component to read from (value between 0 and 255) |
| `a` | `number` | defines the alpha component to read from (value between 0 and 255) |

#### Returns

[`Color4`](Color4.md)

a new Color3 object

___

### Hermite

▸ **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): [`Color4`](Color4.md)

Interpolate between two Color4 using Hermite interpolation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines first Color4 |
| `tangent1` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the incoming tangent |
| `value2` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines second Color4 |
| `tangent2` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the outgoing tangent |
| `amount` | `number` | defines the target Color4 |

#### Returns

[`Color4`](Color4.md)

the new interpolated Color4

___

### Hermite1stDerivative

▸ **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): [`Color4`](Color4.md)

Returns a new Color4 which is the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |

#### Returns

[`Color4`](Color4.md)

1st derivative

___

### Hermite1stDerivativeToRef

▸ **Hermite1stDerivativeToRef**(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `void`

Update a Color4 with the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the first control point |
| `tangent1` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the first tangent |
| `value2` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second control point |
| `tangent2` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the second tangent |
| `time` | `number` | define where the derivative must be done |
| `result` | [`Color4`](Color4.md) | define where to store the derivative |

#### Returns

`void`

___

### Lerp

▸ **Lerp**(`left`, `right`, `amount`): [`Color4`](Color4.md)

Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the start value |
| `right` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the end value |
| `amount` | `number` | defines the gradient factor |

#### Returns

[`Color4`](Color4.md)

a new Color4 object

___

### LerpToRef

▸ **LerpToRef**(`left`, `right`, `amount`, `result`): `void`

Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the start value |
| `right` | `DeepImmutableObject`\<[`Color4`](Color4.md)\> | defines the end value |
| `amount` | `number` | defines the gradient factor |
| `result` | [`Color4`](Color4.md) | defines the Color4 object where to store data |

#### Returns

`void`
