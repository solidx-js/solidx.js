import { HalfEdge } from './HalfEdge';
import { Face } from './Face';

export class Loop {
  static of(halfEdge: HalfEdge): Loop {
    const l = new Loop();
    l.halfEdge = halfEdge;
    return l;
  }

  // 首边
  halfEdge: HalfEdge | null = null;

  // 所属面
  face: Face | null = null;

  complete(face: Face) {
    this.face = face;
    if (this.halfEdge) this.halfEdge.complete(this);
  }
}
