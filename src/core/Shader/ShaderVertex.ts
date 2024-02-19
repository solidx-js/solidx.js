import { ITpl, tpl } from 'tiny-tpl';
import { IShaderParamDataType, ShaderMainBase } from './ShaderMainBase';

export class ShaderVertex extends ShaderMainBase {
  defines: Record<string, string> = {};

  attributes = {
    a_position: 'vec3',
    a_normal: 'vec3',
    a_uv: 'vec2',
    a_color: 'vec4',
  } as const;

  uniforms = {
    u_worldMatrix: 'mat4',
    u_viewMatrix: 'mat4',
    u_projectionMatrix: 'mat4',
  } as const;

  varyings = {
    v_position: 'vec3',
    v_normal: 'vec3',
    v_uv: 'vec2',
    v_color: 'vec4',
  } as const;

  body = tpl`
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
  `;
}
