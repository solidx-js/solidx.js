import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { CreateLines } from '@babylonjs/core/Meshes/Builders/linesBuilder';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Decorator } from '../Decorator';
import { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
import { Color4 } from '@babylonjs/core/Maths/math';
import { ElementUtil } from '../../util';

export class XRLine extends XRSceneScopeElement<LinesMesh> {
  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position!: Vector3;

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation!: Vector3;

  @Decorator.property('String', 'points', '')
  points!: string;

  @Decorator.property('String', 'colors', '')
  colors!: string;

  private _curPointCount = 0;

  connected(): void {
    super.connected();

    this.entity = CreateLines(
      this.id,
      { points: [new Vector3(0, 0, 0)], colors: [new Color4(1, 1, 1, 1)], updatable: true, useVertexAlpha: true },
      this.scene
    );
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);

    this._curPointCount = 0;
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) this.entity.dispose();
    this.entity = null;

    this._curPointCount = 0;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('points') || changed.has('colors')) {
      // 按,分割成 Vector3 数组
      const points = this.evaluated.points
        .split(',')
        .map(v => v.trim())
        .filter(Boolean)
        .map(v =>
          v
            .split(' ')
            .map(v => v.trim())
            .filter(Boolean)
        )
        .map(v => new Vector3(Number(v[0]), Number(v[1]), Number(v[2])));

      const colors = this.evaluated.colors
        .split(',')
        .map(v => v.trim())
        .map(hex => Color4.FromHexString(hex));

      // 如果 colors 数量小于 points 数量，那么就补齐 colors 数组
      if (colors.length < points.length) {
        const lastColor = colors[colors.length - 1] || new Color4(1, 1, 1, 1);
        for (let i = colors.length; i < points.length; i++) {
          colors[i] = lastColor.clone();
        }
      }

      const _needRebuild = points.length !== this._curPointCount;

      // 如果点的数量发生了变化，那么就重新创建
      if (_needRebuild) {
        this._curPointCount = points.length;
        this.entity.dispose();

        this.entity = CreateLines(this.id, { points, colors, updatable: true, useVertexAlpha: true }, this.scene);
        this.entity.parent = ElementUtil.closestTransformNodeLike(this);
      } else {
        CreateLines(this.id, { points, colors, instance: this.entity });
      }
    }
  }
}
