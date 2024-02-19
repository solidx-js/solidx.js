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
    hw, hh, hd,
    hw, hh, -hd,
    -hw, hh, -hd,
    -hw, hh, hd,
    hw, -hh, hd,
    hw, -hh, -hd,
    -hw, -hh, -hd,
    -hw, -hh, hd,
  ]);
  geo.element = new Uint32Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15]);

  return geo;
});
