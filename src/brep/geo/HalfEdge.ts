import { Vertex } from './Vertex';
import { Loop } from './Loop';

export class HalfEdge {
  static of(vertex: Vertex) {
    const he = new HalfEdge();
    he.vertex = vertex;
    return he;
  }

  vertex!: Vertex;

  prev: HalfEdge | null = null;
  next: HalfEdge | null = null;

  // 相邻半边
  adjacent: HalfEdge | null = null;

  // 所属环
  loop: Loop | null = null;

  walk(cb: (e: HalfEdge) => any) {
    const maxCount = 1e6;

    let count = 0;
    let cur: HalfEdge | null = this;

    while (cur) {
      cb(cur);

      if (cur.next === this) break;
      cur = cur.next;

      count += 1;
      if (count > maxCount) throw new Error('Infinite loop');
    }
  }

  /** 获取循环顶点 */
  getVertices(): Vertex[] {
    const vs: Vertex[] = [];
    this.walk(e => vs.push(e.vertex));
    return vs;
  }

  complete(loop: Loop) {
    this.walk(e => {
      e.loop = loop;
    });
  }
}
