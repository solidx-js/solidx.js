import { Loop } from './Loop';
import { Solid } from './Solid';

export class Face {
  static of(loop: Loop): Face {
    const f = new Face();
    f.loop = loop;
    return f;
  }

  // 外部环, 表示面的边界
  loop!: Loop;

  // 内部环, 表示面的孔
  innerLoops: Loop[] = [];

  // 所属固体
  solid: Solid | null = null;

  complete(solid: Solid) {
    this.solid = solid;

    this.loop.complete(this);
  }
}
