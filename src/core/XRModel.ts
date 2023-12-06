import { Decorator } from './Decorator';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import type { AssetContainer } from '@babylonjs/core/assetContainer';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Schema, randomID } from '../util';
import { HierarchyController, RefController, TransformController } from './controller';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { provide } from '@lit/context';
import { Context } from './Context';
import { state } from 'lit/decorators';
import { AnimationGroup } from '@babylonjs/core/Animations/animationGroup';

export class XRModel extends XRSceneScopeElement<TransformNode> {
  static events: string[] = ['model-loaded'];

  @provide({ context: Context.AssetContainer })
  @state()
  private _container: AssetContainer | null = null;

  private _parentCtrl = new HierarchyController(this, parent => {
    if (this.entity) this.entity.parent = parent;
  });

  private _transCtrl = new TransformController(this);

  private _matCtrl = new RefController(
    this,
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

  @Decorator.property_String()
  src: string = '';

  @Decorator.property_Vector3(Vector3.Zero())
  position!: Vector3;

  @Decorator.property_Vector3(Vector3.Zero())
  rotation!: Vector3;

  @Decorator.property_Vector3(Vector3.One())
  scaling!: Vector3;

  @Decorator.property_String()
  extension?: string;

  @Decorator.property_String()
  material?: string;

  @Decorator.property_String('auto-play')
  autoPlay?: string;

  @Decorator.property_Boolean()
  loop = false;

  connected(): void {
    super.connected();

    const id = this.id || 'model:' + randomID();
    this.entity = new TransformNode(id, this.scene);
  }

  remove(): void {
    super.remove();

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

    if (!this.src) return;

    this.scene.loadModel(this.src, this.extension).then(_container => {
      if (!this.entity) return;

      _container.addAllToScene();
      this._container = _container;

      _container.transformNodes.push(this.entity);

      // 把根节点的父节点设置为当前实体
      for (const node of _container.rootNodes) {
        node.parent = this.entity;
      }

      // 重新加载材质
      this._matCtrl.reload(true);

      // 处理 auto-play
      if (typeof this.autoPlay !== 'undefined') {
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

      this.emit('model-loaded', { container: _container });
    });
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('src')) this.reloadModel();
  }
}
