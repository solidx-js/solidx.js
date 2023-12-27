import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { TextureController } from '../controller';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { ITextureImpl } from '../impl';

export class XRCubeTexture extends XRSceneScopeElement<CubeTexture> implements ITextureImpl {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Boolean', 'has-alpha', null)
  hasAlpha: boolean | null = null;

  @Decorator.property('Number', 'level', null)
  level: number | null = null;

  @Decorator.property('Number', 'coordinates-index', null)
  coordinatesIndex: number | null = null;

  @Decorator.property('Number', 'coordinates-mode', null)
  coordinatesMode: number | null = null;

  @Decorator.property('Number', 'wrap-u', null)
  wrapU: number | null = null;

  @Decorator.property('Number', 'wrap-v', null)
  wrapV: number | null = null;

  @Decorator.property('String', 'url', null)
  url: string | null = null;

  @Decorator.property('Number', 'rotation-y', null)
  rotationY: number | null = null;

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

    if (changed.has('rotationY')) this.entity.rotationY = this.evaluated.rotationY || 0;
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
