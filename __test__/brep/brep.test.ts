/// <reference types="@types/jest" />

import { Vector3 } from 'tiny-math.js/dist/esm';
import { Primitive, Algorithm } from '../../src/brep';

it('polygon triangulate', () => {
  const polygon = Primitive.polygon([new Vector3(0, 0, 0), new Vector3(1, 0, 0), new Vector3(1, 1, 0), new Vector3(0, 1, 0)]);

  const t = Algorithm.triangulate(polygon.faces[0]);
  expect(t.index).toEqual([2, 3, 0, 0, 1, 2]);
  expect(t.buffer).toEqual([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]);
});
