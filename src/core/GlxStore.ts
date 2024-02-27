import { IGlxIns, glx } from './glx';
import { TinyPP } from 'tiny-pp/dist/web';

export interface IGlslDefine {}
export interface IGlslProp {}

export class GlxStore {
  static files = new Map<string, string>();

  private _pp = new TinyPP();
  private _glx: IGlxIns<Partial<IGlslProp>> | null = null;

  constructor(private gl: WebGL2RenderingContext) {}

  async init() {
    await this._pp.init();

    for (const [path, content] of GlxStore.files) {
      this._pp.setFile(path, content);
    }
  }

  use(defines: Record<string, any> = {}) {
    const vShader = this._pp.process('vertex.glsl', defines);
    const fShader = this._pp.process('fragment.glsl', defines);

    // 释放上一个
    if (this._glx && (this._glx.vert !== vShader || this._glx.frag !== fShader)) {
      this._glx.dispose();
      this._glx = null;
    }

    this._glx = glx.of(this.gl, vShader, fShader, {
      attributes: {
        a_position: { type: 'vec3' },
        a_normal: { type: 'vec3' },
        a_uv: { type: 'vec2' },
        a_color: { type: 'vec4' },
      },
      uniforms: {
        u_worldMatrix: { type: 'mat4' },
        u_projectionMatrix: { type: 'mat4' },
        u_viewMatrix: { type: 'mat4' },
      },
      uniformBlockArrays: {
        u_pointLights: { structure: { color: 'vec3', position: 'vec3', intensity: 'float' } },
        u_directionalLights: { structure: { color: 'vec3', direction: 'vec3', intensity: 'float' } },
      },
    });

    return this._glx;
  }
}
