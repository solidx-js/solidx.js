import { ITpl, tpl } from 'tiny-tpl';
import { ShaderMainBase } from './ShaderMainBase';

export class ShaderFragment extends ShaderMainBase {
  defines: Record<string, string> = {};

  attributes = null;
  uniforms = null;

  varyings = {
    v_position: 'vec3',
    v_normal: 'vec3',
    v_uv: 'vec2',
    v_color: 'vec4',
  } as const;

  body = tpl`
varying vec3 v_position;
varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;

void main() {
  gl_FragColor = v_color;
}
  `;
}
