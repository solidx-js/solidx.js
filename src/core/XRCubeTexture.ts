import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Decorator } from './Decorator';
import { TextureController } from './controller';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';

export class XRCubeTexture extends XRSceneScopeElement<CubeTexture> {
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

  @Decorator.property('Number', 'rotation-y')
  rotationY: number = 0;

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

    if (changed.has('url')) this.entity.updateURL(this.evaluated.url || '');
    if (changed.has('rotationY')) this.entity.rotationY = this.evaluated.rotationY;
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
