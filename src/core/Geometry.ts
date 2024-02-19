import { GeometryFactoryRegistry, IGeometryFactoryParameters, IGeometryFactoryNames } from '../GeometryFactoryRegistry';

export class Geometry {
  static create<K extends IGeometryFactoryNames>(name: K, opt: IGeometryFactoryParameters[K]) {
    const factory = GeometryFactoryRegistry.Instance.get(name);
    return factory(opt);
  }

  vertex: Float32Array = new Float32Array();
  index: Uint32Array = new Uint32Array();
  uv: Float32Array | null = null;

  clone() {
    const geo = new Geometry();
    geo.vertex = new Float32Array(this.vertex);
    geo.index = new Uint32Array(this.index);
    geo.uv = this.uv ? new Float32Array(this.uv) : null;
    return geo;
  }
}
