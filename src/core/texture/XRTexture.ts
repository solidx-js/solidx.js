import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { TextureController } from '../controller';
import { ITextureImpl } from '../impl';

export class XRTexture extends XRSceneScopeElement<Texture> implements ITextureImpl {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Boolean', 'has-alpha', null)
  hasAlpha: boolean | null = null;

  @Decorator.property('Number', 'level', 1)
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

  @Decorator.property('Number', 'u-offset', null)
  uOffset: number | null = null;

  @Decorator.property('Number', 'v-offset', null)
  vOffset: number | null = null;

  @Decorator.property('Number', 'u-scale', 1)
  uScale: number | null = null;

  @Decorator.property('Number', 'v-scale', 1)
  vScale: number | null = null;

  @Decorator.property('Boolean', 'invert-y', null)
  invertY: boolean | null = null;

  constructor() {
    super();
    new TextureController(this);
  }

  connected(): void {
    super.connected();

    this.entity = new Texture(null, this.scene, undefined, this.invertY || false);
    this.entity.name = this.id;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('url')) this.entity.updateURL(this.evaluated.url || '');
    if (changed.has('uOffset')) this.entity.uOffset = this.evaluated.uOffset || 0;
    if (changed.has('vOffset')) this.entity.vOffset = this.evaluated.vOffset || 0;
    if (changed.has('uScale')) this.entity.uScale = this.evaluated.uScale || 0;
    if (changed.has('vScale')) this.entity.vScale = this.evaluated.vScale || 0;
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
