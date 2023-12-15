import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { TextureController } from '../controller';

export class XRTexture extends XRSceneScopeElement<Texture> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Boolean', 'has-alpha', false)
  hasAlpha: boolean = false;

  @Decorator.property('Number', undefined, 1)
  level: number = 1;

  @Decorator.property('Number', 'coordinates-index', 0)
  coordinatesIndex: number = 0;

  @Decorator.property('Number', 'coordinates-mode', 0)
  coordinatesMode: number = 0;

  @Decorator.property('Number', 'wrap-u', 0)
  wrapU: number = 0;

  @Decorator.property('Number', 'wrap-v', 0)
  wrapV: number = 0;

  @Decorator.property('String', undefined, '')
  url: string = '';

  @Decorator.property('Number', 'u-offset', 0)
  uOffset: number = 0;

  @Decorator.property('Number', 'v-offset', 0)
  vOffset: number = 0;

  @Decorator.property('Number', 'u-scale', 1)
  uScale: number = 1;

  @Decorator.property('Number', 'v-scale', 1)
  vScale: number = 1;

  constructor() {
    super();
    new TextureController(this);
  }

  connected(): void {
    super.connected();

    this.entity = new Texture(null, this.scene);
    this.entity.name = this.id;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('url')) this.entity.updateURL(this.evaluated.url || '');
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
