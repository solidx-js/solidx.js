import { tpl, ITpl } from 'tiny-tpl';

export type IShaderParamDataType = 'int' | 'float' | 'vec2' | 'vec3' | 'vec4' | 'mat4' | 'sampler2D';
export type ITypedArray =
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | Uint8ClampedArray;

export type IGlxInstance<D extends Record<string, any>, P extends Record<string, any>> = {
  render: (define?: D, prop?: P, element?: ITypedArray, count?: number) => IGlxInstance<D, P>;
  clear: (arg: { color?: number[]; depth?: number; stencil?: number }) => IGlxInstance<D, P>;
};

export type IGlxConfig = {
  attributes?: Record<
    string,
    {
      itemType: IShaderParamDataType;
      required?: boolean;
      normalized?: boolean;
      stride?: number;
      offset?: number;
    }
  >;
  uniforms?: Record<
    string,
    {
      type: IShaderParamDataType;
      required?: boolean;
    }
  >;
  uniformArrays?: Record<string, { type: IShaderParamDataType }>;
  uniformBlockArrays?: Record<string, { structure: Record<string, IShaderParamDataType> }>;
};

export function glx() {
  return glx;
}

glx.of = function <D extends Record<string, any>, P extends Record<string, any>>(
  gl: WebGL2RenderingContext,
  vert: ITpl | string,
  frag: ITpl | string,
  config: IGlxConfig,
  defaultDefine?: D,
  defaultProp?: P,
  defaultElementData?: ITypedArray
): IGlxInstance<D, P> {
  const { attributes, uniforms, uniformArrays, uniformBlockArrays } = config;

  const _getSizeByType = (type: IShaderParamDataType) => {
    if (type === 'vec2') return 2;
    if (type === 'vec3') return 3;
    if (type === 'vec4') return 4;
    if (type === 'mat4') return 16;

    throw new Error(`unknown type: ${type}`);
  };

  const _getBufferPointerType = (data: ITypedArray): GLenum => {
    if (data instanceof Float32Array) return gl.FLOAT;
    if (data instanceof Int32Array) return gl.INT;
    if (data instanceof Int16Array) return gl.SHORT;
    if (data instanceof Int8Array) return gl.BYTE;
    if (data instanceof Uint32Array) return gl.UNSIGNED_INT;
    if (data instanceof Uint16Array) return gl.UNSIGNED_SHORT;
    if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) return gl.UNSIGNED_BYTE;
    throw new Error('unknown type');
  };

  let program: WebGLProgram | null = null;
  let _lastDefineData: string = '';

  const _prepareProgram = (define: D = {} as any) => {
    // 比较 define 是否改变
    const _curDefineData = JSON.stringify(define);
    if (_curDefineData === _lastDefineData) return;

    // 开始重新构建 gl 程序
    if (program) gl.deleteProgram(program);

    program = gl.createProgram();
    if (!program) throw new Error('create program failed');

    // 着色器
    const _shaderSources = [typeof vert === 'string' ? vert : vert.render(define), typeof frag === 'string' ? frag : frag.render(define)];

    console.log('@@@', 'frag ->', _shaderSources[1]);

    const _vShader = gl.createShader(gl.VERTEX_SHADER);
    if (!_vShader) throw new Error('create vertex shader failed');

    const _fShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!_fShader) throw new Error('create fragment shader failed');

    for (let _i = 0; _i < 2; _i++) {
      const _src = _shaderSources[_i];
      const _pointer = [_vShader, _fShader][_i];

      gl.shaderSource(_pointer, _src);
      gl.compileShader(_pointer);

      if (!gl.getShaderParameter(_pointer, gl.COMPILE_STATUS)) {
        console.error(_src);
        const info = gl.getShaderInfoLog(_pointer);
        throw new Error(`shader compile failed: ${info}`);
      }

      gl.attachShader(program, _pointer);
    }

    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(program);
      throw new Error(`program link failed: ${info}`);
    }

    gl.useProgram(program);

    _lastDefineData = _curDefineData;
  };

  const instance: IGlxInstance<D, P> = {
    clear: () => {
      throw new Error('not implemented');
    },
    render: () => {
      throw new Error('not implemented');
    },
  };

  instance.clear = (arg: { color?: number[]; depth?: number; stencil?: number }) => {
    let mask = 0;

    if (arg.color) {
      gl.clearColor(arg.color[0], arg.color[1], arg.color[2], arg.color[3]);
      mask |= gl.COLOR_BUFFER_BIT;
    }

    if (typeof arg.depth === 'number') {
      gl.clearDepth(arg.depth);
      mask |= gl.DEPTH_BUFFER_BIT;
    }

    if (typeof arg.stencil === 'number') {
      gl.clearStencil(arg.stencil);
      mask |= gl.STENCIL_BUFFER_BIT;
    }

    gl.clear(mask);

    return instance;
  };

  instance.render = (define?: D, prop?: P, elementData?: ITypedArray, count?: number) => {
    let _draw = (): any => {
      throw new Error('not implemented');
    };

    const finalDefine = { ...defaultDefine, ...define } as D;
    const finalProp = { ...defaultProp, ...prop } as P;
    const finalElementData = defaultElementData || elementData;

    _prepareProgram(finalDefine);
    if (!program) throw new Error('program not found');

    // 绑定 attributes
    if (attributes) {
      for (const [attr, def] of Object.entries(attributes)) {
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);

        const data = finalProp[attr];
        if (!data) {
          if (def.required) throw new Error(`attribute ${attr} not found`);
          else continue;
        }
        if (!glx.isTypedArray(data)) throw new Error(`attribute ${attr} data must be ArrayBuffer`);

        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

        const loc = gl.getAttribLocation(program, attr);
        if (loc === -1) throw new Error(`attribute ${attr} not found`);

        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(
          loc,
          _getSizeByType(def.itemType),
          _getBufferPointerType(data),
          !!def.normalized,
          def.stride || 0,
          def.offset || 0
        );
      }

      _draw = () => {
        const _count = count || 0;
        if (_count <= 0) throw new Error('count must be > 0');
        gl.drawArrays(gl.TRIANGLES, 0, _count);
      };
    }

    // 绑定索引
    if (finalElementData) {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buf);

      if (!glx.isTypedArray(finalElementData)) throw new Error('element data must be ArrayBuffer');

      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, finalElementData, gl.STATIC_DRAW);

      const _count = finalElementData.length;
      const _eleType = _getBufferPointerType(finalElementData);

      _draw = () => {
        gl.drawElements(gl.TRIANGLES, _count, _eleType, 0);
      };
    }

    // 绑定 uniforms
    if (uniforms) {
      for (const [uniform, def] of Object.entries(uniforms)) {
        const data = finalProp[uniform];
        if (!data) {
          if (def.required) throw new Error(`uniform ${uniform} not found`);
          else continue;
        }

        glx.setUniform(gl, program, uniform, def.type, data);
      }
    }

    if (uniformBlockArrays) {
      for (const [uniform, def] of Object.entries(uniformBlockArrays)) {
        const data = finalProp[uniform];
        if (!data) throw new Error(`missing uniform data: ${uniform}`);
        if (!Array.isArray(data)) throw new Error(`uniform data must be array: ${uniform}`);

        for (let i = 0; i < data.length; i++) {
          const item = data[i];

          for (const key of Object.keys(item)) {
            const type = def.structure[key];
            if (!type) throw new Error(`missing uniform structure: ${uniform}.${key}`);

            glx.setUniform(gl, program, `${uniform}[${i}].${key}`, type, item[key]);
          }
        }
      }
    }

    _draw();

    return instance;
  };

  return instance;
};

glx.isTypedArray = function (data: any) {
  return (
    data instanceof Int8Array ||
    data instanceof Int16Array ||
    data instanceof Int32Array ||
    data instanceof Uint8Array ||
    data instanceof Uint16Array ||
    data instanceof Uint32Array ||
    data instanceof Float32Array ||
    data instanceof Float64Array ||
    data instanceof Uint8ClampedArray
  );
};

glx.getUniformType = function (gl: WebGL2RenderingContext, type: IShaderParamDataType, data: ITypedArray | number): GLenum {
  if (type === 'int') return gl.INT;
  if (type === 'float') return gl.FLOAT;
  if (type === 'vec2') {
    if (data instanceof Float32Array) return gl.FLOAT_VEC2;
    if (data instanceof Int32Array || data instanceof Int16Array || data instanceof Int8Array) return gl.INT_VEC2;
    if (data instanceof Uint32Array || data instanceof Uint16Array || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
      return gl.UNSIGNED_INT_VEC2;
    }

    throw new Error('unknown type');
  }
  if (type === 'vec3') {
    if (data instanceof Float32Array) return gl.FLOAT_VEC3;
    if (data instanceof Int32Array || data instanceof Int16Array || data instanceof Int8Array) return gl.INT_VEC3;
    if (data instanceof Uint32Array || data instanceof Uint16Array || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
      return gl.UNSIGNED_INT_VEC3;
    }
    throw new Error('unknown type');
  }

  if (type === 'vec4') {
    if (data instanceof Float32Array) return gl.FLOAT_VEC4;
    if (data instanceof Int32Array || data instanceof Int16Array || data instanceof Int8Array) return gl.INT_VEC4;
    if (data instanceof Uint32Array || data instanceof Uint16Array || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
      return gl.UNSIGNED_INT_VEC4;
    }
    throw new Error('unknown type');
  }

  if (type === 'mat4') {
    if (data instanceof Float32Array) return gl.FLOAT_MAT4;
    throw new Error('unknown type');
  }

  throw new Error('not support type: ' + type);
};

glx.setUniform = function (gl: WebGL2RenderingContext, program: WebGLProgram, uniform: string, type: IShaderParamDataType, data: any) {
  const loc = gl.getUniformLocation(program, uniform);
  if (!loc) throw new Error(`uniform ${uniform} not found`);

  const glItemType = glx.getUniformType(gl, type, data);

  switch (glItemType) {
    case gl.FLOAT:
      gl.uniform1f(loc, data);
      break;

    case gl.FLOAT_VEC2:
      gl.uniform2fv(loc, data);
      break;

    case gl.FLOAT_VEC3:
      gl.uniform3fv(loc, data);
      break;

    case gl.FLOAT_VEC4:
      gl.uniform4fv(loc, data);
      break;

    case gl.FLOAT_MAT4:
      gl.uniformMatrix4fv(loc, false, data);
      break;

    case gl.INT:
      gl.uniform1i(loc, data);
      break;

    case gl.INT_VEC2:
      gl.uniform2iv(loc, data);
      break;

    case gl.INT_VEC3:
      gl.uniform3iv(loc, data);
      break;

    case gl.INT_VEC4:
      gl.uniform4iv(loc, data);
      break;

    case gl.UNSIGNED_INT:
      gl.uniform1ui(loc, data);
      break;

    case gl.UNSIGNED_INT_VEC2:
      gl.uniform2uiv(loc, data);
      break;

    case gl.UNSIGNED_INT_VEC3:
      gl.uniform3uiv(loc, data);
      break;

    default:
      throw new Error('not support type: ' + type);
  }
};
