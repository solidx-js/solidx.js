import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { TemplateResult, html } from 'lit';
import { Decorator } from '../Decorator';
import { PositionGizmo } from '@babylonjs/core/Gizmos/positionGizmo';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Matrix, Quaternion, TmpVectors, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { state } from 'lit/decorators.js';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { TagRefController, TickController } from '../controller';
import { RotationGizmo } from '@babylonjs/core/Gizmos/rotationGizmo';
import { ScaleGizmo } from '@babylonjs/core/Gizmos/scaleGizmo';
import { ITransformNodeLikeImpl } from '../impl';

type IDragStartInfo = {
  type: 'position' | 'rotation' | 'scale';
  activeAxis: 'x' | 'y' | 'z';
  matrix: Matrix;
};

export class XRDragger extends XRSceneScopeElement<TransformNode> {
  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 = Vector3.One();

  @Decorator.property('Boolean', 'enable-position', false)
  enablePosition: boolean = false;

  @Decorator.property('Boolean', 'enable-rotation', false)
  enableRotation: boolean = false;

  @Decorator.property('Boolean', 'enable-scale', false)
  enableScale: boolean = false;

  @Decorator.property('String', 'target', null)
  target: string | null = null;

  @state()
  private _dragStartInfo: IDragStartInfo | null = null;

  @state()
  _target: ITransformNodeLikeImpl | null = null;

  private _rotEntity: Mesh | null = null; // 用于旋转的 host
  private _posScaleEntity: Mesh | null = null; // 用于平移和缩放的 host

  private _posGiz: PositionGizmo | null = null;
  private _rotGiz: RotationGizmo | null = null;
  private _scaleGiz: ScaleGizmo | null = null;

  constructor() {
    super();

    new TagRefController(this, 'target', '_target', null);
    new TickController(this, this._onTick);
  }

  connected(): void {
    super.connected();

    this.entity = new TransformNode(this.id, this.scene);
    this.entity.rotationQuaternion = Quaternion.Identity();

    this._rotEntity = new Mesh(this.id + '-rot-host', this.scene);
    this._rotEntity.parent = this.entity;
    this._rotEntity.rotationQuaternion = Quaternion.Identity();
    this._rotEntity.visibility = 0.5;
    this._rotEntity.showBoundingBox = true;

    this._posScaleEntity = new Mesh(this.id + '-pos-scale-host', this.scene);
    this._posScaleEntity.parent = this.entity;
    this._posScaleEntity.rotationQuaternion = Quaternion.Identity();
    this._posScaleEntity.visibility = 0.5;
    this._posScaleEntity.showBoundingBox = true;
  }

  disconnected(): void {
    super.disconnected();

    if (this._posGiz) {
      this._posGiz.dispose();
      this._posGiz = null;
    }

    if (this._rotGiz) {
      this._rotGiz.dispose();
      this._rotGiz = null;
    }

    if (this._scaleGiz) {
      this._scaleGiz.dispose();
      this._scaleGiz = null;
    }

    this.entity?.dispose();
    this.entity = null;

    this._rotEntity?.dispose();
    this._rotEntity = null;

    this._posScaleEntity?.dispose();
    this._posScaleEntity = null;
  }

  private _onTick = () => {
    // 拖拽中
    if (this._dragStartInfo && this.entity && this._rotEntity && this._posScaleEntity && this._target && this._target.entity) {
      const _targetEntity = this._target.entity;

      const wPosition = TmpVectors.Vector3[0];
      const wRotation = TmpVectors.Quaternion[0];
      const wScale = TmpVectors.Vector3[1];

      wRotation.copyFrom(this._rotEntity.absoluteRotationQuaternion);
      wPosition.copyFrom(this._posScaleEntity.absolutePosition);
      wScale.copyFrom(this._posScaleEntity.absoluteScaling);

      const world = TmpVectors.Matrix[0];
      Matrix.ComposeToRef(wScale, wRotation, wPosition, world);

      // 让 target 跟着拖动
      const parentWorld = _targetEntity.parent ? _targetEntity.parent.getWorldMatrix() : Matrix.IdentityReadOnly;

      const parentInverse = TmpVectors.Matrix[1];
      parentWorld.invertToRef(parentInverse);

      const local = TmpVectors.Matrix[2];
      world.multiplyToRef(parentInverse, local);

      const lPosition = TmpVectors.Vector3[2];
      const lRotation = TmpVectors.Quaternion[1];
      const lScale = TmpVectors.Vector3[3];

      local.decompose(lScale, lRotation, lPosition);

      // 作为 props 设置到 target element 上
      if (!this._target.position.equals(lPosition)) this._target.position = lPosition.clone();
      if (!this._target.scale.equals(lScale)) this._target.scale = lScale.clone();

      if (this._target.quaternion) {
        if (!this._target.quaternion.equals(lRotation)) this._target.quaternion = lRotation.clone();
      } else {
        const lRotationEuler = lRotation.toEulerAngles().scaleInPlace(180 / Math.PI);
        if (!this._target.rotation.equals(lRotationEuler)) this._target.rotation = lRotationEuler.clone();
      }

      (this._target as any).performUpdate(); // immediately process a pending update

      // 协调旋转和平移的节点

      if (this._dragStartInfo.type === 'rotation') {
        this._posScaleEntity.rotationQuaternion!.copyFrom(this._rotEntity.rotationQuaternion!);
      } else if (this._dragStartInfo.type === 'position') {
        this._rotEntity.position.copyFrom(this._posScaleEntity.position);
      }
    }

    // 没有拖拽中
    if (!this._dragStartInfo) {
      this._resetCursorTransform();
    }
  };

  private _startDrag = (data: IDragStartInfo) => {
    if (!this._target || !this._target.entity) return;
    this._dragStartInfo = data;
  };

  private _endDrag = () => {
    this._dragStartInfo = null;
    this._resetCursorTransform();
  };

  private _resetCursorTransform() {
    if (this.entity && this._rotEntity && this._posScaleEntity && this._target && this._target.entity) {
      const world = this._target.entity.getWorldMatrix();

      const position = Vector3.Zero();
      const rotation = Quaternion.Identity();
      const scale = Vector3.One();
      world.decompose(scale, rotation, position);

      this._rotEntity.resetLocalMatrix();
      this._posScaleEntity.resetLocalMatrix();

      this.entity.position.copyFrom(position);
      this.entity.rotationQuaternion!.copyFrom(rotation);
      this.entity.scaling.setAll(1);

      this._posScaleEntity.scaling.copyFrom(scale); // 把 scale 应用到 posScaleEntity 上
    }
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity || !this._rotEntity || !this._posScaleEntity) return;

    const rotEntity = this._rotEntity;
    const posScaleEntity = this._posScaleEntity;

    // position
    if (changed.has('enablePosition')) {
      if (this.evaluated.enablePosition && !this._posGiz) {
        const _giz = new PositionGizmo(this.scene.defaultUtilityLayerWithEvents);
        this._posGiz = _giz;

        _giz.attachedMesh = posScaleEntity;

        _giz.onDragStartObservable.add(() => {
          this._startDrag({
            type: 'position',
            activeAxis: _giz.xGizmo.isHovered ? 'x' : _giz.yGizmo.isHovered ? 'y' : 'z',
            matrix: posScaleEntity.getWorldMatrix().clone(),
          });
        });
        _giz.onDragEndObservable.add(() => this._endDrag());
      }

      if (!this.evaluated.enablePosition && this._posGiz) {
        this._posGiz.dispose();
        this._posGiz = null;
      }
    }

    // rotation
    if (changed.has('enableRotation')) {
      if (this.evaluated.enableRotation && !this._rotGiz) {
        const _giz = new RotationGizmo(this.scene.defaultUtilityLayerWithEvents);
        this._rotGiz = _giz;

        _giz.updateGizmoRotationToMatchAttachedMesh;
        _giz.attachedMesh = rotEntity;

        _giz.onDragStartObservable.add(() => {
          this._startDrag({
            type: 'rotation',
            activeAxis: _giz.xGizmo.isHovered ? 'x' : _giz.yGizmo.isHovered ? 'y' : 'z',
            matrix: rotEntity.getWorldMatrix().clone(),
          });
        });
        _giz.onDragEndObservable.add(() => this._endDrag());
      }

      if (!this.evaluated.enableRotation && this._rotGiz) {
        this._rotGiz.dispose();
        this._rotGiz = null;
      }
    }

    // scale
    if (changed.has('enableScale')) {
      if (this.evaluated.enableScale && !this._scaleGiz) {
        const _giz = new ScaleGizmo(this.scene.defaultUtilityLayerWithEvents);
        this._scaleGiz = _giz;

        _giz.attachedMesh = posScaleEntity;

        _giz.onDragStartObservable.add(() => {
          this._startDrag({
            type: 'scale',
            activeAxis: _giz.xGizmo.isHovered ? 'x' : _giz.yGizmo.isHovered ? 'y' : 'z',
            matrix: posScaleEntity.getWorldMatrix().clone(),
          });
        });
        _giz.onDragEndObservable.add(() => this._endDrag());
      }

      if (!this.evaluated.enableScale && this._scaleGiz) {
        this._scaleGiz.dispose();
        this._scaleGiz = null;
      }
    }

    if (changed.has('scale')) {
      if (this._posGiz) {
        this._posGiz.xGizmo.scaleRatio = this.evaluated.scale.x;
        this._posGiz.yGizmo.scaleRatio = this.evaluated.scale.y;
        this._posGiz.zGizmo.scaleRatio = this.evaluated.scale.z;
      }

      if (this._scaleGiz) {
        this._scaleGiz.xGizmo.scaleRatio = this.evaluated.scale.x * 1.1;
        this._scaleGiz.yGizmo.scaleRatio = this.evaluated.scale.y * 1.1;
        this._scaleGiz.zGizmo.scaleRatio = this.evaluated.scale.z * 1.1;
      }

      if (this._rotGiz) {
        this._rotGiz.xGizmo.scaleRatio = this.evaluated.scale.x;
        this._rotGiz.yGizmo.scaleRatio = this.evaluated.scale.y;
        this._rotGiz.zGizmo.scaleRatio = this.evaluated.scale.z;
      }
    }

    if (changed.has('_target')) {
      this._resetCursorTransform();
    }
  }

  render() {
    if (!this._dragStartInfo) return;

    const { type, activeAxis } = this._dragStartInfo;

    let line: TemplateResult | null = null;

    if (type === 'position') {
      const points: Vector3[] = [];
      let color: string = '#ffffff';

      const far = this.scene.activeCamera!.maxZ * 2;

      if (activeAxis === 'x') {
        points.push(new Vector3(-far, 0, 0), new Vector3(far, 0, 0));
        color = '#ff000080';
      }
      if (activeAxis === 'y') {
        points.push(new Vector3(0, -far, 0), new Vector3(0, far, 0));
        color = '#00ff0080';
      }
      if (activeAxis === 'z') {
        points.push(new Vector3(0, 0, -far), new Vector3(0, 0, far));
        color = '#0000ff80';
      }

      line = html`<xr-line layer="1" points="${points.map(p => p.asArray().join(' ')).join(', ')}" colors="${color}"></xr-line>`;
    }

    return html`${line}`;
  }
}
