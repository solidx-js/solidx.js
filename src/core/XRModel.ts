import { SceneLoader } from '@babylonjs/core/Loading';
import { Decorator } from './Decorator';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import type { AssetContainer } from '@babylonjs/core/assetContainer';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { randomID } from '../util';
import { HierarchyController, TransformController } from './controller';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import Path from 'path';

export class XRModel extends XRSceneScopeElement<TransformNode> {
  private _container: AssetContainer | null = null;

  private _parentCtrl = new HierarchyController(this, parent => {
    this.logger.debug('parent changed: %s', parent?.name, this.entity);
    if (this.entity) this.entity.parent = parent;
  });

  private _transCtrl = new TransformController(this);

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

    const rootUrl = Path.dirname(this.src) + '/';
    const fileName = Path.basename(this.src);
    const forceExt = this.extension;

    SceneLoader.LoadAssetContainer(
      rootUrl,
      fileName,
      this.scene,
      container => {
        if (!this.entity) return;

        this.logger.info('Loaded model from: %s', this.src);

        container.transformNodes.push(this.entity);

        // 把根节点的父节点设置为当前实体
        for (const node of container.rootNodes) {
          node.parent = this.entity;
        }

        this._container = container;
        container.addAllToScene();

        this.requestUpdate();
      },
      null,
      null,
      forceExt
    );
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('src')) this.reloadModel();
  }
}
