import { Matrix } from 'tiny-math.js/dist/esm';
import { Camera } from './Camera';

/** 
 * 透视相机
 */
export class PerspectiveCamera extends Camera {
  fov = 45;
  near = 0.1;
  far = 1000;
  aspect = 1;

  computeProjectionMatrix() {
    this.projectionMatrix = Matrix.Perspective(this.fov, this.aspect, this.near, this.far);
  }
}
