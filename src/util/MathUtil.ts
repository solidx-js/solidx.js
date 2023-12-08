import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';

export const MathUtil = {
  /** 求最大最小值 */
  minmax<T extends any>(list: T[], mapper: (v: T) => number) {
    let min = Infinity;
    let max = -Infinity;

    for (const item of list) {
      const v = mapper(item);
      if (v < min) min = v;
      if (v > max) max = v;
    }

    return [min, max];
  },

  /** 四元数 转 轴角 */
  calcRotAxisAngle(rotQuat: Quaternion) {
    const radian = Math.acos(rotQuat.w) * 2;
    const axis = new Vector3(rotQuat.x, rotQuat.y, rotQuat.z).normalize();
    let angle = (180 / Math.PI) * radian;

    // 修正角度, 使其在 0 ~ 180 之间
    if (angle > 180) {
      angle = 360 - angle;
      axis.scaleInPlace(-1);
    }

    return { axis, angle };
  },
};
