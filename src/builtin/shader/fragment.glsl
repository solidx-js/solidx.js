precision mediump float;

// defines
#define FRAGMENT_SHADER

// includes
#include <_defines.glsl>;
#include <light.glsl>;

// uniforms
uniform mat4 u_worldMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;

// varyings
varying vec3 v_position;
varying vec3 v_normal;

#ifdef HAS_ATTR_UV
  varying vec2 v_uv;
#endif

#ifdef HAS_ATTR_COLOR
  varying vec4 v_color;
#else 
  vec4 v_color = vec4(0.0, 0.0, 0.0, 1.0);
#endif

void main() {
  vec4 finalColor = v_color;

  for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
    finalColor += computePointLight(v_position, v_normal, u_pointLights[i]);
  }

  for (int i = 0; i < NUM_DIRECTIONAL_LIGHTS; i++) {
    finalColor += computeDirectionalLight(v_position, v_normal, u_directionalLights[i]);
  }

  // finalColor = clamp(vec4(v_normal, 1), 0.0, 1.0);

  finalColor = clamp(finalColor, 0.0, 1.0);
  gl_FragColor = finalColor;
}