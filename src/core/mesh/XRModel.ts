import { Decorator } from '../Decorator';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import type { AssetContainer } from '@babylonjs/core/assetContainer';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { ElementUtil, Schema, randomID } from '../../util';
import { RefController, TransformLikeController } from '../controller';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { provide } from '@lit/context';
import { Context } from '../Context';
import { state } from 'lit/decorators.js';
import { AnimationGroup } from '@babylonjs/core/Animations/animationGroup';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class XRModel extends XRSceneScopeElement<TransformNode> {
  @provide({ context: Context.AssetContainer })
  @state()
  private _container: AssetContainer | null = null;

  private _matCtrl = new RefController(
    this as any,
    'material',
    () => this.material || null,
    mat => {
      if (this._container && mat) {
        this._container.meshes.forEach(mesh => {
          mesh.material = mat;
        });
      }
    }
  );

  @Decorator.property('String', 'src', '')
  src: string = '';

  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation = Vector3.Zero();

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion!: Quaternion | null;

  @Decorator.property('Number', 'layer', 0)
  layer = 0;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale = Vector3.One();

  @Decorator.property('String', 'extension', null)
  extension!: string | null;

  @Decorator.property('String', 'material', null)
  material!: string | null;

  @Decorator.property('String', 'auto-play', null)
  autoPlay!: string | null;

  @Decorator.property('Boolean', 'loop', false)
  loop = false;

  @Decorator.property('Boolean', 'flat-shading', false)
  flatShading = false;

  /**
   * 原点转换。如果设置了该属性，则会把模型的原点转换到指定的位置。
   */
  @Decorator.property('Matrix', 'origin-transform', null)
  originTransform!: Matrix | null;

  @Decorator.property('Boolean', 'preload', false)
  preload!: boolean | null;

  constructor() {
    super();

    new TransformLikeController(this);
  }

  connected(): void {
    super.connected();

    const id = this.id || 'model:' + randomID();
    this.entity = new TransformNode(id, this.scene);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      this.entity.dispose();
      this.entity = null;
    }

    if (this._container) {
      this._container.dispose();
      this._container = null;
    }
  }

  private async reloadModel() {
    if (this._container) {
      this._container.dispose();
      this._container = null;
    }

    if (!this.src || (this.disabled && !this.preload) || this.scene.isDisposed) return;

    this.scene.loadModel(this.src, this.extension || undefined).then(_container => {
      if (!this.entity) return;

      _container.addAllToScene();
      this._container = _container;

      _container.transformNodes.push(this.entity);

      // 把根节点的父节点设置为当前实体
      for (const node of _container.rootNodes) {
        node.parent = this.entity;
      }

      for (const mesh of _container.meshes) {
        if (mesh instanceof Mesh) {
          // 原点转换
          if (this.originTransform) mesh.bakeTransformIntoVertices(Matrix.Invert(this.originTransform));

          // 处理 flat-shading
          if (this.flatShading) mesh.convertToFlatShadedMesh();
        }
      }

      // 重新加载材质
      this._matCtrl.reload(true);

      // 处理 auto-play
      if (this.autoPlay !== null) {
        let ags: AnimationGroup[] = [];

        if (this.autoPlay === '') {
          ags = _container.animationGroups;
        } else {
          const _names = Schema.parse('Array', this.autoPlay) as string[];
          ags = _container.animationGroups.filter(a => _names.includes(a.name));
        }

        for (const ag of ags) {
          ag.play(this.loop);
        }
      }

      this.requestUpdate('disabled');

      this.emit('loadeddata', { container: _container });
    });
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('src') || !this._container) this.reloadModel();

    if (changed.has('disabled') && this._container) {
      for (const item of [...this._container.meshes, ...this._container.transformNodes]) {
        item.setEnabled(!this.disabled);
      }
    }
  }
}
