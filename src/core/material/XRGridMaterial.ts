import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController } from '../controller';
import { GridMaterial } from '@babylonjs/materials/grid';
import { XRBaseMaterial } from './XRBaseMaterial';

export class XRGridMaterial extends XRBaseMaterial<GridMaterial> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('String', 'main-color')
  mainColor = Color3.White();

  @Decorator.property('String', 'line-color')
  lineColor = Color3.Black();

  @Decorator.property('Number', 'grid-ratio')
  gridRatio = 1;

  @Decorator.property('Number', 'major-unit-frequency')
  majorUnitFrequency = 10;

  @Decorator.property('Number', 'minor-unit-visible')
  minorUnitVisibility = 0.5;

  @Decorator.property('Number')
  opacity = 0.99; // In transparent mode (opacity < 1.0), the empty area will always be at an opacity level of 0.08

  constructor() {
    super();
    new MaterialController(this);
  }

  connected(): void {
    super.connected();
    this.entity = new GridMaterial(this.id, this.scene);
    this.entity.useMaxLine = true;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('mainColor')) this.entity.mainColor.copyFrom(this.mainColor);
    if (changed.has('lineColor')) this.entity.lineColor.copyFrom(this.lineColor);
    if (changed.has('gridRatio')) this.entity.gridRatio = this.gridRatio;
    if (changed.has('majorUnitFrequency')) this.entity.majorUnitFrequency = this.majorUnitFrequency;
    if (changed.has('minorUnitVisibility')) this.entity.minorUnitVisibility = this.minorUnitVisibility;
    if (changed.has('opacity')) this.entity.opacity = this.opacity;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
