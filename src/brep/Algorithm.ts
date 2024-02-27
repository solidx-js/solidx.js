import { Face, Solid } from './geo';
import earcut from 'earcut';

export type ITriangulateInfo = {
  index: number[];
  buffer: number[];
};

export class Algorithm {
  static triangulate<T extends Face | Face[] | Solid | Solid[]>(target: T): ITriangulateInfo {
    const _merge = (list: ITriangulateInfo[]): ITriangulateInfo => {
      const index: number[] = [];
      const buffer: number[] = [];

      for (let i = 0; i < list.length; i++) {
        const { index: _index, buffer: _buffer } = list[i];
        const offset = buffer.length / 3;

        for (let j = 0; j < _index.length; j++) {
          index.push(_index[j] + offset);
        }

        buffer.push(..._buffer);
      }

      return { index, buffer };
    };

    if (target instanceof Face) {
      const vertices = target.loop.halfEdge?.getVertices();
      if (!vertices) throw new Error('missing vertices');
      if (vertices.length < 3) throw new Error('vertices length must be greater than 3, now is ' + vertices.length);

      const buffer: number[] = [];
      const pss: number[][] = [[], [], []];

      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i].point;
        buffer.push(v.x, v.y, v.z);
        pss[0].push(v.x, v.y);
        pss[1].push(v.x, v.z);
        pss[2].push(v.y, v.z);
      }

      // 求 pss 方差
      const psVariances: number[][] = [];

      for (let i = 0; i < pss.length; i++) {
        const ps = pss[i];
        let sumX = 0;
        let sumY = 0;

        for (let j = 0; j < ps.length; j += 2) {
          sumX += ps[j];
          sumY += ps[j + 1];
        }

        const meanX = sumX / (ps.length / 2);
        const meanY = sumY / (ps.length / 2);

        // 方差
        let varianceX = 0;
        let varianceY = 0;

        for (let j = 0; j < ps.length; j += 2) {
          varianceX += Math.pow(ps[j] - meanX, 2);
          varianceY += Math.pow(ps[j + 1] - meanY, 2);
        }

        varianceX /= ps.length / 2;
        varianceY /= ps.length / 2;

        psVariances.push([varianceX, varianceY]);
      }

      let maxVarIndex = 0;
      let maxVar = 0;

      for (let i = 0; i < psVariances.length; i++) {
        const _s = psVariances[i][0] + psVariances[i][1];
        if (_s > maxVar) {
          maxVar = _s;
          maxVarIndex = i;
        }
      }

      const points = pss[maxVarIndex];
      const index = earcut(points);

      return { index, buffer };
    }

    if (Array.isArray(target) && target.length && target[0] instanceof Face) {
      return _merge(target.map(face => this.triangulate(face)));
    }

    if (target instanceof Solid) return this.triangulate(target.faces);

    if (Array.isArray(target) && target.length && target[0] instanceof Solid) {
      return _merge(target.map(solid => this.triangulate(solid)));
    }

    throw new Error('Unsupported target');
  }
}
