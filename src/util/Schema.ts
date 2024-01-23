import { Color3, Color4, Matrix, Quaternion } from '@babylonjs/core/Maths/math';
import { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
import chroma from 'chroma-js';
import camelCase from 'lodash/camelCase';
import { DefaultBizLogger } from '../BizLogger';
import { IUriData, URIUtil } from './URIUtil';

export type IDataType =
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'Array'
  | 'Vector2'
  | 'Vector3'
  | 'Vector4'
  | 'Quaternion'
  | 'URI'
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
  Quaternion: Quaternion;
  Color3: Color3;
  Color4: Color4;
  Matrix: Matrix;
  URI: IUriData;
};

export const Schema = {
  fromAttr<T extends IDataType>(type: T, data: string | null): IDataTypeMap[T] | null {
    if (data === null) return null;

    if (type === 'Number') return (Number(data) || 0) as any;
    else if (type === 'String') return String(data) as any;
    else if (type === 'Boolean') return (data === 'true') as any;
    else if (type === 'Array') return data.split(' ').map(v => v.trim()) as any;
    else if (type === 'Vector2') return Vector2.FromArray(_ns(data)) as any;
    else if (type === 'Vector3') return Vector3.FromArray(_ns(data)) as any;
    else if (type === 'Vector4') return Vector4.FromArray(_ns(data)) as any;
    else if (type === 'Quaternion') return Quaternion.FromArray(_ns(data)) as any;
    else if (type === 'Color3') return Color3.FromHexString(chroma(data).hex()) as any;
    else if (type === 'Color4') return Color4.FromHexString(chroma(data).hex()) as any;
    else if (type === 'Matrix') return Matrix.FromArray(_ns(data)) as any;
    else if (type === 'URI') {
      try {
        return URIUtil.parse(data) as any;
      } catch (e) {
        DefaultBizLogger.error(`Schema.fromAttr: invalid URL \`${data}\``);
        return null;
      }
    }
    //
    else if (type === 'Object') {
      // `:` 分割 key 和 value，`;` 分割多个 key-value 对
      const obj: Record<string, string> = {};
      const pairs = data
        .split(';')
        .map(v => v.trim())
        .filter(v => v);

      for (const pair of pairs) {
        const [key, value] = pair.split(':').map(v => v.trim());
        obj[key] = value;
      }

      return obj as any;
    }
    // throw
    else {
      throw new Error(`Schema.parse: unknown schema type ${type}`);
    }
  },

  toAttr<T extends IDataType>(type: T, data: IDataTypeMap[T] | null): string | null {
    if (data === null) return null;

    if (type === 'Number') return String(data);
    else if (type === 'String') return String(data);
    else if (type === 'Boolean') return data ? 'true' : 'false';
    else if (type === 'Array') return (data as any[]).join(' ');
    else if (type === 'Vector2') return (data as Vector2).asArray().join(' ');
    else if (type === 'Vector3') return (data as Vector3).asArray().join(' ');
    else if (type === 'Vector4') return (data as Vector4).asArray().join(' ');
    else if (type === 'Quaternion') return (data as Quaternion).asArray().join(' ');
    else if (type === 'Color3') return (data as Color3).toHexString();
    else if (type === 'Color4') return (data as Color4).toHexString();
    else if (type === 'Matrix') return (data as Matrix).asArray().join(' ');
    else if (type === 'URI') return URIUtil.stringify(data as any);
    else if (type === 'Object') {
      const obj = data as Record<string, string>;
      const pairs = Object.entries(obj).map(([key, value]) => `${key}:${value}`);
      return pairs.join(';');
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
    else if (type === 'URI') return a === b;
    else return false;
  },

  toCssLiteral<T extends IDataType>(type: T, data: IDataTypeMap[T]): string {
    const str = this.toAttr(type, data);
    if (str === null) return '';

    if (type === 'String' || type === 'Object') return `"${str}"`;
    return str;
  },

  fromCssLiteral<T extends IDataType>(type: T, literal: string): IDataTypeMap[T] | null {
    if (literal === '') return null; // css 值为空，表示没有这个属性，返回 null
    return this.fromAttr(type, literal.replace(/^['"]/, '').replace(/['"]$/, ''));
  },

  fromCssLiteralSchema(schema: Record<string, IDataType>, data: Record<string, string>): any {
    const obj: any = {};

    for (const key of Object.keys(data)) {
      const _dType = schema[key as keyof typeof schema];
      if (!_dType) continue;

      const camelCaseKey = camelCase(key);
      obj[camelCaseKey] = this.fromCssLiteral(_dType, data[key]);
    }

    return obj;
  },
};

function _ns(s: string) {
  return s.split(' ').map(v => Number(v.trim()));
}
