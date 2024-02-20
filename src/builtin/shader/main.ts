import { glsl, IGlslDefine } from '../../core/glsl';
import { tpl } from 'tiny-tpl';

declare module '../../core/glsl' {
  interface IGlslDefine {
    // 下面这两个是从 glx 里来的
    VERTEX_SHADER: boolean;
    FRAGMENT_SHADER: boolean;

    HAS_ATTR_NORMAL: boolean;
    HAS_ATTR_UV: boolean;
    HAS_ATTR_COLOR: boolean;
  }

  interface IGlslProp {
    a_position: Float32Array;
    a_normal: Float32Array;
    a_uv: Float32Array;
    a_color: Float32Array;

    u_worldMatrix: Float32Array;
    u_viewMatrix: Float32Array;
    u_projectionMatrix: Float32Array;
  }
}

const _INCLUDE_DECLARES = tpl<IGlslDefine>`
${glsl.$include('light.glsl')}
`;

const _UNIFORM_DECLARES = tpl<IGlslDefine>`
uniform mat4 u_worldMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;
`;

const _VARYING_DECLARES = tpl<IGlslDefine>`
varying vec3 v_position;

${glsl.$ifdef('HAS_ATTR_NORMAL', 'varying vec3 v_normal;', '')}
${glsl.$ifdef('HAS_ATTR_UV', 'varying vec2 v_uv;', '')}
${glsl.$ifdef('HAS_ATTR_COLOR', 'varying vec4 v_color;', '')}
`;

// 主顶点着色器
glsl.register(
  'vertex.glsl',
  tpl`
${glsl.$printDefines()}

// include
${_INCLUDE_DECLARES}

attribute vec3 a_position;

${glsl.$ifdef('HAS_ATTR_NORMAL', 'attribute vec4 a_normal;', '')}
${glsl.$ifdef('HAS_ATTR_UV', 'attribute vec2 a_uv;', '')}
${glsl.$ifdef('HAS_ATTR_COLOR', 'attribute vec4 a_color;', '')}

${_UNIFORM_DECLARES}
${_VARYING_DECLARES}

void main() {
  v_position = (u_worldMatrix * vec4(a_position, 1.0)).xyz;

  ${glsl.$ifdef('HAS_ATTR_NORMAL', 'v_normal = normalize(v_normal);', '')}
  ${glsl.$ifdef('HAS_ATTR_UV', 'v_uv = a_uv;', '')}
  ${glsl.$ifdef('HAS_ATTR_COLOR', 'v_color = a_color;', '')}

  gl_Position = u_projectionMatrix * u_viewMatrix * u_worldMatrix * vec4(a_position, 1.0);
}`
);

// 主片元着色器
glsl.register(
  'fragment.glsl',
  tpl`
precision mediump float;

${glsl.$printDefines()}

// include
${_INCLUDE_DECLARES}

${_UNIFORM_DECLARES}
${_VARYING_DECLARES}

void main() {
  gl_FragColor = ${glsl.$ifdef('HAS_ATTR_COLOR', 'v_color', 'vec4(1.0, 1.0, 1.0, 1.0)')};
}`
);
