import { Color3, Color4, Matrix } from '@babylonjs/core/Maths/math';
import { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';

export type IDataType =
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'Array'
  | 'Vector2'
  | 'Vector3'
  | 'Vector4'
  | 'Object'
  | 'Color3'
  | 'Color4'
  | 'Matrix';

export type IDataTypeMap = {
  Number: number;
  String: string;
  Boolean: boolean;
  Array: string[];
  Object: Record<string, string>;
  Vector2: Vector2;
  Vector3: Vector3;
  Vector4: Vector4;
  Color3: Color3;
  Color4: Color4;
  Matrix: Matrix;
};

export const Schema = {
  parse<T extends IDataType>(type: T, data: string): IDataTypeMap[T] {
    if (type === 'Number') return (Number(data) || 0) as any;
    else if (type === 'String') return String(data) as any;
    else if (type === 'Boolean') return (typeof data !== 'undefined') as any;
    else if (type === 'Array') return data.split(' ').map(v => v.trim()) as any;
    else if (type === 'Vector2') return Vector2.FromArray(_ns(data)) as any;
    else if (type === 'Vector3') return Vector3.FromArray(_ns(data)) as any;
    else if (type === 'Vector4') return Vector4.FromArray(_ns(data)) as any;
    else if (type === 'Color3') return Color3.FromHexString(data) as any;
    else if (type === 'Color4') return Color4.FromHexString(data) as any;
    else if (type === 'Matrix') return Matrix.FromArray(_ns(data)) as any;
    else if (type === 'Object') {
      const obj: any = {};
      if (data === '') return obj as any;

      const list = data.split(';');

      for (const item of list) {
        if(!item) continue;

        // 从第一个 : 处分割成 key 和 value
        const _index = item.indexOf(':');
        const key = item.slice(0, _index).trim();
        const value = item.slice(_index + 1).trim();

        obj[key] = value;
      }

      return obj as any;
    }

    // throw
    else {
      throw new Error(`Schema.parse: unknown schema type ${type}`);
    }
  },

  stringify<T extends IDataType>(type: T, data: IDataTypeMap[T]): string {
    if (type === 'Number') return String(data);
    else if (type === 'String') return String(data);
    else if (type === 'Boolean') return String(data);
    else if (type === 'Array') return (data as any[]).join(' ');
    else if (type === 'Vector2') return (data as Vector2).asArray().join(' ');
    else if (type === 'Vector3') return (data as Vector3).asArray().join(' ');
    else if (type === 'Vector4') return (data as Vector4).asArray().join(' ');
    else if (type === 'Color3') return (data as Color3).toHexString();
    else if (type === 'Color4') return (data as Color4).toHexString();
    else if (type === 'Matrix') return (data as Matrix).asArray().join(' ');
    else if (type === 'Object') {
      const list: string[] = [];

      for (const key in data) {
        list.push(`${key}:${data[key]}`);
      }

      return list.join(';');
    }

    // throw
    else {
      throw new Error(`Schema.stringify: unknown schema type ${type}`);
    }
  },
};

function _ns(s: string) {
  return s.split(' ').map(v => Number(v.trim()));
}
