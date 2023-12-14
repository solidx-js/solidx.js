import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Decorator } from './Decorator';
import { TextureController } from './controller';

export class XRTexture extends XRSceneScopeElement<Texture> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Boolean', 'has-alpha')
  hasAlpha: boolean = false;

  @Decorator.property('Number')
  level: number = 1;

  @Decorator.property('Number', 'coordinates-index')
  coordinatesIndex: number = 0;

  @Decorator.property('Number', 'coordinates-mode')
  coordinatesMode: number = 0;

  @Decorator.property('Number', 'wrap-u')
  wrapU: number = 0;

  @Decorator.property('Number', 'wrap-v')
  wrapV: number = 0;

  @Decorator.property('String')
  url: string = '';

  @Decorator.property('Number', 'u-offset')
  uOffset: number = 0;

  @Decorator.property('Number', 'v-offset')
  vOffset: number = 0;

  @Decorator.property('Number', 'u-scale')
  uScale: number = 1;

  @Decorator.property('Number', 'v-scale')
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
