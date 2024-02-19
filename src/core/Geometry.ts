import { GeometryFactoryRegistry, IGeometryFactoryParameters, IGeometryFactoryNames } from '../GeometryFactoryRegistry';

export class Geometry {
  static create<K extends IGeometryFactoryNames>(name: K, opt: IGeometryFactoryParameters[K]) {
    const factory = GeometryFactoryRegistry.Instance.get(name);
    return factory(opt);
  }

  vertex: Float32Array = new Float32Array();
  element: Uint32Array = new Uint32Array();
  uv: Float32Array | null = null;

  clone() {
    const geo = new Geometry();
    geo.vertex = new Float32Array(this.vertex);
    geo.element = new Uint32Array(this.element);
    geo.uv = this.uv ? new Float32Array(this.uv) : null;
    return geo;
  }
}
