import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { TemplateResult, html } from 'lit';
import { Decorator } from '../Decorator';
import { PositionGizmo } from '@babylonjs/core/Gizmos/positionGizmo';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { state } from 'lit/decorators.js';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { RefController2, RefController3, TickController } from '../controller';
import { RotationGizmo } from '@babylonjs/core/Gizmos/rotationGizmo';
import { XRMesh, XRNode } from '../mesh';

type IDragStartInfo = {
  type: 'position' | 'rotation' | 'scale';
  activeAxis: 'x' | 'y' | 'z';
  matrix: Matrix;
};

export class XRDragger extends XRSceneScopeElement<Mesh> {
  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation = Vector3.Zero();

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale = Vector3.One();

  @Decorator.property('Boolean', 'enable-position', false)
  enablePosition!: Boolean;

  @Decorator.property('Boolean', 'enable-rotation', false)
  enableRotation!: Boolean;

  @Decorator.property('String', 'target', null)
  target!: string | null;

  @state()
  private _dragStartInfo: IDragStartInfo | null = null;

  @state()
  _target: XRMesh | XRNode | null = null;

  private _posGiz: PositionGizmo | null = null;
  private _rotGiz: RotationGizmo | null = null;

  constructor() {
    super();

    RefController3.create<XRMesh | XRNode>()(this, 'target', '_target');
    new TickController(this, this._duringDrag);
  }

  connected(): void {
    super.connected();

    this.entity = new Mesh(this.id, this.scene);
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;

    if (this._posGiz) {
      this._posGiz.dispose();
      this._posGiz = null;
    }

    if (this._rotGiz) {
      this._rotGiz.dispose();
      this._rotGiz = null;
    }
  }

  private _duringDrag = () => {
    if (!this._dragStartInfo || !this.entity || !this._target) return;

    const _targetEntity = this._target.entity;
    if (!_targetEntity) return;

    // 让 target 跟着拖动
    const world = this.entity.getWorldMatrix();
    const parent = _targetEntity.parent ? _targetEntity.parent.getWorldMatrix() : Matrix.Identity();
    const local = world.multiply(Matrix.Invert(parent));

    local.decomposeToTransformNode(_targetEntity);
  };

  private _startDrag = (data: IDragStartInfo) => {
    if (!this._target || !this._target.entity) return;
    this._dragStartInfo = data;
  };

  private _endDrag = () => {
    this._dragStartInfo = null;
  };

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    const entity = this.entity;

    if (changed.has('enablePosition')) {
      if (this.evaluated.enablePosition && !this._posGiz) {
        const _giz = new PositionGizmo(this.scene.defaultUtilityLayerWithEvents);
        this._posGiz = _giz;

        _giz.attachedMesh = entity;

        _giz.onDragStartObservable.add(() => {
          this._startDrag({
            type: 'position',
            activeAxis: _giz.xGizmo.isHovered ? 'x' : _giz.yGizmo.isHovered ? 'y' : 'z',
            matrix: entity.getWorldMatrix().clone(),
          });
        });
        _giz.onDragEndObservable.add(() => this._endDrag());
      }

      if (!this.evaluated.enablePosition && this._posGiz) {
        this._posGiz.dispose();
        this._posGiz = null;
      }
    }

    if (changed.has('enableRotation')) {
      if (this.evaluated.enableRotation && !this._rotGiz) {
        const _giz = new RotationGizmo(this.scene.defaultUtilityLayerWithEvents);
        this._rotGiz = _giz;

        _giz.attachedMesh = entity;

        _giz.onDragStartObservable.add(() => {
          this._startDrag({
            type: 'rotation',
            activeAxis: _giz.xGizmo.isHovered ? 'x' : _giz.yGizmo.isHovered ? 'y' : 'z',
            matrix: entity.getWorldMatrix().clone(),
          });
        });
        _giz.onDragEndObservable.add(() => this._endDrag());
      }

      if (!this.evaluated.enableRotation && this._rotGiz) {
        this._rotGiz.dispose();
        this._rotGiz = null;
      }
    }

    if (changed.has('_target') && this._target && this._target.entity) {
      this._target.entity.getWorldMatrix().decomposeToTransformNode(entity);
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
