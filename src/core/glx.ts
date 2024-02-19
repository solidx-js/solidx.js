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

export type IGlxInstance<P extends Record<string, any>> = {
  render: (prop?: P, element?: ITypedArray, count?: number) => IGlxInstance<P>;
  clear: (arg: { color?: number[]; depth?: number; stencil?: number }) => IGlxInstance<P>;
  program: WebGLProgram;
};

export type IGlxConfig = {
  attributes?: Record<
    string,
    {
      itemType: IShaderParamDataType;
      normalized?: boolean;
      stride?: number;
      offset?: number;
    }
  >;
  uniforms?: Record<
    string,
    {
      type: IShaderParamDataType;
    }
  >;
};

export function glx() {
  return glx;
}

glx.of = function <P extends Record<string, any>>(
  gl: WebGL2RenderingContext,
  vert: ITpl | string,
  frag: ITpl | string,
  config: IGlxConfig,
  defaultProp?: P
): IGlxInstance<P> {
  const { attributes, uniforms } = config;

  function _getSizeByType(type: IShaderParamDataType) {
    if (type === 'vec2') return 2;
    if (type === 'vec3') return 3;
    if (type === 'vec4') return 4;
    if (type === 'mat4') return 16;

    throw new Error(`unknown type: ${type}`);
  }

  function _getUniformType(type: IShaderParamDataType, data: ITypedArray | number): GLenum {
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
  }

  function _getBufferPointerType(data: ITypedArray): GLenum {
    if (data instanceof Float32Array) return gl.FLOAT;
    if (data instanceof Int32Array) return gl.INT;
    if (data instanceof Int16Array) return gl.SHORT;
    if (data instanceof Int8Array) return gl.BYTE;
    if (data instanceof Uint32Array) return gl.UNSIGNED_INT;
    if (data instanceof Uint16Array) return gl.UNSIGNED_SHORT;
    if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) return gl.UNSIGNED_BYTE;
    throw new Error('unknown type');
  }

  const vertSrc = typeof vert === 'string' ? vert : vert.render({ config });
  const fragSrc = typeof frag === 'string' ? frag : frag.render({ config });

  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  if (!vertexShader) throw new Error('create vertex shader failed');
  gl.shaderSource(vertexShader, vertSrc);
  gl.compileShader(vertexShader);

  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  if (!fragmentShader) throw new Error('create fragment shader failed');
  gl.shaderSource(fragmentShader, fragSrc);
  gl.compileShader(fragmentShader);

  // 创建着色器程序
  const program = gl.createProgram();
  if (!program) throw new Error('create program failed');

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    throw new Error(`program link failed: ${info}`);
  }

  // 使用着色器程序
  gl.useProgram(program);

  const preset: IGlxInstance<P> = {
    program,
    clear: () => {
      throw new Error('not implemented');
    },
    render: () => {
      throw new Error('not implemented');
    },
  };

  preset.clear = (arg: { color?: number[]; depth?: number; stencil?: number }) => {
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

    return preset;
  };

  preset.render = (prop?: P, elementData?: ITypedArray, count?: number) => {
    let _draw = (): any => {
      throw new Error('not implemented');
    };

    // 绑定 attributes
    if (attributes) {
      for (const [attr, def] of Object.entries(attributes)) {
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);

        const data = prop?.[attr] || defaultProp?.[attr];
        if (!data) throw new Error(`attribute ${attr} not found`);
        if (!glx.isTypedArray(data)) throw new Error(`attribute ${attr} data must be ArrayBuffer`);

        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

        const loc = gl.getAttribLocation(program, attr);
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
    if (elementData) {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buf);

      if (!glx.isTypedArray(elementData)) throw new Error('element data must be ArrayBuffer');

      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elementData, gl.STATIC_DRAW);

      const _count = elementData.length;
      const _eleType = _getBufferPointerType(elementData);

      _draw = () => {
        gl.drawElements(gl.TRIANGLES, _count, _eleType, 0);
      };
    }

    // 绑定 uniforms
    if (uniforms) {
      for (const [uniform, def] of Object.entries(uniforms)) {
        const loc = gl.getUniformLocation(program, uniform);
        if (!loc) throw new Error(`uniform ${uniform} not found`);

        const data = prop?.[uniform] || defaultProp?.[uniform];
        if (!data) throw new Error(`uniform ${uniform} not found`);

        const glItemType = _getUniformType(def.type, data);

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
            throw new Error('not support type: ' + def.type);
        }
      }
    }

    _draw();

    return preset;
  };

  return preset;
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
