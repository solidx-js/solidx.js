import { ITpl, tpl } from 'tiny-tpl';

export type IShaderParamDataType = 'int' | 'float' | 'vec2' | 'vec3' | 'vec4' | 'mat4';

export abstract class ShaderMainBase {
  abstract defines: Record<string, string>;

  abstract attributes: Record<string, IShaderParamDataType> | null;
  abstract uniforms: Record<string, IShaderParamDataType> | null;
  abstract varyings: Record<string, IShaderParamDataType> | null;

  abstract body: ITpl;

  toString() {
    return this.body.render({});
  }
}
