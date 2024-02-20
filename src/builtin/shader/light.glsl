#ifndef _LIGHT_
#define _LIGHT_

#ifndef NUM_POINT_LIGHTS
  #define NUM_POINT_LIGHTS 0
#endif

#ifndef NUM_DIRECTIONAL_LIGHTS
  #define NUM_DIRECTIONAL_LIGHTS 0
#endif

#ifdef FRAGMENT_SHADER

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

  #if NUM_POINT_LIGHTS > 0
    uniform PointLight u_pointLights[NUM_POINT_LIGHTS];

    vec4 computePointLight(vec3 position, vec3 normal, PointLight light) {
      vec3 color = light.color;
      vec3 ray = light.position - position;
      vec3 lightDir = normalize(ray);
      float lightDot = max(dot(normal, lightDir), 0.0);
      return vec4(color * light.intensity * lightDot, 0.0);
    }

  #else
    vec4 computePointLight(vec3 position, vec3 normal, PointLight light) {
      return vec4(0.0);
    }
  #endif // NUM_POINT_LIGHTS

  #if NUM_DIRECTIONAL_LIGHTS > 0
    uniform DirectionalLight u_directionalLights[NUM_DIRECTIONAL_LIGHTS];

    vec4 computeDirectionalLight(vec3 position, vec3 normal, DirectionalLight light) {
      vec3 color = light.color;
      vec3 lightDir = normalize(-light.direction);
      float lightDot = max(dot(normal, lightDir), 0.0);
      return vec4(color * light.intensity * lightDot, 0.0);
    }
  #else
    vec4 computeDirectionalLight(vec3 position, vec3 normal, DirectionalLight light) {
      return vec4(0.0);
    }
  #endif // NUM_DIRECTIONAL_LIGHTS

#endif // FRAGMENT_SHADER

#endif