import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, TagRefController } from '../controller';
import { state } from 'lit/decorators.js';
import { BackgroundMaterial } from '@babylonjs/core/Materials/Background/backgroundMaterial';
import { XRBaseMaterial } from './XRBaseMaterial';
import { IMaterialImpl, ITextureImpl } from '../impl';
import { PrimitiveMap, registerElement } from '../../registry';
import { IDataTypeMap } from '../../util';

@registerElement('xr-background-material')
export class XRBackgroundMaterial extends XRBaseMaterial<BackgroundMaterial> implements IMaterialImpl {
  @Decorator.property('Boolean', 'use-rgb-color', null)
  useRGBColor: boolean | null = null;

  @Decorator.property('Color3', 'primary-color', null)
  primaryColor: Color3 | null = null;

  @Decorator.property('Boolean', 'enable-noise', null)
  enableNoise: boolean | null = null;

  @Decorator.property('URI', 'reflection-texture', null)
  reflectionTexture: IDataTypeMap['URI'] | null = null;

  @state()
  _reflectionTexture: (HTMLElement & ITextureImpl) | null = null;

  constructor() {
    super();

    new TagRefController(this, 'reflectionTexture', '_reflectionTexture', PrimitiveMap.texture);
    new MaterialController(this);
  }

  connected(): void {
    super.connected();
    this.entity = new BackgroundMaterial(this.id, this.scene);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('useRGBColor') && this.evaluated.useRGBColor) this.entity.useRGBColor = this.evaluated.useRGBColor;
    if (changed.has('primaryColor') && this.evaluated.primaryColor) this.entity.primaryColor.copyFrom(this.evaluated.primaryColor);
    if (changed.has('enableNoise')) this.entity.enableNoise = !!this.evaluated.enableNoise;

    if (changed.has('_reflectionTexture')) this.entity.reflectionTexture = this._reflectionTexture?.entity || null;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
