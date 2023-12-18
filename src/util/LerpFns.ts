import { Scalar } from '@babylonjs/core/Maths/math.scalar';
import { IDataType, IDataTypeMap } from './Schema';
import { Vector2, Vector3, Vector4, Matrix, Quaternion } from '@babylonjs/core/Maths/math.vector';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';

export const LerpFns: {
  [K in IDataType]: (start: IDataTypeMap[K], end: IDataTypeMap[K], gradient: number, ref?: IDataTypeMap[K]) => IDataTypeMap[K];
} = {
  Number: Scalar.Lerp,
  Vector2: Vector2.Lerp,
  Vector3: (start: Vector3, end: Vector3, gradient, ref?: Vector3) => Vector3.LerpToRef(start, end, gradient, ref || new Vector3()),
  Vector4: (start: Vector4, end: Vector4, gradient, ref?: Vector4) => {
    if (!ref) ref = new Vector4();
    ref.x = Scalar.Lerp(start.x, end.x, gradient);
    ref.y = Scalar.Lerp(start.y, end.y, gradient);
    ref.z = Scalar.Lerp(start.z, end.z, gradient);
    ref.w = Scalar.Lerp(start.w, end.w, gradient);
    return ref;
  },
  Color3: Color3.Lerp,
  Color4: Color4.Lerp,
  String: (_start, end) => end,
  Boolean: (_start, end) => end,
  Array: (_start, end) => end,
  Object: (_start, end) => end,
  Matrix: (start: Matrix, end: Matrix, gradient, ref?: Matrix) => Matrix.LerpToRef(start, end, gradient, ref || new Matrix()),
  Quaternion: (start: Quaternion, end: Quaternion, gradient, ref?: Quaternion) => {
    return Quaternion.SlerpToRef(start, end, gradient, ref || new Quaternion());
  },
  TransitionList: (_start, end) => end,
};
