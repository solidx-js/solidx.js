import { Vector3 } from 'tiny-math.js/dist/esm';
import { Light } from './Light';

export class PointLight extends Light {
  color = new Vector3(1, 1, 1);
  intensity = 1;
}
