export type ISchemaBase<T> = {
  default?: T;
};

export type ISchemaNumber = ISchemaBase<number> & { type: 'number'; min?: number; max?: number };
export type ISchemaString = ISchemaBase<string> & { type: 'string' };
export type ISchemaBoolean = ISchemaBase<boolean> & { type: 'boolean' };
export type ISchemaArray = ISchemaBase<string> & { type: 'array' };

export type ISchemaVec2 = ISchemaBase<{ x: number; y: number }> & { type: 'vec2' };
export type ISchemaVec3 = ISchemaBase<{ x: number; y: number; z: number }> & { type: 'vec3' };
export type ISchemaVec4 = ISchemaBase<{ x: number; y: number; z: number; w: number }> & { type: 'vec4' };

export type ISchemaObject = ISchemaBase<{ [key: string]: any }> & {
  type: 'object';
  properties: { [key: string]: ISchema };
  required?: string[];
};

export type ISchema =
  | ISchemaNumber
  | ISchemaString
  | ISchemaBoolean
  | ISchemaArray
  | ISchemaVec2
  | ISchemaVec3
  | ISchemaVec4
  | ISchemaObject;

export const Schema = {
  parse(schema: ISchema, data: any): any {
    if (schema.type === 'number') {
      const ret = Number(data);
      if (isNaN(ret)) {
        if (schema.default !== undefined) return schema.default;
        throw new Error(`Schema.parse: invalid number ${data}`);
      }

      if (schema.min !== undefined && ret < schema.min) return schema.min;
      if (schema.max !== undefined && ret > schema.max) return schema.max;

      return ret;
    }

    // string
    else if (schema.type === 'string') {
      return String(data) || schema.default;
    }

    // boolean
    else if (schema.type === 'boolean') {
      return Boolean(data);
    }

    // array
    else if (schema.type === 'array') {
      if (Array.isArray(data)) return data;
      if (typeof data === 'string') return data.split(',').map(v => v.trim());
      return [];
    }

    // vec2
    else if (schema.type === 'vec2') {
      if (typeof data === 'string') {
        const [x, y] = data.split(' ').map(v => Number(v.trim()));
        return { x, y };
      }
      return data;
    }

    // vec3
    else if (schema.type === 'vec3') {
      if (typeof data === 'string') {
        const [x, y, z] = data.split(' ').map(v => Number(v.trim()));
        return { x, y, z };
      }
      return data;
    }

    // vec4
    else if (schema.type === 'vec4') {
      if (typeof data === 'string') {
        const [x, y, z, w] = data.split(' ').map(v => Number(v.trim()));
        return { x, y, z, w };
      }
      return data;
    }

    // object
    else if (schema.type === 'object') {
      if (!data) return {};

      // 按照 key: value; key: value 的格式解析
      if (typeof data === 'string') {
        const obj: any = {};
        const list = data.split(';');

        for (const item of list) {
          const [key, value] = item.split(':').map(v => v.trim());

          const subSchema = schema.properties[key];
          if (!subSchema) continue;

          obj[key] = Schema.parse(subSchema, value);
        }

        return obj;
      }

      throw new Error(`Schema.parse: invalid object ${data}`);
    }

    // throw
    else {
      throw new Error(`Schema.parse: unknown schema type ${(schema as any).type}`);
    }
  },

  stringify(schema: ISchema, data: any): string {
    // number
    if (schema.type === 'number') {
      return String(data);
    }

    // string
    else if (schema.type === 'string') {
      return String(data);
    }

    // boolean
    else if (schema.type === 'boolean') {
      return String(data);
    }

    // array
    else if (schema.type === 'array') {
      return data.join(',');
    }

    // vec2
    else if (schema.type === 'vec2') {
      return `${data.x} ${data.y}`;
    }

    // vec3
    else if (schema.type === 'vec3') {
      return `${data.x} ${data.y} ${data.z}`;
    }

    // vec4
    else if (schema.type === 'vec4') {
      return `${data.x} ${data.y} ${data.z} ${data.w}`;
    }

    // object
    else if (schema.type === 'object') {
      const list: string[] = [];

      for (const key of Object.keys(schema.properties)) {
        const subSchema = schema.properties[key];
        if (typeof data[key] === 'undefined') continue;

        const stringified = Schema.stringify(subSchema, data[key]);
        list.push(`${key}: ${stringified}`);
      }

      return list.join('; ');
    }

    // throw
    else {
      throw new Error(`Schema.stringify: unknown schema type ${(schema as any).type}`);
    }
  },
};
