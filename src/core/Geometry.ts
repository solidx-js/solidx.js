import { Vector3 } from 'tiny-math.js/dist/esm';
import { GeometryFactoryRegistry, IGeometryFactoryParameters, IGeometryFactoryNames } from '../GeometryFactoryRegistry';

export class Geometry {
  static create<K extends IGeometryFactoryNames>(name: K, opt: IGeometryFactoryParameters[K]) {
    const factory = GeometryFactoryRegistry.Instance.get(name);
    return factory(opt);
  }

  vertices: Float32Array = new Float32Array();
  indices: Uint32Array = new Uint32Array();
  normals: Float32Array = new Float32Array();
  uvs: Float32Array | null = null;

  computeNormals() {
    const vertices = this.vertices;
    const indices = this.indices;

    const numVertices = vertices.length / 3;
    const numFaces = indices.length / 3;
    const normals = new Float32Array(numVertices * 3);
    const faceNormals = new Float32Array(numFaces * 3);

    // 初始化法线数组
    for (let i = 0; i < numVertices; i++) {
      normals[i * 3] = 0;
      normals[i * 3 + 1] = 0;
      normals[i * 3 + 2] = 0;
    }

    // 计算每个面的法线
    for (let i = 0; i < numFaces; i++) {
      const i1 = indices[i * 3];
      const i2 = indices[i * 3 + 1];
      const i3 = indices[i * 3 + 2];
      const v1 = new Vector3(vertices[i1 * 3], vertices[i1 * 3 + 1], vertices[i1 * 3 + 2]);
      const v2 = new Vector3(vertices[i2 * 3], vertices[i2 * 3 + 1], vertices[i2 * 3 + 2]);
      const v3 = new Vector3(vertices[i3 * 3], vertices[i3 * 3 + 1], vertices[i3 * 3 + 2]);

      // 计算边的向量
      const e1 = v2.subtract(v1);
      const e2 = v3.subtract(v1);

      // 计算面的法线
      const n = e1.cross(e2);

      // 保存面的法线
      faceNormals[i * 3] = n.x;
      faceNormals[i * 3 + 1] = n.y;
      faceNormals[i * 3 + 2] = n.z;

      // 累加顶点的法线
      normals[i1 * 3] += n.x;
      normals[i1 * 3 + 1] += n.y;
      normals[i1 * 3 + 2] += n.z;

      normals[i2 * 3] += n.x;
      normals[i2 * 3 + 1] += n.y;
      normals[i2 * 3 + 2] += n.z;

      normals[i3 * 3] += n.x;
      normals[i3 * 3 + 1] += n.y;
      normals[i3 * 3 + 2] += n.z;
    }

    // 归一化顶点的法线(对共享同一个顶点的所有三角形面的法线进行平均)
    for (let i = 0; i < numVertices; i++) {
      const nx = normals[i * 3];
      const ny = normals[i * 3 + 1];
      const nz = normals[i * 3 + 2];

      const length = Math.sqrt(nx * nx + ny * ny + nz * nz);

      if (length > 0) {
        normals[i * 3] = nx / length;
        normals[i * 3 + 1] = ny / length;
        normals[i * 3 + 2] = nz / length;
      }
    }

    this.normals = normals;
  }

  clone() {
    const geo = new Geometry();
    geo.vertices = new Float32Array(this.vertices);
    geo.indices = new Uint32Array(this.indices);
    geo.normals = new Float32Array(this.normals);
    geo.uvs = this.uvs ? new Float32Array(this.uvs) : null;
    return geo;
  }
}
