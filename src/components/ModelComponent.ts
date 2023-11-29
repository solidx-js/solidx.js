import { SceneLoader } from '@babylonjs/core';
import { XRAssetItem } from '../core';
import { AssetsSystem } from '../system';
import { ISchema } from '../util';
import { Component } from './Component';

export class ModelComponent extends Component<string> {
  static schema: ISchema = { type: 'string' };

  get name() {
    return 'ModelComponent';
  }

  init(): void {
    super.init();
  }

  update(): void {
    super.update();

    this.system.assets.wait(this.data!).then(buf => {
      SceneLoader.LoadAssetContainer(
        '',
        new File([buf.buffer], 'x.glb'),
        this.sceneEle.scene,
        container => {
          container.addAllToScene();
          this.logger.info('loaded: %s', this.data);
        },
        null,
        (scene, msg, exc) => {
          this.logger.error('load failed: %s, %s', msg, exc);
        }
      );
    });
  }

  remove(): void {
    super.remove();
  }
}
