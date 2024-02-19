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
  tpl: tpl<{ prop: any; config: any }>`
attribute vec3 a_position;
${ctx => (ctx.prop.a_normal ? 'attribute vec4 a_normal;' : '')}
${ctx => (ctx.prop.a_uv ? 'attribute vec2 a_uv;' : '')}
${ctx => (ctx.prop.a_color ? 'attribute vec4 a_color;' : '')}

uniform mat4 u_worldMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;

varying vec3 v_position;

${ctx => (ctx.prop.a_normal ? 'varying vec3 v_normal;' : '')}
${ctx => (ctx.prop.a_uv ? 'varying vec2 v_uv;' : '')}
${ctx => (ctx.prop.a_color ? 'varying vec4 v_color;' : '')}

void main() {
  v_position = (u_worldMatrix * vec4(a_position, 1.0)).xyz;

  ${ctx => (ctx.prop.a_normal ? 'v_normal = normalize(v_normal);' : '')}
  ${ctx => (ctx.prop.a_uv ? 'v_uv = a_uv;' : '')}
  ${ctx => (ctx.prop.a_color ? 'v_color = a_color;' : '')}

  gl_Position = u_projectionMatrix * u_viewMatrix * u_worldMatrix * vec4(a_position, 1.0);
}
  `,

  attributes: {
    a_position: { itemType: 'vec3', required: true },
    a_normal: { itemType: 'vec3' },
    a_uv: { itemType: 'vec2' },
    a_color: { itemType: 'vec4' },
  } satisfies IGlxConfig['attributes'],

  uniforms: {
    u_worldMatrix: { type: 'mat4', required: true },
    u_viewMatrix: { type: 'mat4', required: true },
    u_projectionMatrix: { type: 'mat4', required: true },
  } satisfies IGlxConfig['uniforms'],
};
