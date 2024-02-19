import { Matrix } from 'tiny-math.js/dist/esm';
import { Camera } from './Camera';

export class OrthographicCamera extends Camera {
  left = -10;
  right = 10;
  top = 10;
  bottom = -10;
  near = 0.1;
  far = 1000;

  computeProjectionMatrix() {
    this.projectionMatrix = Matrix.Orthographic(this.left, this.right, this.bottom, this.top, this.near, this.far);
  }
}
