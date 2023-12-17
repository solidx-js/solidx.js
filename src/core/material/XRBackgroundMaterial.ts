import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, RefController2 } from '../controller';
import { state } from 'lit/decorators.js';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { BackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial';
import { XRBaseMaterial } from './XRBaseMaterial';

export class XRBackgroundMaterial extends XRBaseMaterial<BackgroundMaterial> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Boolean', 'use-rgb-color', false)
  useRGBColor!: boolean;

  @Decorator.property('Color3', 'primary-color', Color3.White())
  primaryColor!: Color3;

  @Decorator.property('Boolean', 'enable-noise', false)
  enableNoise!: boolean;

  @Decorator.property('String', 'reflection-texture', null)
  reflectionTexture!: string | null;

  @state()
  _reflectionTexture: CubeTexture | null = null;

  constructor() {
    super();

    new RefController2(this, 'cube-texture', 'reflectionTexture', '_reflectionTexture');
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

    if (changed.has('_reflectionTexture')) this.entity.reflectionTexture = this._reflectionTexture;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
