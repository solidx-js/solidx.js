import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { TextureController } from '../controller';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { ITextureImpl } from '../impl';

export class XRCubeTexture extends XRSceneScopeElement<CubeTexture> implements ITextureImpl {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Boolean', 'has-alpha', false)
  hasAlpha: boolean = false;

  @Decorator.property('Number', 'level', 1)
  level: number = 1;

  @Decorator.property('Number', 'coordinates-index', 0)
  coordinatesIndex: number = 0;

  @Decorator.property('Number', 'coordinates-mode', 0)
  coordinatesMode: number = 0;

  @Decorator.property('Number', 'wrap-u', 0)
  wrapU: number = 0;

  @Decorator.property('Number', 'wrap-v', 0)
  wrapV: number = 0;

  @Decorator.property('String', 'url', '')
  url: string = '';

  @Decorator.property('Number', 'rotation-y', 0)
  rotationY: number = 0;

  @Decorator.property('Boolean', 'extension', null)
  extension: string | null = null;

  constructor() {
    super();
    new TextureController(this);
  }

  connected(): void {
    super.connected();

    this.entity = new CubeTexture('', this.scene);
    this.entity.name = this.id;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('url') && this.evaluated.url) {
      const url = this.evaluated.url;
      this.entity.updateURL(url, this.evaluated.extension || undefined);
    }

    if (changed.has('rotationY')) this.entity.rotationY = this.evaluated.rotationY;
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
