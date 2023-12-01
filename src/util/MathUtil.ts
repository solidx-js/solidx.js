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
};
