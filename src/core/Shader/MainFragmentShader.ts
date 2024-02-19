import { ITpl, tpl } from 'tiny-tpl';
import { IGlxConfig } from '../glx';

export type IMainFragmentShaderProp = {
  u_worldMatrix: Float32Array;
  u_viewMatrix: Float32Array;
  u_projectionMatrix: Float32Array;
};

export const MainFragmentShader = {
  tpl: tpl<{ prop: any; config: any }>`
precision mediump float;

uniform mat4 u_worldMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;

varying vec3 v_position;

${ctx => (ctx.prop.a_normal ? 'varying vec3 v_normal;' : '')}
${ctx => (ctx.prop.a_uv ? 'varying vec2 v_uv;' : '')}
${ctx => (ctx.prop.a_color ? 'varying vec4 v_color;' : '')}

void main() {
  gl_FragColor = ${ctx => (ctx.prop.a_color ? 'v_color' : 'vec4(1.0, 1.0, 1.0, 1.0)')};
}
  `,

  uniforms: {
    u_worldMatrix: { type: 'mat4', required: true },
    u_viewMatrix: { type: 'mat4', required: true },
    u_projectionMatrix: { type: 'mat4', required: true },
  } satisfies IGlxConfig['uniforms'],
};
