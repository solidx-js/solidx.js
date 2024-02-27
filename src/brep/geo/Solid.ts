import { Face } from './Face';

export class Solid {
  static of(faces: Face[]): Solid {
    const s = new Solid();
    s.faces = faces;
    return s;
  }

  // 包含的所有面
  faces: Face[] = [];

  /** 补全反向关系 */
  complete() {
    this.faces.forEach(f => f.complete(this));
  }
}
