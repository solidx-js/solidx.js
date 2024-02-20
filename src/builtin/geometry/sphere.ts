// 注册 sphere 几何体

import { Matrix, Quaternion, Vector3 } from 'tiny-math.js/dist/esm';
import { GeometryFactoryRegistry } from '../../GeometryFactoryRegistry';
import { Geometry } from '../../core/Geometry';

declare module '../../GeometryFactoryRegistry' {
  interface IGeometryFactoryParameters {
    sphere: {
      diameter?: number;
    };
  }
}

GeometryFactoryRegistry.Instance.register('sphere', opt => {
  const { diameter = 1 } = opt;
  const radius = new Vector3(diameter / 2, diameter / 2, diameter / 2);

  const { vertices, indices } = generateSphereVerticesAndIndices(radius, 32, 32);

  // Result
  const geo = new Geometry();

  geo.indices = new Uint32Array(indices);
  geo.vertices = new Float32Array(vertices);
  geo.computeNormals();

  return geo;
});

function generateSphereVerticesAndIndices(radius: Vector3, latSegments: number, longSegments: number) {
  const vertices = [];
  const indices = [];
  const latStep = Math.PI / latSegments;
  const longStep = (2 * Math.PI) / longSegments;

  for (let latIndex = 0; latIndex <= latSegments; latIndex++) {
    const theta = latIndex * latStep;
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    for (let longIndex = 0; longIndex <= longSegments; longIndex++) {
      const phi = longIndex * longStep;
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      // 计算顶点坐标
      const x = radius.x * sinTheta * cosPhi;
      const y = radius.y * sinTheta * sinPhi;
      const z = radius.z * cosTheta;

      vertices.push(x, y, z);
    }
  }

  for (let latIndex = 0; latIndex < latSegments; latIndex++) {
    for (let longIndex = 0; longIndex < longSegments; longIndex++) {
      const first = latIndex * (longSegments + 1) + longIndex;
      const second = first + longSegments + 1;

      indices.push(first, second, first + 1);
      indices.push(second, second + 1, first + 1);
    }
  }

  return { vertices, indices };
}
