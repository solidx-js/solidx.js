import { IGlslDefine, glsl } from '../../core/glsl';
import { tpl } from 'tiny-tpl';

declare module '../../core/glsl' {
  interface IGlslDefine {
    NUM_POINT_LIGHT: number;
    NUM_DIRECTIONAL_LIGHT: number;
  }

  interface IGlslProp {
    u_PointLight: any;
    u_DirectionalLight: any;
  }
}

const FRAG_LIGHT_GLSL = tpl<IGlslDefine>`
struct PointLight {
  vec3 color;
  vec3 position;
  float intensity;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
  float intensity;
};

${
  // point light
  ctx => {
    if (ctx.NUM_POINT_LIGHT > 0) {
      return tpl`
uniform PointLight u_PointLight[NUM_POINT_LIGHT];

vec3 computePointLight(vec3 position, vec3 normal, int index) {
  PointLight light = u_PointLight[index];
  vec3 color = light.color;
  vec3 lightDir = normalize(light.position - position);
  float lightDot = max(dot(normal, lightDir), 0.0);
  return color * light.intensity * lightDot;
}
    `.render(ctx);
    }

    return tpl`
vec3 computePointLight(vec3 position, vec3 normal, int index) {
  return vec3(0.0);
}
  `.render(ctx);
  }
}

${
  // directional light
  ctx => {
    if (ctx.NUM_DIRECTIONAL_LIGHT > 0) {
      return tpl`
uniform DirectionalLight u_DirectionalLight[NUM_DIRECTIONAL_LIGHT];

vec3 computeDirectionalLight(vec3 position, vec3 normal, int index) {
  DirectionalLight light = u_DirectionalLight[index];
  vec3 color = light.color;
  vec3 lightDir = normalize(light.direction);
  float lightDot = max(dot(normal, lightDir), 0.0);
  return color * light.intensity * lightDot;
}
    `.render(ctx);
    }

    return tpl`
vec3 computeDirectionalLight(vec3 position, vec3 normal, int index) {
  return vec3(0.0);
}
  `.render(ctx);
  }
}
  `;

// 灯光定义
glsl.register('light.glsl', tpl`${ctx => (ctx.FRAGMENT_SHADER ? FRAG_LIGHT_GLSL.render(ctx) : '')}`);
