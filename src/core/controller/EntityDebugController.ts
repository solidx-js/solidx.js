import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Scene } from '@babylonjs/core/scene';
import { AxesViewer } from '@babylonjs/core/Debug/axesViewer';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { RayHelper } from '@babylonjs/core/Debug/rayHelper';
import { Ray } from '@babylonjs/core/Culling/ray';
import { Color3 } from '@babylonjs/core/Maths/math.color';

export class EntityInspectController implements ReactiveController {
  private _axesViewer: AxesViewer | null = null;
  private _rayHelper: RayHelper | null = null;

  constructor(private host: XRElement & { scene: Scene }) {
    this.host.addController(this);
  }

  get scene() {
    return this.host.scene;
  }

  get uLayer() {
    return this.scene.defaultUtilityLayer;
  }

  get uLayerScene() {
    return this.uLayer.utilityLayerScene;
  }

  private _disposeGizmos() {
    if (this._axesViewer) {
      this._axesViewer.dispose();
      this._axesViewer = null;
    }

    if (this._rayHelper) {
      this._rayHelper.dispose();
      this._rayHelper = null;
    }
  }

  hostUpdate(): void {
    const entity = this.host.entity;
    const inspect = this.host.inspect;

    if (entity && inspect) {
      // 基础参数
      const color = inspect.color || '#ff0000';

      const axesVisible = inspect.axes === 'true';
      const axesScale = parseFloat(inspect.axesScale || '1');

      // TransformNode
      if (entity instanceof TransformNode) {
        if (!this._axesViewer) this._axesViewer = new AxesViewer(this.uLayerScene, 1, 2);
        this._axesViewer.update(entity.absolutePosition, entity.right, entity.up, entity.forward);
        this._axesViewer.scaleLines = axesVisible ? axesScale : 0;
      }

      // Ray
      if (entity instanceof Ray) {
        if (!this._rayHelper) this._rayHelper = new RayHelper(entity);
        this._rayHelper.show(this.scene, Color3.FromHexString(color));
      }
    }

    //
    else {
      this._disposeGizmos();
    }
  }

  hostDisconnected(): void {
    this._disposeGizmos();
  }
}
