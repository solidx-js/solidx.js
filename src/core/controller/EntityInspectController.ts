import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Scene } from '@babylonjs/core/scene';
import { AxesViewer } from '@babylonjs/core/Debug/axesViewer';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { RayHelper } from '@babylonjs/core/Debug/rayHelper';
import { Ray } from '@babylonjs/core/Culling/ray';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Light } from '@babylonjs/core/Lights/light';
import { LightGizmo } from '@babylonjs/core/Gizmos/lightGizmo';
import { Tags } from '@babylonjs/core/Misc/tags';

export class EntityInspectController implements ReactiveController {
  private _axesViewer: AxesViewer | null = null;
  private _rayHelper: RayHelper | null = null;
  private _lightGizmo: LightGizmo | null = null;

  constructor(private host: XRElement & { scene?: Scene }) {
    this.host.addController(this);
  }

  get scene() {
    return this.host.scene;
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

    if (this._lightGizmo) {
      this._lightGizmo.dispose();
      this._lightGizmo = null;
    }
  }

  hostUpdate(): void {
    if (!this.scene) return;

    const entity = this.host.entity;
    const inspect = this.host.evaluated.inspect;

    if (entity && inspect) {
      const uLayer = this.scene.defaultUtilityLayer;
      const uLayerScene = uLayer.utilityLayerScene;

      // 基础参数
      const color = inspect.color || '#ff0000';
      const scale = parseFloat(inspect.scale || '1');

      const axesVisible = inspect.axes === 'false' ? false : true;

      // TransformNode
      if (entity instanceof TransformNode) {
        if (!this._axesViewer) this._axesViewer = new AxesViewer(uLayerScene, 1, 2);

        entity.computeWorldMatrix(true);
        this._axesViewer.update(entity.absolutePosition, entity.right, entity.up, entity.forward);
        this._axesViewer.scaleLines = axesVisible ? scale : 0;
      }

      // Ray
      if (entity instanceof Ray) {
        if (!this._rayHelper) this._rayHelper = new RayHelper(entity);
        this._rayHelper.show(this.scene, Color3.FromHexString(color));
      }

      // Light
      if (entity instanceof Light) {
        if (!this._lightGizmo) this._lightGizmo = new LightGizmo(uLayer);
        this._lightGizmo.light = entity;
        this._lightGizmo.scaleRatio = scale;
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
