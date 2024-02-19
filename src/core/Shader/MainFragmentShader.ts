import { ITpl, tpl } from 'tiny-tpl';
import { IGlxConfig } from '../glx';

export type IMainFragmentShaderProp = {
  u_worldMatrix: Float32Array;
  u_viewMatrix: Float32Array;
  u_projectionMatrix: Float32Array;
};

export const MainFragmentShader = {
  tpl: tpl`
uniform mat4 u_worldMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;

varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;

void main() {
  gl_FragColor = v_color;
}
  `,

  uniforms: {
    u_worldMatrix: { type: 'mat4' },
    u_viewMatrix: { type: 'mat4' },
    u_projectionMatrix: { type: 'mat4' },
  } satisfies IGlxConfig['uniforms'],
};
