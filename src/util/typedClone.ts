import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { Matrix, Quaternion, Vector2, Vector3 } from '@babylonjs/core/Maths/math.vector';

export function typedClone<T extends number | string | Vector2 | Vector3 | Quaternion | Matrix | Color3 | Color4 | null | undefined>(
  data: T
): T {
  if (typeof data === 'undefined') return data as T;
  if (data === null) return data as T;

  if (typeof data === 'number') return data as T;
  if (typeof data === 'string') return data as T;

  if (typeof (data as any).clone === 'function') return (data as any).clone() as T;
  return JSON.parse(JSON.stringify(data)) as T;
}
