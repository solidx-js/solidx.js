import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, TagRefController } from '../controller';
import { state } from 'lit/decorators.js';
import { BackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial';
import { XRBaseMaterial } from './XRBaseMaterial';
import { IMaterialImpl, ITextureImpl } from '../impl';

export class XRBackgroundMaterial extends XRBaseMaterial<BackgroundMaterial> implements IMaterialImpl {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Boolean', 'use-rgb-color', false)
  useRGBColor = false;

  @Decorator.property('Color3', 'primary-color', Color3.White())
  primaryColor = Color3.White();

  @Decorator.property('Boolean', 'enable-noise', false)
  enableNoise = false;

  @Decorator.property('String', 'reflection-texture', null)
  reflectionTexture: string | null = null;

  @state()
  _reflectionTexture: (HTMLElement & ITextureImpl) | null = null;

  constructor() {
    super();

    new TagRefController(this, 'reflectionTexture', '_reflectionTexture', 'xr-cube-texture');
    new MaterialController(this);
  }

  connected(): void {
    super.connected();
    this.entity = new BackgroundMaterial(this.id, this.scene);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('useRGBColor')) this.entity.useRGBColor = this.evaluated.useRGBColor;
    if (changed.has('primaryColor')) this.entity.primaryColor.copyFrom(this.evaluated.primaryColor);
    if (changed.has('enableNoise')) this.entity.enableNoise = this.evaluated.enableNoise;

    if (changed.has('_reflectionTexture')) this.entity.reflectionTexture = this._reflectionTexture?.entity || null;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
