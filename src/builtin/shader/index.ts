import { GlxStore } from '../../core/GlxStore';

declare module '../../core/GlxStore' {
  interface IGlslDefine {
    HAS_ATTR_UV: boolean;
    HAS_ATTR_COLOR: boolean;

    NUM_POINT_LIGHTS: number;
    NUM_DIRECTIONAL_LIGHTS: number;
  }

  interface IGlslProp {
    a_position: { data: Float32Array };
    a_normal: { data: Float32Array };
    a_uv: { data: Float32Array };
    a_color: { data: Float32Array };

    u_worldMatrix: { data: Float32Array };
    u_viewMatrix: { data: Float32Array };
    u_projectionMatrix: { data: Float32Array };

    u_pointLights: any[];
    u_directionalLights: any[];
  }
}

GlxStore.files.set('vertex.glsl', require('./vertex.glsl'));
GlxStore.files.set('fragment.glsl', require('./fragment.glsl'));
GlxStore.files.set('light.glsl', require('./light.glsl'));
