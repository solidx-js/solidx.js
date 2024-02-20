// defines
#define VERTEX_SHADER

// includes
#include <_defines.glsl>;
#include <light.glsl>;

// attributes
attribute vec3 a_position;
attribute vec3 a_normal;

#ifdef HAS_ATTR_UV
  attribute vec2 a_uv;
#endif

#ifdef HAS_ATTR_COLOR
  attribute vec4 a_color;
#endif

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
#endif

void main() {
  v_position = (u_worldMatrix * vec4(a_position, 1.0)).xyz;
  v_normal = normalize((u_worldMatrix * vec4(a_normal, 1.0)).xyz);

  #ifdef HAS_ATTR_UV
    v_uv = a_uv;
  #endif

  #ifdef HAS_ATTR_COLOR
    v_color = a_color;
  #endif

  gl_Position = u_projectionMatrix * u_viewMatrix * u_worldMatrix * vec4(a_position, 1.0);
}