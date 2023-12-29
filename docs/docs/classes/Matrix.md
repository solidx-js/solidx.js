# Class: Matrix

Class used to store matrix data (4x4)
Note on matrix definitions in Babylon.js for setting values directly
rather than using one of the methods available.
Matrix size is given by rows x columns.
A Vector3 is a 1 X 3 matrix [x, y, z].

In Babylon.js multiplying a 1 x 3 matrix by a 4 x 4 matrix
is done using BABYLON.Vector4.TransformCoordinates(Vector3, Matrix).
and extending the passed Vector3 to a Vector4, V = [x, y, z, 1].
Let M be a matrix with elements m(row, column), so that
m(2, 3) is the element in row 2 column 3 of M.

Multiplication is of the form VM and has the resulting Vector4
VM = [xm(0, 0) + ym(1, 0) + zm(2, 0) + m(3, 0), xm(0, 1) + ym(1, 1) + zm(2, 1) + m(3, 1), xm(0, 2) + ym(1, 2) + zm(2, 2) + m(3, 2), xm(0, 3) + ym(1, 3) + zm(2, 3) + m(3, 3)].
On the web you will find many examples that use the opposite convention of MV,
in which case to make use of the examples you will need to transpose the matrix.

Example Playground - Overview Linear Algebra - https://playground.babylonjs.com/#AV9X17
Example Playground - Overview Transformation - https://playground.babylonjs.com/#AV9X17#1
Example Playground - Overview Projection - https://playground.babylonjs.com/#AV9X17#2

## Table of contents

### Constructors

- [constructor](Matrix.md#constructor)

### Properties

- [updateFlag](Matrix.md#updateflag)

### Accessors

- [m](Matrix.md#m)
- [IdentityReadOnly](Matrix.md#identityreadonly)
- [Use64Bits](Matrix.md#use64bits)

### Methods

- [add](Matrix.md#add)
- [addAtIndex](Matrix.md#addatindex)
- [addToRef](Matrix.md#addtoref)
- [addToSelf](Matrix.md#addtoself)
- [addTranslationFromFloats](Matrix.md#addtranslationfromfloats)
- [asArray](Matrix.md#asarray)
- [clone](Matrix.md#clone)
- [copyFrom](Matrix.md#copyfrom)
- [copyToArray](Matrix.md#copytoarray)
- [decompose](Matrix.md#decompose)
- [decomposeToTransformNode](Matrix.md#decomposetotransformnode)
- [determinant](Matrix.md#determinant)
- [equals](Matrix.md#equals)
- [getClassName](Matrix.md#getclassname)
- [getHashCode](Matrix.md#gethashcode)
- [getRotationMatrix](Matrix.md#getrotationmatrix)
- [getRotationMatrixToRef](Matrix.md#getrotationmatrixtoref)
- [getRow](Matrix.md#getrow)
- [getRowToRef](Matrix.md#getrowtoref)
- [getTranslation](Matrix.md#gettranslation)
- [getTranslationToRef](Matrix.md#gettranslationtoref)
- [invert](Matrix.md#invert)
- [invertToRef](Matrix.md#inverttoref)
- [isIdentity](Matrix.md#isidentity)
- [isIdentityAs3x2](Matrix.md#isidentityas3x2)
- [markAsUpdated](Matrix.md#markasupdated)
- [multiply](Matrix.md#multiply)
- [multiplyAtIndex](Matrix.md#multiplyatindex)
- [multiplyToArray](Matrix.md#multiplytoarray)
- [multiplyToRef](Matrix.md#multiplytoref)
- [removeRotationAndScaling](Matrix.md#removerotationandscaling)
- [reset](Matrix.md#reset)
- [scale](Matrix.md#scale)
- [scaleAndAddToRef](Matrix.md#scaleandaddtoref)
- [scaleToRef](Matrix.md#scaletoref)
- [setRow](Matrix.md#setrow)
- [setRowFromFloats](Matrix.md#setrowfromfloats)
- [setTranslation](Matrix.md#settranslation)
- [setTranslationFromFloats](Matrix.md#settranslationfromfloats)
- [toArray](Matrix.md#toarray)
- [toNormalMatrix](Matrix.md#tonormalmatrix)
- [toString](Matrix.md#tostring)
- [toggleModelMatrixHandInPlace](Matrix.md#togglemodelmatrixhandinplace)
- [toggleProjectionMatrixHandInPlace](Matrix.md#toggleprojectionmatrixhandinplace)
- [transpose](Matrix.md#transpose)
- [transposeToRef](Matrix.md#transposetoref)
- [Compose](Matrix.md#compose)
- [ComposeToRef](Matrix.md#composetoref)
- [DecomposeLerp](Matrix.md#decomposelerp)
- [DecomposeLerpToRef](Matrix.md#decomposelerptoref)
- [FromArray](Matrix.md#fromarray)
- [FromArrayToRef](Matrix.md#fromarraytoref)
- [FromFloat32ArrayToRefScaled](Matrix.md#fromfloat32arraytorefscaled)
- [FromQuaternionToRef](Matrix.md#fromquaterniontoref)
- [FromValues](Matrix.md#fromvalues)
- [FromValuesToRef](Matrix.md#fromvaluestoref)
- [FromXYZAxesToRef](Matrix.md#fromxyzaxestoref)
- [GetAsMatrix2x2](Matrix.md#getasmatrix2x2)
- [GetAsMatrix3x3](Matrix.md#getasmatrix3x3)
- [GetFinalMatrix](Matrix.md#getfinalmatrix)
- [Identity](Matrix.md#identity)
- [IdentityToRef](Matrix.md#identitytoref)
- [Invert](Matrix.md#invert-1)
- [Lerp](Matrix.md#lerp)
- [LerpToRef](Matrix.md#lerptoref)
- [LookAtLH](Matrix.md#lookatlh)
- [LookAtLHToRef](Matrix.md#lookatlhtoref)
- [LookAtRH](Matrix.md#lookatrh)
- [LookAtRHToRef](Matrix.md#lookatrhtoref)
- [LookDirectionLH](Matrix.md#lookdirectionlh)
- [LookDirectionLHToRef](Matrix.md#lookdirectionlhtoref)
- [LookDirectionRH](Matrix.md#lookdirectionrh)
- [LookDirectionRHToRef](Matrix.md#lookdirectionrhtoref)
- [ObliqueOffCenterLHToRef](Matrix.md#obliqueoffcenterlhtoref)
- [ObliqueOffCenterRHToRef](Matrix.md#obliqueoffcenterrhtoref)
- [OrthoLH](Matrix.md#ortholh)
- [OrthoLHToRef](Matrix.md#ortholhtoref)
- [OrthoOffCenterLH](Matrix.md#orthooffcenterlh)
- [OrthoOffCenterLHToRef](Matrix.md#orthooffcenterlhtoref)
- [OrthoOffCenterRH](Matrix.md#orthooffcenterrh)
- [OrthoOffCenterRHToRef](Matrix.md#orthooffcenterrhtoref)
- [PerspectiveFovLH](Matrix.md#perspectivefovlh)
- [PerspectiveFovLHToRef](Matrix.md#perspectivefovlhtoref)
- [PerspectiveFovRH](Matrix.md#perspectivefovrh)
- [PerspectiveFovRHToRef](Matrix.md#perspectivefovrhtoref)
- [PerspectiveFovReverseLHToRef](Matrix.md#perspectivefovreverselhtoref)
- [PerspectiveFovReverseRHToRef](Matrix.md#perspectivefovreverserhtoref)
- [PerspectiveLH](Matrix.md#perspectivelh)
- [Reflection](Matrix.md#reflection)
- [ReflectionToRef](Matrix.md#reflectiontoref)
- [RotationAlignToRef](Matrix.md#rotationaligntoref)
- [RotationAxis](Matrix.md#rotationaxis)
- [RotationAxisToRef](Matrix.md#rotationaxistoref)
- [RotationX](Matrix.md#rotationx)
- [RotationXToRef](Matrix.md#rotationxtoref)
- [RotationY](Matrix.md#rotationy)
- [RotationYToRef](Matrix.md#rotationytoref)
- [RotationYawPitchRoll](Matrix.md#rotationyawpitchroll)
- [RotationYawPitchRollToRef](Matrix.md#rotationyawpitchrolltoref)
- [RotationZ](Matrix.md#rotationz)
- [RotationZToRef](Matrix.md#rotationztoref)
- [Scaling](Matrix.md#scaling)
- [ScalingToRef](Matrix.md#scalingtoref)
- [Translation](Matrix.md#translation)
- [TranslationToRef](Matrix.md#translationtoref)
- [Transpose](Matrix.md#transpose-1)
- [TransposeToRef](Matrix.md#transposetoref-1)
- [Zero](Matrix.md#zero)

## Constructors

### constructor

• **new Matrix**(): [`Matrix`](Matrix.md)

Creates an empty matrix (filled with zeros)

#### Returns

[`Matrix`](Matrix.md)

## Properties

### updateFlag

• **updateFlag**: `number`

Gets the update flag of the matrix which is an unique number for the matrix.
It will be incremented every time the matrix data change.
You can use it to speed the comparison between two versions of the same matrix.

## Accessors

### m

• `get` **m**(): `DeepImmutable`\<`number`[] \| `Float32Array`\>

Gets the internal data of the matrix

#### Returns

`DeepImmutable`\<`number`[] \| `Float32Array`\>

___

### IdentityReadOnly

• `get` **IdentityReadOnly**(): `DeepImmutableObject`\<[`Matrix`](Matrix.md)\>

Gets an identity matrix that must not be updated

#### Returns

`DeepImmutableObject`\<[`Matrix`](Matrix.md)\>

___

### Use64Bits

• `get` **Use64Bits**(): `boolean`

Gets the precision of matrix computations

#### Returns

`boolean`

## Methods

### add

▸ **add**(`other`): [`Matrix`](Matrix.md)

Adds the current matrix with a second one
Example Playground - https://playground.babylonjs.com/#AV9X17#44

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the matrix to add |

#### Returns

[`Matrix`](Matrix.md)

a new matrix as the addition of the current matrix and the given one

___

### addAtIndex

▸ **addAtIndex**(`index`, `value`): [`Matrix`](Matrix.md)

add a value at the specified position in the current Matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#47

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | the index of the value within the matrix. between 0 and 15. |
| `value` | `number` | the value to be added |

#### Returns

[`Matrix`](Matrix.md)

the current updated matrix

___

### addToRef

▸ **addToRef**\<`T`\>(`other`, `result`): `T`

Sets the given matrix "result" to the addition of the current matrix and the given one
Example Playground - https://playground.babylonjs.com/#AV9X17#45

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the matrix to add |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### addToSelf

▸ **addToSelf**(`other`): [`Matrix`](Matrix.md)

Adds in place the given matrix to the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#46

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the second operand |

#### Returns

[`Matrix`](Matrix.md)

the current updated matrix

___

### addTranslationFromFloats

▸ **addTranslationFromFloats**(`x`, `y`, `z`): [`Matrix`](Matrix.md)

Adds the translation vector (using 3 floats) in the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#20
Example Playground - https://playground.babylonjs.com/#AV9X17#48

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the 1st component of the translation |
| `y` | `number` | defines the 2nd component of the translation |
| `z` | `number` | defines the 3rd component of the translation |

#### Returns

[`Matrix`](Matrix.md)

the current updated matrix

___

### asArray

▸ **asArray**(): `DeepImmutable`\<`number`[] \| `Float32Array`\>

Returns the matrix as a Float32Array or `Array<number>`
Example Playground - https://playground.babylonjs.com/#AV9X17#114

#### Returns

`DeepImmutable`\<`number`[] \| `Float32Array`\>

the matrix underlying array.

___

### clone

▸ **clone**(): [`Matrix`](Matrix.md)

Clone the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#18

#### Returns

[`Matrix`](Matrix.md)

a new matrix from the current matrix

___

### copyFrom

▸ **copyFrom**(`other`): [`Matrix`](Matrix.md)

Copy the current matrix from the given one
Example Playground - https://playground.babylonjs.com/#AV9X17#21

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the source matrix |

#### Returns

[`Matrix`](Matrix.md)

the current updated matrix

___

### copyToArray

▸ **copyToArray**(`array`, `offset?`): [`Matrix`](Matrix.md)

Populates the given array from the starting index with the current matrix values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] \| `Float32Array` | defines the target array |
| `offset?` | `number` | defines the offset in the target array where to start storing values |

#### Returns

[`Matrix`](Matrix.md)

the current matrix

___

### decompose

▸ **decompose**(`scale?`, `rotation?`, `translation?`, `preserveScalingNode?`, `useAbsoluteScaling?`): `boolean`

Decomposes the current Matrix into a translation, rotation and scaling components
Example Playground - https://playground.babylonjs.com/#AV9X17#12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale?` | [`Vector3`](Vector3.md) | defines the scale vector3 given as a reference to update |
| `rotation?` | [`Quaternion`](Quaternion.md) | defines the rotation quaternion given as a reference to update |
| `translation?` | [`Vector3`](Vector3.md) | defines the translation vector3 given as a reference to update |
| `preserveScalingNode?` | `TransformNode` | Use scaling sign coming from this node. Otherwise scaling sign might change. |
| `useAbsoluteScaling?` | `boolean` | Use scaling sign coming from this absoluteScaling when true or scaling otherwise. |

#### Returns

`boolean`

true if operation was successful

___

### decomposeToTransformNode

▸ **decomposeToTransformNode**(`node`): `boolean`

Decomposes the current Matrix into a translation, rotation and scaling components of the provided node
Example Playground - https://playground.babylonjs.com/#AV9X17#13

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `TransformNode` | the node to decompose the matrix to |

#### Returns

`boolean`

true if operation was successful

___

### determinant

▸ **determinant**(): `number`

Gets the determinant of the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#34

#### Returns

`number`

the matrix determinant

___

### equals

▸ **equals**(`value`): `boolean`

Check equality between this matrix and a second one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the second matrix to compare |

#### Returns

`boolean`

true is the current matrix and the given one values are strictly equal

___

### getClassName

▸ **getClassName**(): `string`

Returns the name of the current matrix class

#### Returns

`string`

the string "Matrix"

___

### getHashCode

▸ **getHashCode**(): `number`

Gets the hash code of the current matrix

#### Returns

`number`

the hash code

___

### getRotationMatrix

▸ **getRotationMatrix**(): [`Matrix`](Matrix.md)

Gets only rotation part of the current matrix

#### Returns

[`Matrix`](Matrix.md)

a new matrix sets to the extracted rotation matrix from the current one

___

### getRotationMatrixToRef

▸ **getRotationMatrixToRef**\<`T`\>(`result`): `T`

Extracts the rotation matrix from the current one and sets it as the given "result"

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | defines the target matrix to store data to |

#### Returns

`T`

result input

___

### getRow

▸ **getRow**(`index`): `Nullable`\<[`Vector4`](Vector4.md)\>

Gets specific row of the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | defines the number of the row to get |

#### Returns

`Nullable`\<[`Vector4`](Vector4.md)\>

the index-th row of the current matrix as a new Vector4

___

### getRowToRef

▸ **getRowToRef**\<`T`\>(`index`, `rowVector`): `T`

Gets specific row of the matrix to ref
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector4`](Vector4.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | defines the number of the row to get |
| `rowVector` | `T` | vector to store the index-th row of the current matrix |

#### Returns

`T`

result input

___

### getTranslation

▸ **getTranslation**(): [`Vector3`](Vector3.md)

Gets the translation value of the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#122

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 as the extracted translation from the matrix

___

### getTranslationToRef

▸ **getTranslationToRef**\<`T`\>(`result`): `T`

Fill a Vector3 with the extracted translation from the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#123

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Vector3`](Vector3.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | defines the Vector3 where to store the translation |

#### Returns

`T`

the current matrix

___

### invert

▸ **invert**(): [`Matrix`](Matrix.md)

Inverts the current matrix in place
Example Playground - https://playground.babylonjs.com/#AV9X17#118

#### Returns

[`Matrix`](Matrix.md)

the current inverted matrix

___

### invertToRef

▸ **invertToRef**\<`T`\>(`other`): `T`

Sets the given matrix to the current inverted Matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#119

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### isIdentity

▸ **isIdentity**(): `boolean`

Check if the current matrix is identity

#### Returns

`boolean`

true is the matrix is the identity matrix

___

### isIdentityAs3x2

▸ **isIdentityAs3x2**(): `boolean`

Check if the current matrix is identity as a texture matrix (3x2 store in 4x4)

#### Returns

`boolean`

true is the matrix is the identity matrix

___

### markAsUpdated

▸ **markAsUpdated**(): `void`

Update the updateFlag to indicate that the matrix has been updated

#### Returns

`void`

___

### multiply

▸ **multiply**(`other`): [`Matrix`](Matrix.md)

Multiply two matrices
Example Playground - https://playground.babylonjs.com/#AV9X17#15
A.multiply(B) means apply B to A so result is B x A

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the second operand |

#### Returns

[`Matrix`](Matrix.md)

a new matrix set with the multiplication result of the current Matrix and the given one

___

### multiplyAtIndex

▸ **multiplyAtIndex**(`index`, `value`): [`Matrix`](Matrix.md)

mutiply the specified position in the current Matrix by a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | the index of the value within the matrix. between 0 and 15. |
| `value` | `number` | the value to be added |

#### Returns

[`Matrix`](Matrix.md)

the current updated matrix

___

### multiplyToArray

▸ **multiplyToArray**(`other`, `result`, `offset`): [`Matrix`](Matrix.md)

Sets the Float32Array "result" from the given index "offset" with the multiplication of the current matrix and the given one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the second operand |
| `result` | `number`[] \| `Float32Array` | defines the array where to store the multiplication |
| `offset` | `number` | defines the offset in the target array where to start storing values |

#### Returns

[`Matrix`](Matrix.md)

the current matrix

___

### multiplyToRef

▸ **multiplyToRef**\<`T`\>(`other`, `result`): `T`

Sets the given matrix "result" with the multiplication result of the current Matrix and the given one
A.multiplyToRef(B, R) means apply B to A and store in R and R = B x A
Example Playground - https://playground.babylonjs.com/#AV9X17#16

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the second operand |
| `result` | `T` | defines the matrix where to store the multiplication |

#### Returns

`T`

result input

___

### removeRotationAndScaling

▸ **removeRotationAndScaling**(): [`Matrix`](Matrix.md)

Remove rotation and scaling part from the matrix

#### Returns

[`Matrix`](Matrix.md)

the updated matrix

___

### reset

▸ **reset**(): [`Matrix`](Matrix.md)

Sets all the matrix elements to zero

#### Returns

[`Matrix`](Matrix.md)

the current matrix

___

### scale

▸ **scale**(`scale`): [`Matrix`](Matrix.md)

Compute a new matrix set with the current matrix values multiplied by scale (float)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |

#### Returns

[`Matrix`](Matrix.md)

a new matrix

___

### scaleAndAddToRef

▸ **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current matrix values by a factor and add the result to a given matrix

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the Matrix to store the result |

#### Returns

`T`

result input

___

### scaleToRef

▸ **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Scale the current matrix values by a factor to a given result matrix

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | defines the scale factor |
| `result` | `T` | defines the matrix to store the result |

#### Returns

`T`

result input

___

### setRow

▸ **setRow**(`index`, `row`): [`Matrix`](Matrix.md)

Sets the index-th row of the current matrix to the vector4 values
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | defines the number of the row to set |
| `row` | [`Vector4`](Vector4.md) | defines the target vector4 |

#### Returns

[`Matrix`](Matrix.md)

the updated current matrix

___

### setRowFromFloats

▸ **setRowFromFloats**(`index`, `x`, `y`, `z`, `w`): [`Matrix`](Matrix.md)

Sets the index-th row of the current matrix with the given 4 x float values
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | defines the row index |
| `x` | `number` | defines the x component to set |
| `y` | `number` | defines the y component to set |
| `z` | `number` | defines the z component to set |
| `w` | `number` | defines the w component to set |

#### Returns

[`Matrix`](Matrix.md)

the updated current matrix

___

### setTranslation

▸ **setTranslation**(`vector3`): [`Matrix`](Matrix.md)

Inserts the translation vector in the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#121

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector3` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the translation to insert |

#### Returns

[`Matrix`](Matrix.md)

the current updated matrix

___

### setTranslationFromFloats

▸ **setTranslationFromFloats**(`x`, `y`, `z`): [`Matrix`](Matrix.md)

Inserts the translation vector (using 3 floats) in the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#120

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the 1st component of the translation |
| `y` | `number` | defines the 2nd component of the translation |
| `z` | `number` | defines the 3rd component of the translation |

#### Returns

[`Matrix`](Matrix.md)

the current updated matrix

___

### toArray

▸ **toArray**(): `DeepImmutable`\<`number`[] \| `Float32Array`\>

Returns the matrix as a Float32Array or `Array<number>`
Example Playground - https://playground.babylonjs.com/#AV9X17#49

#### Returns

`DeepImmutable`\<`number`[] \| `Float32Array`\>

the matrix underlying array

___

### toNormalMatrix

▸ **toNormalMatrix**\<`T`\>(`ref`): `T`

Writes to the given matrix a normal matrix, computed from this one (using values from identity matrix for fourth row and column).
Example Playground - https://playground.babylonjs.com/#AV9X17#17

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `T` | matrix to store the result |

#### Returns

`T`

___

### toString

▸ **toString**(): `string`

Gets a string with the Matrix values

#### Returns

`string`

a string with the Matrix values

___

### toggleModelMatrixHandInPlace

▸ **toggleModelMatrixHandInPlace**(): [`Matrix`](Matrix.md)

Toggles model matrix from being right handed to left handed in place and vice versa

#### Returns

[`Matrix`](Matrix.md)

___

### toggleProjectionMatrixHandInPlace

▸ **toggleProjectionMatrixHandInPlace**(): [`Matrix`](Matrix.md)

Toggles projection matrix from being right handed to left handed in place and vice versa

#### Returns

[`Matrix`](Matrix.md)

___

### transpose

▸ **transpose**(): [`Matrix`](Matrix.md)

Compute the transpose of the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#40

#### Returns

[`Matrix`](Matrix.md)

the new transposed matrix

___

### transposeToRef

▸ **transposeToRef**\<`T`\>(`result`): `T`

Compute the transpose of the matrix and store it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#41

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

result input

___

### Compose

▸ **Compose**(`scale`, `rotation`, `translation`): [`Matrix`](Matrix.md)

Creates a new matrix composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
Example Playground - https://playground.babylonjs.com/#AV9X17#24

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the scale vector3 |
| `rotation` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the rotation quaternion |
| `translation` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the translation vector3 |

#### Returns

[`Matrix`](Matrix.md)

a new matrix

___

### ComposeToRef

▸ **ComposeToRef**\<`T`\>(`scale`, `rotation`, `translation`, `result`): `T`

Sets a matrix to a value composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
Example Playground - https://playground.babylonjs.com/#AV9X17#25

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the scale vector3 |
| `rotation` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the rotation quaternion |
| `translation` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the translation vector3 |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### DecomposeLerp

▸ **DecomposeLerp**\<`T`\>(`startValue`, `endValue`, `gradient`): `T`

Builds a new matrix whose values are computed by:
* decomposing the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
* interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
* recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
Example Playground - https://playground.babylonjs.com/#AV9X17#22
Example Playground - https://playground.babylonjs.com/#AV9X17#51

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startValue` | `DeepImmutable`\<`T`\> | defines the first matrix |
| `endValue` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the second matrix |
| `gradient` | `number` | defines the gradient between the two matrices |

#### Returns

`T`

the new matrix

___

### DecomposeLerpToRef

▸ **DecomposeLerpToRef**\<`T`\>(`startValue`, `endValue`, `gradient`, `result`): `T`

Update a matrix to values which are computed by:
* decomposing the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
* interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
* recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
Example Playground - https://playground.babylonjs.com/#AV9X17#23
Example Playground - https://playground.babylonjs.com/#AV9X17#53

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startValue` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the first matrix |
| `endValue` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the second matrix |
| `gradient` | `number` | defines the gradient between the two matrices |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### FromArray

▸ **FromArray**(`array`, `offset?`): [`Matrix`](Matrix.md)

Creates a matrix from an array
Example Playground - https://playground.babylonjs.com/#AV9X17#42

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the source array |
| `offset?` | `number` | defines an offset in the source array |

#### Returns

[`Matrix`](Matrix.md)

a new Matrix set from the starting index of the given array

___

### FromArrayToRef

▸ **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Copy the content of an array into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#43

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutableObject`\<`ArrayLike`\<`number`\>\> | defines the source array |
| `offset` | `number` | defines an offset in the source array |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### FromFloat32ArrayToRefScaled

▸ **FromFloat32ArrayToRefScaled**\<`T`\>(`array`, `offset`, `scale`, `result`): `T`

Stores an array into a matrix after having multiplied each component by a given factor
Example Playground - https://playground.babylonjs.com/#AV9X17#50

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `DeepImmutable`\<`number`[] \| `Float32Array`\> | defines the source array |
| `offset` | `number` | defines the offset in the source array |
| `scale` | `number` | defines the scaling factor |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### FromQuaternionToRef

▸ **FromQuaternionToRef**\<`T`\>(`quat`, `result`): `T`

Creates a rotation matrix from a quaternion and stores it in a target matrix

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `quat` | `DeepImmutableObject`\<[`Quaternion`](Quaternion.md)\> | defines the quaternion to use |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### FromValues

▸ **FromValues**(`initialM11`, `initialM12`, `initialM13`, `initialM14`, `initialM21`, `initialM22`, `initialM23`, `initialM24`, `initialM31`, `initialM32`, `initialM33`, `initialM34`, `initialM41`, `initialM42`, `initialM43`, `initialM44`): [`Matrix`](Matrix.md)

Creates new matrix from a list of values (16)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialM11` | `number` | defines 1st value of 1st row |
| `initialM12` | `number` | defines 2nd value of 1st row |
| `initialM13` | `number` | defines 3rd value of 1st row |
| `initialM14` | `number` | defines 4th value of 1st row |
| `initialM21` | `number` | defines 1st value of 2nd row |
| `initialM22` | `number` | defines 2nd value of 2nd row |
| `initialM23` | `number` | defines 3rd value of 2nd row |
| `initialM24` | `number` | defines 4th value of 2nd row |
| `initialM31` | `number` | defines 1st value of 3rd row |
| `initialM32` | `number` | defines 2nd value of 3rd row |
| `initialM33` | `number` | defines 3rd value of 3rd row |
| `initialM34` | `number` | defines 4th value of 3rd row |
| `initialM41` | `number` | defines 1st value of 4th row |
| `initialM42` | `number` | defines 2nd value of 4th row |
| `initialM43` | `number` | defines 3rd value of 4th row |
| `initialM44` | `number` | defines 4th value of 4th row |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### FromValuesToRef

▸ **FromValuesToRef**(`initialM11`, `initialM12`, `initialM13`, `initialM14`, `initialM21`, `initialM22`, `initialM23`, `initialM24`, `initialM31`, `initialM32`, `initialM33`, `initialM34`, `initialM41`, `initialM42`, `initialM43`, `initialM44`, `result`): `void`

Stores a list of values (16) inside a given matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialM11` | `number` | defines 1st value of 1st row |
| `initialM12` | `number` | defines 2nd value of 1st row |
| `initialM13` | `number` | defines 3rd value of 1st row |
| `initialM14` | `number` | defines 4th value of 1st row |
| `initialM21` | `number` | defines 1st value of 2nd row |
| `initialM22` | `number` | defines 2nd value of 2nd row |
| `initialM23` | `number` | defines 3rd value of 2nd row |
| `initialM24` | `number` | defines 4th value of 2nd row |
| `initialM31` | `number` | defines 1st value of 3rd row |
| `initialM32` | `number` | defines 2nd value of 3rd row |
| `initialM33` | `number` | defines 3rd value of 3rd row |
| `initialM34` | `number` | defines 4th value of 3rd row |
| `initialM41` | `number` | defines 1st value of 4th row |
| `initialM42` | `number` | defines 2nd value of 4th row |
| `initialM43` | `number` | defines 3rd value of 4th row |
| `initialM44` | `number` | defines 4th value of 4th row |
| `result` | [`Matrix`](Matrix.md) | defines the target matrix |

#### Returns

`void`

result input

___

### FromXYZAxesToRef

▸ **FromXYZAxesToRef**\<`T`\>(`xaxis`, `yaxis`, `zaxis`, `result`): `T`

Sets the given matrix as a rotation matrix composed from the 3 left handed axes

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xaxis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the value of the 1st axis |
| `yaxis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the value of the 2nd axis |
| `zaxis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the value of the 3rd axis |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### GetAsMatrix2x2

▸ **GetAsMatrix2x2**(`matrix`): `number`[] \| `Float32Array`

Extracts a 2x2 matrix from a given matrix and store the result in a Float32Array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the matrix to use |

#### Returns

`number`[] \| `Float32Array`

a new Float32Array array with 4 elements : the 2x2 matrix extracted from the given matrix

___

### GetAsMatrix3x3

▸ **GetAsMatrix3x3**(`matrix`): `number`[] \| `Float32Array`

Extracts a 3x3 matrix from a given matrix and store the result in a Float32Array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the matrix to use |

#### Returns

`number`[] \| `Float32Array`

a new Float32Array array with 9 elements : the 3x3 matrix extracted from the given matrix

___

### GetFinalMatrix

▸ **GetFinalMatrix**\<`T`\>(`viewport`, `world`, `view`, `projection`, `zmin`, `zmax`): `T`

Computes a complete transformation matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#113

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewport` | `DeepImmutableObject`\<`Viewport`\> | defines the viewport to use |
| `world` | `DeepImmutable`\<`T`\> | defines the world matrix |
| `view` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the view matrix |
| `projection` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the projection matrix |
| `zmin` | `number` | defines the near clip plane |
| `zmax` | `number` | defines the far clip plane |

#### Returns

`T`

the transformation matrix

___

### Identity

▸ **Identity**(): [`Matrix`](Matrix.md)

Creates a new identity matrix

#### Returns

[`Matrix`](Matrix.md)

a new identity matrix

___

### IdentityToRef

▸ **IdentityToRef**\<`T`\>(`result`): `T`

Creates a new identity matrix and stores the result in a given matrix

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

result input

___

### Invert

▸ **Invert**\<`T`\>(`source`): `T`

Creates a new matrix as the invert of a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#124

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `DeepImmutable`\<`T`\> | defines the source matrix |

#### Returns

`T`

the new matrix

___

### Lerp

▸ **Lerp**\<`T`\>(`startValue`, `endValue`, `gradient`): `T`

Returns a new Matrix whose values are the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
Example Playground - https://playground.babylonjs.com/#AV9X17#55

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startValue` | `DeepImmutable`\<`T`\> | defines the start value |
| `endValue` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the end value |
| `gradient` | `number` | defines the gradient factor |

#### Returns

`T`

the new matrix

___

### LerpToRef

▸ **LerpToRef**\<`T`\>(`startValue`, `endValue`, `gradient`, `result`): `T`

Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
Example Playground - https://playground.babylonjs.com/#AV9X17#54

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startValue` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the start value |
| `endValue` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the end value |
| `gradient` | `number` | defines the gradient factor |
| `result` | `T` | defines the Matrix object where to store data |

#### Returns

`T`

result input

___

### LookAtLH

▸ **LookAtLH**(`eye`, `target`, `up`): [`Matrix`](Matrix.md)

Creates a new matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#58
Example Playground - https://playground.babylonjs.com/#AV9X17#59

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eye` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the final position of the entity |
| `target` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines where the entity should look at |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### LookAtLHToRef

▸ **LookAtLHToRef**(`eye`, `target`, `up`, `result`): [`Matrix`](Matrix.md)

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#60
Example Playground - https://playground.babylonjs.com/#AV9X17#61

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eye` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the final position of the entity |
| `target` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines where the entity should look at |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity |
| `result` | [`Matrix`](Matrix.md) | defines the target matrix |

#### Returns

[`Matrix`](Matrix.md)

result input

___

### LookAtRH

▸ **LookAtRH**(`eye`, `target`, `up`): [`Matrix`](Matrix.md)

Creates a new matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#62
Example Playground - https://playground.babylonjs.com/#AV9X17#63

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eye` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the final position of the entity |
| `target` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines where the entity should look at |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### LookAtRHToRef

▸ **LookAtRHToRef**\<`T`\>(`eye`, `target`, `up`, `result`): `T`

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#64
Example Playground - https://playground.babylonjs.com/#AV9X17#65

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eye` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the final position of the entity |
| `target` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines where the entity should look at |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### LookDirectionLH

▸ **LookDirectionLH**(`forward`, `up`): [`Matrix`](Matrix.md)

Creates a new matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#66

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### LookDirectionLHToRef

▸ **LookDirectionLHToRef**\<`T`\>(`forward`, `up`, `result`): `T`

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#67

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### LookDirectionRH

▸ **LookDirectionRH**(`forward`, `up`): [`Matrix`](Matrix.md)

Creates a new matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#68

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### LookDirectionRHToRef

▸ **LookDirectionRHToRef**\<`T`\>(`forward`, `up`, `result`): `T`

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#69

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the forward direction - Must be normalized and orthogonal to up. |
| `up` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the up vector for the entity - Must be normalized and orthogonal to forward. |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### ObliqueOffCenterLHToRef

▸ **ObliqueOffCenterLHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `length`, `angle`, `distance`, `result`, `halfZRange?`): `T`

Stores a left-handed oblique projection into a given matrix

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | defines the viewport left coordinate |
| `right` | `number` | defines the viewport right coordinate |
| `bottom` | `number` | defines the viewport bottom coordinate |
| `top` | `number` | defines the viewport top coordinate |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `length` | `number` | Length of the shear |
| `angle` | `number` | Angle (along X/Y Plane) to apply shear |
| `distance` | `number` | Distance from shear point |
| `result` | `T` | defines the target matrix |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

`T`

result input

___

### ObliqueOffCenterRHToRef

▸ **ObliqueOffCenterRHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `length`, `angle`, `distance`, `result`, `halfZRange?`): `T`

Stores a right-handed oblique projection into a given matrix

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | defines the viewport left coordinate |
| `right` | `number` | defines the viewport right coordinate |
| `bottom` | `number` | defines the viewport bottom coordinate |
| `top` | `number` | defines the viewport top coordinate |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `length` | `number` | Length of the shear |
| `angle` | `number` | Angle (along X/Y Plane) to apply shear |
| `distance` | `number` | Distance from shear point |
| `result` | `T` | defines the target matrix |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

`T`

result input

___

### OrthoLH

▸ **OrthoLH**(`width`, `height`, `znear`, `zfar`, `halfZRange?`): [`Matrix`](Matrix.md)

Create a left-handed orthographic projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#70

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | defines the viewport width |
| `height` | `number` | defines the viewport height |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

[`Matrix`](Matrix.md)

a new matrix as a left-handed orthographic projection matrix

___

### OrthoLHToRef

▸ **OrthoLHToRef**\<`T`\>(`width`, `height`, `znear`, `zfar`, `result`, `halfZRange?`): `T`

Store a left-handed orthographic projection to a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#71

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | defines the viewport width |
| `height` | `number` | defines the viewport height |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `result` | `T` | defines the target matrix |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

`T`

result input

___

### OrthoOffCenterLH

▸ **OrthoOffCenterLH**(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `halfZRange?`): [`Matrix`](Matrix.md)

Create a left-handed orthographic projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#72

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | defines the viewport left coordinate |
| `right` | `number` | defines the viewport right coordinate |
| `bottom` | `number` | defines the viewport bottom coordinate |
| `top` | `number` | defines the viewport top coordinate |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

[`Matrix`](Matrix.md)

a new matrix as a left-handed orthographic projection matrix

___

### OrthoOffCenterLHToRef

▸ **OrthoOffCenterLHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `result`, `halfZRange?`): `T`

Stores a left-handed orthographic projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#73

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | defines the viewport left coordinate |
| `right` | `number` | defines the viewport right coordinate |
| `bottom` | `number` | defines the viewport bottom coordinate |
| `top` | `number` | defines the viewport top coordinate |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `result` | `T` | defines the target matrix |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

`T`

result input

___

### OrthoOffCenterRH

▸ **OrthoOffCenterRH**(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `halfZRange?`): [`Matrix`](Matrix.md)

Creates a right-handed orthographic projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#76

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | defines the viewport left coordinate |
| `right` | `number` | defines the viewport right coordinate |
| `bottom` | `number` | defines the viewport bottom coordinate |
| `top` | `number` | defines the viewport top coordinate |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

[`Matrix`](Matrix.md)

a new matrix as a right-handed orthographic projection matrix

___

### OrthoOffCenterRHToRef

▸ **OrthoOffCenterRHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `result`, `halfZRange?`): `T`

Stores a right-handed orthographic projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#77

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | defines the viewport left coordinate |
| `right` | `number` | defines the viewport right coordinate |
| `bottom` | `number` | defines the viewport bottom coordinate |
| `top` | `number` | defines the viewport top coordinate |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `result` | `T` | defines the target matrix |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |

#### Returns

`T`

result input

___

### PerspectiveFovLH

▸ **PerspectiveFovLH**(`fov`, `aspect`, `znear`, `zfar`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): [`Matrix`](Matrix.md)

Creates a left-handed perspective projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#78

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | defines the horizontal field of view |
| `aspect` | `number` | defines the aspect ratio |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane. If 0, assume we are in "infinite zfar" mode |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |
| `projectionPlaneTilt?` | `number` | optional tilt angle of the projection plane around the X axis (horizontal) |
| `reverseDepthBufferMode?` | `boolean` | true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function) |

#### Returns

[`Matrix`](Matrix.md)

a new matrix as a left-handed perspective projection matrix

___

### PerspectiveFovLHToRef

▸ **PerspectiveFovLHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): `T`

Stores a left-handed perspective projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#81

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | defines the horizontal field of view |
| `aspect` | `number` | defines the aspect ratio |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane. If 0, assume we are in "infinite zfar" mode |
| `result` | `T` | defines the target matrix |
| `isVerticalFovFixed?` | `boolean` | defines it the fov is vertically fixed (default) or horizontally |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |
| `projectionPlaneTilt?` | `number` | optional tilt angle of the projection plane around the X axis (horizontal) |
| `reverseDepthBufferMode?` | `boolean` | true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function) |

#### Returns

`T`

result input

___

### PerspectiveFovRH

▸ **PerspectiveFovRH**(`fov`, `aspect`, `znear`, `zfar`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): [`Matrix`](Matrix.md)

Creates a right-handed perspective projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#83

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | defines the horizontal field of view |
| `aspect` | `number` | defines the aspect ratio |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane. If 0, assume we are in "infinite zfar" mode |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |
| `projectionPlaneTilt?` | `number` | optional tilt angle of the projection plane around the X axis (horizontal) |
| `reverseDepthBufferMode?` | `boolean` | true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function) |

#### Returns

[`Matrix`](Matrix.md)

a new matrix as a right-handed perspective projection matrix

___

### PerspectiveFovRHToRef

▸ **PerspectiveFovRHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): `T`

Stores a right-handed perspective projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#84

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | defines the horizontal field of view |
| `aspect` | `number` | defines the aspect ratio |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane. If 0, assume we are in "infinite zfar" mode |
| `result` | `T` | defines the target matrix |
| `isVerticalFovFixed?` | `boolean` | defines it the fov is vertically fixed (default) or horizontally |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |
| `projectionPlaneTilt?` | `number` | optional tilt angle of the projection plane around the X axis (horizontal) |
| `reverseDepthBufferMode?` | `boolean` | true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function) |

#### Returns

`T`

result input

___

### PerspectiveFovReverseLHToRef

▸ **PerspectiveFovReverseLHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`): `T`

Stores a left-handed perspective projection into a given matrix with depth reversed
Example Playground - https://playground.babylonjs.com/#AV9X17#89

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | defines the horizontal field of view |
| `aspect` | `number` | defines the aspect ratio |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | not used as infinity is used as far clip |
| `result` | `T` | defines the target matrix |
| `isVerticalFovFixed?` | `boolean` | defines it the fov is vertically fixed (default) or horizontally |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |
| `projectionPlaneTilt?` | `number` | optional tilt angle of the projection plane around the X axis (horizontal) |

#### Returns

`T`

result input

___

### PerspectiveFovReverseRHToRef

▸ **PerspectiveFovReverseRHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`): `T`

Stores a right-handed perspective projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#90

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | defines the horizontal field of view |
| `aspect` | `number` | defines the aspect ratio |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | not used as infinity is used as far clip |
| `result` | `T` | defines the target matrix |
| `isVerticalFovFixed?` | `boolean` | defines it the fov is vertically fixed (default) or horizontally |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |
| `projectionPlaneTilt?` | `number` | optional tilt angle of the projection plane around the X axis (horizontal) |

#### Returns

`T`

result input

___

### PerspectiveLH

▸ **PerspectiveLH**(`width`, `height`, `znear`, `zfar`, `halfZRange?`, `projectionPlaneTilt?`): [`Matrix`](Matrix.md)

Creates a left-handed perspective projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#85

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | defines the viewport width |
| `height` | `number` | defines the viewport height |
| `znear` | `number` | defines the near clip plane |
| `zfar` | `number` | defines the far clip plane |
| `halfZRange?` | `boolean` | true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false) |
| `projectionPlaneTilt?` | `number` | optional tilt angle of the projection plane around the X axis (horizontal) |

#### Returns

[`Matrix`](Matrix.md)

a new matrix as a left-handed perspective projection matrix

___

### Reflection

▸ **Reflection**(`plane`): [`Matrix`](Matrix.md)

Computes a reflection matrix from a plane
Example Playground - https://playground.babylonjs.com/#AV9X17#87

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane` | `DeepImmutableObject`\<`IPlaneLike`\> | defines the reflection plane |

#### Returns

[`Matrix`](Matrix.md)

a new matrix

___

### ReflectionToRef

▸ **ReflectionToRef**\<`T`\>(`plane`, `result`): `T`

Computes a reflection matrix from a plane
Example Playground - https://playground.babylonjs.com/#AV9X17#88

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane` | `DeepImmutableObject`\<`IPlaneLike`\> | defines the reflection plane |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### RotationAlignToRef

▸ **RotationAlignToRef**\<`T`\>(`from`, `to`, `result`, `useYAxisForCoplanar?`): `T`

Takes normalised vectors and returns a rotation matrix to align "from" with "to".
Taken from http://www.iquilezles.org/www/articles/noacos/noacos.htm
Example Playground - https://playground.babylonjs.com/#AV9X17#93

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the vector to align |
| `to` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the vector to align to |
| `result` | `T` | defines the target matrix |
| `useYAxisForCoplanar?` | `boolean` | defines a boolean indicating that we should favor Y axis for coplanar vectors (default is false) |

#### Returns

`T`

result input

___

### RotationAxis

▸ **RotationAxis**(`axis`, `angle`): [`Matrix`](Matrix.md)

Creates a new rotation matrix for "angle" radians around the given axis
Example Playground - https://playground.babylonjs.com/#AV9X17#96

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the axis to use |
| `angle` | `number` | defines the angle (in radians) to use |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### RotationAxisToRef

▸ **RotationAxisToRef**\<`T`\>(`axis`, `angle`, `result`): `T`

Creates a new rotation matrix for "angle" radians around the given axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#94

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `DeepImmutableObject`\<[`Vector3`](Vector3.md)\> | defines the axis to use |
| `angle` | `number` | defines the angle (in radians) to use |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### RotationX

▸ **RotationX**(`angle`): [`Matrix`](Matrix.md)

Creates a new rotation matrix for "angle" radians around the X axis
Example Playground - https://playground.babylonjs.com/#AV9X17#97

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | defines the angle (in radians) to use |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### RotationXToRef

▸ **RotationXToRef**\<`T`\>(`angle`, `result`): `T`

Creates a new rotation matrix for "angle" radians around the X axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#98

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | defines the angle (in radians) to use |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### RotationY

▸ **RotationY**(`angle`): [`Matrix`](Matrix.md)

Creates a new rotation matrix for "angle" radians around the Y axis
Example Playground - https://playground.babylonjs.com/#AV9X17#99

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | defines the angle (in radians) to use |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### RotationYToRef

▸ **RotationYToRef**\<`T`\>(`angle`, `result`): `T`

Creates a new rotation matrix for "angle" radians around the Y axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#100

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | defines the angle (in radians) to use |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### RotationYawPitchRoll

▸ **RotationYawPitchRoll**(`yaw`, `pitch`, `roll`): [`Matrix`](Matrix.md)

Creates a rotation matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#103
Example Playground - https://playground.babylonjs.com/#AV9X17#105

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yaw` | `number` | defines the yaw angle in radians (Y axis) |
| `pitch` | `number` | defines the pitch angle in radians (X axis) |
| `roll` | `number` | defines the roll angle in radians (Z axis) |

#### Returns

[`Matrix`](Matrix.md)

the new rotation matrix

___

### RotationYawPitchRollToRef

▸ **RotationYawPitchRollToRef**\<`T`\>(`yaw`, `pitch`, `roll`, `result`): `T`

Creates a rotation matrix and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#104

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yaw` | `number` | defines the yaw angle in radians (Y axis) |
| `pitch` | `number` | defines the pitch angle in radians (X axis) |
| `roll` | `number` | defines the roll angle in radians (Z axis) |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### RotationZ

▸ **RotationZ**(`angle`): [`Matrix`](Matrix.md)

Creates a new rotation matrix for "angle" radians around the Z axis
Example Playground - https://playground.babylonjs.com/#AV9X17#101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | defines the angle (in radians) to use |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### RotationZToRef

▸ **RotationZToRef**\<`T`\>(`angle`, `result`): `T`

Creates a new rotation matrix for "angle" radians around the Z axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#102

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | defines the angle (in radians) to use |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### Scaling

▸ **Scaling**(`x`, `y`, `z`): [`Matrix`](Matrix.md)

Creates a scaling matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#107

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the scale factor on X axis |
| `y` | `number` | defines the scale factor on Y axis |
| `z` | `number` | defines the scale factor on Z axis |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### ScalingToRef

▸ **ScalingToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Creates a scaling matrix and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#108

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the scale factor on X axis |
| `y` | `number` | defines the scale factor on Y axis |
| `z` | `number` | defines the scale factor on Z axis |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### Translation

▸ **Translation**(`x`, `y`, `z`): [`Matrix`](Matrix.md)

Creates a translation matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#109

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the translation on X axis |
| `y` | `number` | defines the translation on Y axis |
| `z` | `number` | defines the translationon Z axis |

#### Returns

[`Matrix`](Matrix.md)

the new matrix

___

### TranslationToRef

▸ **TranslationToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Creates a translation matrix and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#110

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | defines the translation on X axis |
| `y` | `number` | defines the translation on Y axis |
| `z` | `number` | defines the translationon Z axis |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### Transpose

▸ **Transpose**\<`T`\>(`matrix`): `T`

Compute the transpose of a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#111

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `DeepImmutable`\<`T`\> | defines the matrix to transpose |

#### Returns

`T`

the new matrix

___

### TransposeToRef

▸ **TransposeToRef**\<`T`\>(`matrix`, `result`): `T`

Compute the transpose of a matrix and store it in a target matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#112

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Matrix`](Matrix.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `DeepImmutableObject`\<[`Matrix`](Matrix.md)\> | defines the matrix to transpose |
| `result` | `T` | defines the target matrix |

#### Returns

`T`

result input

___

### Zero

▸ **Zero**(): [`Matrix`](Matrix.md)

Creates a new zero matrix

#### Returns

[`Matrix`](Matrix.md)

a new zero matrix
