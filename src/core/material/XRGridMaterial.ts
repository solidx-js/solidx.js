import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController } from '../controller';
import { GridMaterial } from '@babylonjs/materials/grid';
import { XRBaseMaterial } from './XRBaseMaterial';

export class XRGridMaterial extends XRBaseMaterial<GridMaterial> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Color3', 'main-color', Color3.White())
  mainColor!: Color3;

  @Decorator.property('Color3', 'line-color', Color3.Black())
  lineColor!: Color3;

  @Decorator.property('Number', 'grid-ratio', 1)
  gridRatio!: number;

  @Decorator.property('Number', 'major-unit-frequency', 10)
  majorUnitFrequency!: number;

  @Decorator.property('Number', 'minor-unit-visible', 0.5)
  minorUnitVisibility!: number;

  @Decorator.property('Number', undefined, 0.99)
  opacity!: number; // In transparent mode (opacity < 1.0), the empty area will always be at an opacity level of 0.08

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
