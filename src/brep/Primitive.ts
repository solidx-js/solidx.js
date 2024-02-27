import { Vector3 } from 'tiny-math.js/dist/esm';
import { Face, HalfEdge, Loop, Solid, Vertex } from './geo';

export class Primitive {
  static polygon(points: Vector3[]): Solid {
    const vs = points.map(p => Vertex.of(p.x, p.y, p.z));
    const hes: HalfEdge[] = vs.map(v => HalfEdge.of(v));

    // hes prev next
    for (let i = 0; i < hes.length; i++) {
      hes[i].prev = hes[(i - 1 + hes.length) % hes.length];
      hes[i].next = hes[(i + 1) % hes.length];
    }

    const loops: Loop[] = [Loop.of(hes[0])];
    const faces: Face[] = [Face.of(loops[0])];

    const solid = Solid.of(faces);
    solid.complete();

    return solid;
  }

  static box(opt: { size: Vector3 }): Solid {
    const size = opt.size;
    const hs = size.scale(0.5);

    // 创建顶点
    const vs = [
      // 底部
      Vertex.of(-hs.x, -hs.y, hs.z),
      Vertex.of(-hs.x, -hs.y, -hs.z),
      Vertex.of(hs.x, -hs.y, -hs.z),
      Vertex.of(hs.x, -hs.y, hs.z),
      // 顶部
      Vertex.of(-hs.x, hs.y, hs.z),
      Vertex.of(-hs.x, hs.y, -hs.z),
      Vertex.of(hs.x, hs.y, -hs.z),
      Vertex.of(hs.x, hs.y, hs.z),
    ];

    // 创建半边
    const hes: HalfEdge[] = [
      // bottom 0123
      HalfEdge.of(vs[0]), // 0
      HalfEdge.of(vs[1]),
      HalfEdge.of(vs[2]),
      HalfEdge.of(vs[3]),
      // top 7654
      HalfEdge.of(vs[7]), // 4
      HalfEdge.of(vs[6]),
      HalfEdge.of(vs[5]),
      HalfEdge.of(vs[4]),
      // left 7410
      HalfEdge.of(vs[7]), // 8
      HalfEdge.of(vs[4]),
      HalfEdge.of(vs[1]),
      HalfEdge.of(vs[0]),
      // right 5632
      HalfEdge.of(vs[5]), // 12
      HalfEdge.of(vs[6]),
      HalfEdge.of(vs[3]),
      HalfEdge.of(vs[2]),
      // front 4521
      HalfEdge.of(vs[4]), // 16
      HalfEdge.of(vs[5]),
      HalfEdge.of(vs[2]),
      HalfEdge.of(vs[1]),
      // back 6703
      HalfEdge.of(vs[6]), // 20
      HalfEdge.of(vs[7]),
      HalfEdge.of(vs[0]),
      HalfEdge.of(vs[3]),
    ];

    // 关联半边
    //#region
    // bottom
    hes[0].prev = hes[3];
    hes[1].prev = hes[0];
    hes[2].prev = hes[1];
    hes[3].prev = hes[2];
    hes[0].next = hes[1];
    hes[1].next = hes[2];
    hes[2].next = hes[3];
    hes[3].next = hes[0];
    hes[0].adjacent = hes[10];
    hes[1].adjacent = hes[18];
    hes[2].adjacent = hes[14];
    hes[3].adjacent = hes[22];

    // top
    hes[4].prev = hes[7];
    hes[5].prev = hes[4];
    hes[6].prev = hes[5];
    hes[7].prev = hes[6];
    hes[4].next = hes[5];
    hes[5].next = hes[6];
    hes[6].next = hes[7];
    hes[7].next = hes[4];
    hes[4].adjacent = hes[20];
    hes[5].adjacent = hes[12];
    hes[6].adjacent = hes[16];
    hes[7].adjacent = hes[8];

    // left
    hes[8].prev = hes[11];
    hes[9].prev = hes[8];
    hes[10].prev = hes[9];
    hes[11].prev = hes[10];
    hes[8].next = hes[9];
    hes[9].next = hes[10];
    hes[10].next = hes[11];
    hes[11].next = hes[8];
    hes[8].adjacent = hes[7];
    hes[9].adjacent = hes[19];
    hes[10].adjacent = hes[0];
    hes[11].adjacent = hes[21];

    // right
    hes[12].prev = hes[15];
    hes[13].prev = hes[12];
    hes[14].prev = hes[13];
    hes[15].prev = hes[14];
    hes[12].next = hes[13];
    hes[13].next = hes[14];
    hes[14].next = hes[15];
    hes[15].next = hes[12];
    hes[12].adjacent = hes[5];
    hes[13].adjacent = hes[23];
    hes[14].adjacent = hes[2];
    hes[15].adjacent = hes[17];

    // front
    hes[16].prev = hes[19];
    hes[17].prev = hes[16];
    hes[18].prev = hes[17];
    hes[19].prev = hes[18];
    hes[16].next = hes[17];
    hes[17].next = hes[18];
    hes[18].next = hes[19];
    hes[19].next = hes[16];
    hes[16].adjacent = hes[6];
    hes[17].adjacent = hes[15];
    hes[18].adjacent = hes[1];
    hes[19].adjacent = hes[9];
    //#endregion

    // 创建环
    const loops: Loop[] = [
      Loop.of(hes[0]), // bottom
      Loop.of(hes[4]), // top
      Loop.of(hes[8]), // left
      Loop.of(hes[12]), // right
      Loop.of(hes[16]), // front
      Loop.of(hes[20]), // back
    ];

    // 把半边关联到环
    for (let i = 0; i < hes.length; i++) {
      hes[i].loop = loops[Math.floor(i / 4)];
    }

    // 创建面
    const faces: Face[] = loops.map(l => Face.of(l));

    // 关联面到环
    for (let i = 0; i < faces.length; i++) {
      const face = faces[i];
      face.loop = loops[i];
      face.loop.face = face;
    }

    // 创建实体
    const solid = Solid.of(faces);

    return solid;
  }
}
