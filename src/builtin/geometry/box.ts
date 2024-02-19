// 注册 box 几何体

import { GeometryFactoryRegistry } from '../../GeometryFactoryRegistry';
import { Geometry } from '../../core/Geometry';

declare module '../../GeometryFactoryRegistry' {
  interface IGeometryFactoryParameters {
    box: {
      width: number;
      height: number;
      depth: number;
    };
  }
}

GeometryFactoryRegistry.Instance.register('box', opt => {
  const { width, height, depth } = opt;

  const hw = width / 2;
  const hh = height / 2;
  const hd = depth / 2;

  const geo = new Geometry();

  // prettier-ignore
  geo.vertex = new Float32Array([
    // 前面
    -hw, -hh, hd,   // 左下
     hw, -hh, hd,   // 右下
     hw,  hh, hd,   // 右上
    -hw,  hh, hd,   // 左上
  
    // 后面
    -hw, -hh, -hd,  // 左下
     hw, -hh, -hd,  // 右下
     hw,  hh, -hd,  // 右上
    -hw,  hh, -hd,  // 左上
  
    // 左侧
    -hw, -hh, -hd,  // 左下后
    -hw, -hh,  hd,  // 左下前
    -hw,  hh,  hd,  // 左上前
    -hw,  hh, -hd,  // 左上后
  
    // 右侧
     hw, -hh, -hd,  // 右下后
     hw, -hh,  hd,  // 右下前
     hw,  hh,  hd,  // 右上前
     hw,  hh, -hd,  // 右上后
  
    // 底部
    -hw, -hh, -hd,  // 左后
     hw, -hh, -hd,  // 右后
     hw, -hh,  hd,  // 右前
    -hw, -hh,  hd,  // 左前
  
    // 顶部
    -hw,  hh, -hd,  // 左后
     hw,  hh, -hd,  // 右后
     hw,  hh,  hd,  // 右前
    -hw,  hh,  hd,  // 左前
  ]);

  // prettier-ignore
  geo.element = new Uint32Array([
    // 前面
    0, 1, 2,
    0, 2, 3,
  
    // 后面
    4, 5, 6,
    4, 6, 7,
  
    // 左侧
    8, 9, 10,
    8, 10, 11,
  
    // 右侧
    12, 13, 14,
    12, 14, 15,
  
    // 底部
    16, 17, 18,
    16, 18, 19,
  
    // 顶部
    20, 21, 22,
    20, 22, 23,
  ]);

  return geo;
});
