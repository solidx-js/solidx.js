import { Vector3 } from 'tiny-math.js/dist/esm';
import { Light } from './Light';

export class DirectionalLight extends Light {
  direction = new Vector3(0, -1, 0);
  color = new Vector3(1, 1, 1);
  intensity = 1;
}
