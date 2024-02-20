import { glsl } from '../../core/glsl';

declare module '../../core/glsl' {
  interface IGlslDefine {
    HAS_ATTR_UV: boolean;
    HAS_ATTR_COLOR: boolean;

    NUM_POINT_LIGHTS: number;
    NUM_DIRECTIONAL_LIGHTS: number;
  }

  interface IGlslProp {
    a_position: Float32Array;
    a_normal: Float32Array;
    a_uv: Float32Array;
    a_color: Float32Array;

    u_worldMatrix: Float32Array;
    u_viewMatrix: Float32Array;
    u_projectionMatrix: Float32Array;

    u_pointLights: any[];
    u_directionalLights: any[];
  }
}

glsl.register('vertex.glsl', require('./vertex.glsl'));
glsl.register('fragment.glsl', require('./fragment.glsl'));

glsl.register('light.glsl', require('./light.glsl'));
