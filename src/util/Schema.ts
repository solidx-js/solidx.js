import { Color3, Color4, Matrix, Quaternion } from '@babylonjs/core/Maths/math';
import { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
import { parseDurationString } from './parseDurationString';

export type IDataType =
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'Array'
  | 'Vector2'
  | 'Vector3'
  | 'Vector4'
  | 'Quaternion'
  | 'Object'
  | 'Color3'
  | 'Color4'
  | 'Matrix'
  | 'TransitionList';

export type IDataTypeMap = {
  Number: number;
  String: string;
  Boolean: boolean;
  Array: string[];
  Object: Record<string, string>;
  Vector2: Vector2;
  Vector3: Vector3;
  Vector4: Vector4;
  Quaternion: Quaternion;
  Color3: Color3;
  Color4: Color4;
  Matrix: Matrix;
  TransitionList: { property: string; duration: number; timingFunction: string; delay: number }[];
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
    else if (type === 'Quaternion') return Quaternion.FromArray(_ns(data)) as any;
    else if (type === 'Color3') return Color3.FromHexString(data) as any;
    else if (type === 'Color4') return Color4.FromHexString(data) as any;
    else if (type === 'Matrix') return Matrix.FromArray(_ns(data)) as any;
    else if (type === 'Object') {
      const obj: any = {};
      if (data === '') return obj as any;

      const list = data.split(';');

      for (const item of list) {
        if (!item) continue;

        // 从第一个 : 处分割成 key 和 value
        const _index = item.indexOf(':');
        const key = item.slice(0, _index).trim();
        const value = item.slice(_index + 1).trim();

        obj[key] = value;
      }

      return obj as any;
    }
    // TransitionList
    else if (type === 'TransitionList') {
      const list: { property: string; duration: number; timingFunction: string; delay: number }[] = [];

      const parts = data.split(',').map(v => v.trim());

      for (const part of parts) {
        const [property, duration = '0s', timingFunction = '', delay = '0s'] = part.split(/\s+/g);
        list.push({ property, duration: parseDurationString(duration), timingFunction, delay: parseFloat(delay) });
      }

      return list as any;
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
    else if (type === 'Quaternion') return (data as Quaternion).asArray().join(' ');
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
    // TransitionList
    else if (type === 'TransitionList') {
      const list: string[] = [];

      for (const item of data as { property: string; duration: number; timingFunction: string; delay: number }[]) {
        list.push(`${item.property} ${item.duration}s ${item.timingFunction} ${item.delay}s`);
      }

      return list.join(',');
    }

    // throw
    else {
      throw new Error(`Schema.stringify: unknown schema type ${type}`);
    }
  },

  isEqual<T extends IDataType>(type: T, a: IDataTypeMap[T] | undefined | null, b: IDataTypeMap[T] | undefined | null): boolean {
    if (typeof a === 'undefined' || a === null) return typeof b === 'undefined' || b === null;

    if (type === 'Number') return a === b;
    else if (type === 'String') return a === b;
    else if (type === 'Boolean') return a === b;
    else if (type === 'Array') return a === b;
    else if (type === 'Vector2') return (a as Vector2).equals(b as Vector2);
    else if (type === 'Vector3') return (a as Vector3).equals(b as Vector3);
    else if (type === 'Vector4') return (a as Vector4).equals(b as Vector4);
    else if (type === 'Quaternion') return (a as Quaternion).equals(b as Quaternion);
    else if (type === 'Color3') return (a as Color3).equals(b as Color3);
    else if (type === 'Color4') return (a as Color4).equals(b as Color4);
    else if (type === 'Matrix') return (a as Matrix).equals(b as Matrix);
    else if (type === 'Object') return a === b;
    else if (type === 'TransitionList') return a === b;
    else return false;
  },

  toCssLiteral<T extends IDataType>(type: T, data: IDataTypeMap[T]): string {
    if (type === 'Boolean') return data ? 'true' : ''; // Boolean 类型的 CSS 属性，如果为 false，不写入

    let str = this.stringify(type, data);
    if (type === 'String' || type === 'Object') str = `"${str}"`;

    return str;
  },

  fromCssLiteral<T extends IDataType>(type: T, literal: string): IDataTypeMap[T] | null {
    if (literal === '') return null; // css 值为空，表示没有这个属性，返回 null
    return this.parse(type, literal.replace(/^['"]/, '').replace(/['"]$/, ''));
  },
};

function _ns(s: string) {
  return s.split(' ').map(v => Number(v.trim()));
}
