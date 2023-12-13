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

export class EntityInspectController implements ReactiveController {
  private _axesViewer: AxesViewer | null = null;
  private _rayHelper: RayHelper | null = null;
  private _lightGizmo: LightGizmo | null = null;

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

    if (this._lightGizmo) {
      this._lightGizmo.dispose();
      this._lightGizmo = null;
    }
  }

  hostUpdate(): void {
    const entity = this.host.entity;
    const inspect = this.host.inspect;

    if (entity && inspect) {
      // 基础参数
      const color = inspect.color || '#ff0000';
      const scale = parseFloat(inspect.scale || '1');

      const axesVisible = inspect.axes === 'true';

      // TransformNode
      if (entity instanceof TransformNode) {
        if (!this._axesViewer) this._axesViewer = new AxesViewer(this.uLayerScene, 1, 2);
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
        if (!this._lightGizmo) this._lightGizmo = new LightGizmo(this.uLayer);
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
