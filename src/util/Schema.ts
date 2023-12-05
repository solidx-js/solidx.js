export type IDataType = 'Number' | 'String' | 'Boolean' | 'Array' | 'Vector2' | 'Vector3' | 'Vector4' | 'Object' | 'Color3';

export const Schema = {
  parse(type: IDataType, data: any): any {
    if (type === 'Number') {
      const ret = Number(data);
      if (isNaN(ret)) throw new Error(`Schema.parse: invalid number ${data}`);
      return ret;
    }

    // string
    else if (type === 'String') {
      return String(data);
    }

    // boolean
    else if (type === 'Boolean') {
      return Boolean(data);
    }

    // array
    else if (type === 'Array') {
      if (Array.isArray(data)) return data;
      if (typeof data === 'string') return data.split(' ').map(v => v.trim());
      return [];
    }

    // vec2
    else if (type === 'Vector2') {
      if (typeof data === 'string') {
        const [x, y] = data.split(' ').map(v => Number(v.trim()));
        return { x, y };
      }
      return data;
    }

    // vec3
    else if (type === 'Vector3') {
      if (typeof data === 'string') {
        const [x, y, z] = data.split(' ').map(v => Number(v.trim()));
        return { x, y, z };
      }
      return data;
    }

    // vec4
    else if (type === 'Vector4') {
      if (typeof data === 'string') {
        const [x, y, z, w] = data.split(' ').map(v => Number(v.trim()));
        return { x, y, z, w };
      }
      return data;
    }

    // color3
    else if (type === 'Color3') {
      if (typeof data === 'string') {
        const [r, g, b] = data.split(' ').map(v => Number(v.trim()));
        return { r, g, b };
      }
      return data;
    }

    // object
    else if (type === 'Object') {
      if (!data) return {};

      // 按照 key: value; key: value 的格式解析
      if (typeof data === 'string') {
        const obj: any = {};
        const list = data.split(';');

        for (const item of list) {
          const [key, value] = item.split(':').map(v => v.trim());
          obj[key] = JSON.parse(value);
        }

        return obj;
      }

      throw new Error(`Schema.parse: invalid object ${data}`);
    }

    // throw
    else {
      throw new Error(`Schema.parse: unknown schema type ${type}`);
    }
  },

  stringify(type: IDataType, data: any): string {
    // number
    if (type === 'Number') {
      return String(data);
    }

    // string
    else if (type === 'String') {
      return String(data);
    }

    // boolean
    else if (type === 'Boolean') {
      return String(data);
    }

    // array
    else if (type === 'Array') {
      return data.join(' ');
    }

    // vec2
    else if (type === 'Vector2') {
      return `${data.x} ${data.y}`;
    }

    // vec3
    else if (type === 'Vector3') {
      return `${data.x} ${data.y} ${data.z}`;
    }

    // vec4
    else if (type === 'Vector4') {
      return `${data.x} ${data.y} ${data.z} ${data.w}`;
    }

    // color3
    else if (type === 'Color3') {
      return `${data.r} ${data.g} ${data.b}`;
    }

    // object
    else if (type === 'Object') {
      const list: string[] = [];

      for (const key of Object.keys(data)) {
        const stringified = JSON.stringify(data[key]);
        list.push(`${key}: ${stringified}`);
      }

      return list.join('; ');
    }

    // throw
    else {
      throw new Error(`Schema.stringify: unknown schema type ${type}`);
    }
  },
};
