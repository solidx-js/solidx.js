import { ITpl, tpl } from 'tiny-tpl';
import { IGlxConfig } from '../glx';

export type IMainVertexShaderProp = {
  a_position: Float32Array;
  a_normal: Float32Array;
  a_uv: Float32Array;
  a_color: Float32Array;

  u_worldMatrix: Float32Array;
  u_viewMatrix: Float32Array;
  u_projectionMatrix: Float32Array;
};

export const MainVertexShader = {
  tpl: tpl`
attribute vec3 a_position;
attribute vec3 a_normal;
attribute vec2 a_uv;
attribute vec4 a_color;

uniform mat4 u_worldMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;

varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;

void main() {
  v_position = (u_worldMatrix * vec4(a_position, 1.0)).xyz;
  v_normal = (u_worldMatrix * vec4(a_normal, 0.0)).xyz;
  v_uv = a_uv;
  v_color = a_color;

  gl_Position = u_projectionMatrix * u_viewMatrix * u_worldMatrix * vec4(a_position, 1.0);
}
  `,

  attributes: {
    a_position: { itemType: 'vec3' },
    a_normal: { itemType: 'vec3' },
    a_uv: { itemType: 'vec2' },
    a_color: { itemType: 'vec4' },
  } satisfies IGlxConfig['attributes'],

  uniforms: {
    u_worldMatrix: { type: 'mat4' },
    u_viewMatrix: { type: 'mat4' },
    u_projectionMatrix: { type: 'mat4' },
  } satisfies IGlxConfig['uniforms'],
};
