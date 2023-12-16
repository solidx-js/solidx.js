import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { TemplateResult, html } from 'lit';
import { Decorator } from '../Decorator';
import { PositionGizmo } from '@babylonjs/core/Gizmos/positionGizmo';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { state } from 'lit/decorators.js';

export class XRDragger extends XRSceneScopeElement<Mesh> {
  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation = Vector3.Zero();

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale = Vector3.One();

  @Decorator.property('Boolean', 'enable-position', false)
  enablePosition!: Boolean;

  @state()
  private _dragStartInfo: {
    type: 'position' | 'rotation' | 'scale';
    activeAxis: 'x' | 'y' | 'z';
  } | null = null;

  private _posGiz: PositionGizmo | null = null;

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
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('enablePosition')) {
      if (this.evaluated.enablePosition && !this._posGiz) {
        const _giz = new PositionGizmo(this.scene.defaultUtilityLayerWithEvents);
        this._posGiz = _giz;

        _giz.attachedMesh = this.entity;

        _giz.onDragStartObservable.add(() => {
          this._dragStartInfo = { type: 'position', activeAxis: _giz.xGizmo.isHovered ? 'x' : _giz.yGizmo.isHovered ? 'y' : 'z' };
        });
        _giz.onDragEndObservable.add(() => {
          this._dragStartInfo = null;
        });
      }

      if (!this.evaluated.enablePosition && this._posGiz) {
        this._posGiz.dispose();
        this._posGiz = null;
      }
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
        color = '#ff0000';
      }
      if (activeAxis === 'y') {
        points.push(new Vector3(0, -far, 0), new Vector3(0, far, 0));
        color = '#00ff00';
      }
      if (activeAxis === 'z') {
        points.push(new Vector3(0, 0, -far), new Vector3(0, 0, far));
        color = '#0000ff';
      }

      console.log('@@@', 'points ->', points);

      line = html`<xr-line points="${points.map(p => p.asArray().join(' ')).join(', ')}" colors="${color}"></xr-line>`;
    }

    return html`${line}`;
  }
}
