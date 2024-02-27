#ifndef _BLINN_PHONG_
#define _BLINN_PHONG_

struct EnvInfo {
  mat4 worldMatrix;
  mat4 viewMatrix;
  mat4 projectionMatrix;

  vec3 eyePosition;
  vec3 position;
  vec3 normal;
  vec3 uv;
};

struct PhongArg {};
struct PhongRet {
  vec4 color;
};

void block_phong(EnvInfo env, PhongArg arg, PhongRet ret) {
  ret.color = vec4(1.0, 1.0, 1.0, 1.0);
}

#endif