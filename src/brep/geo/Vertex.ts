import { Vector3 } from 'tiny-math.js/dist/esm';
import { HalfEdge } from './HalfEdge';

/** 顶点 */
export class Vertex {
  static of(x: number, y: number, z: number) {
    const v = new Vertex();
    v.point = new Vector3(x, y, z);
    return v;
  }

  point!: Vector3;
  halfEdge: HalfEdge | null = null;
}
