import { Matrix, Vector3 } from 'tiny-math.js/dist/esm';
import { Node } from './Node';

// 相机基类
export class Camera extends Node {
  // 相机默认位于世界坐标原点，看向 +Z 轴方向
  upVec = new Vector3(0, 1, 0);
  lookVec = new Vector3(0, 0, 1);

  // 观察矩阵
  private _viewMatrix = Matrix.Identity();

  // 投影矩阵
  projectionMatrix = Matrix.Identity();

  get viewMatrix() {
    return this._viewMatrix;
  }

  /** @override */
  computeProjectionMatrix() {
    throw new Error('Method not implemented.');
  }

  computeViewMatrix() {
    super.computeWorldMatrix(true);

    const _eye = this.worldMatrix.getTranslation();
    this._viewMatrix = Matrix.LookAt(_eye, this.lookVec, this.upVec);
  }
}
