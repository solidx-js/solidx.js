import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController } from '../controller';
import { GridMaterial } from '@babylonjs/materials/grid';
import { XRBaseMaterial } from './XRBaseMaterial';
import { IMaterialImpl } from '../impl';

export class XRGridMaterial extends XRBaseMaterial<GridMaterial> implements IMaterialImpl {
  @Decorator.property('Color3', 'main-color', Color3.White())
  mainColor: Color3 | null = null;

  @Decorator.property('Color3', 'line-color', Color3.Black())
  lineColor: Color3 | null = null;

  @Decorator.property('Number', 'grid-ratio', 1)
  gridRatio: number | null = null;

  @Decorator.property('Number', 'major-unit-frequency', 10)
  majorUnitFrequency: number | null = null;

  @Decorator.property('Number', 'minor-unit-visible', 0.5)
  minorUnitVisibility: number | null = null;

  @Decorator.property('Number', 'opacity', 0.99)
  opacity: number | null = null; // In transparent mode (opacity < 1.0), the empty area will always be at an opacity level of 0.08

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

    if (changed.has('mainColor') && this.evaluated.mainColor !== null) {
      this.entity.mainColor.copyFrom(this.evaluated.mainColor);
    }
    if (changed.has('lineColor') && this.evaluated.lineColor !== null) {
      this.entity.lineColor.copyFrom(this.evaluated.lineColor);
    }
    if (changed.has('gridRatio') && this.evaluated.gridRatio !== null) {
      this.entity.gridRatio = this.evaluated.gridRatio;
    }
    if (changed.has('majorUnitFrequency') && this.evaluated.majorUnitFrequency !== null) {
      this.entity.majorUnitFrequency = this.evaluated.majorUnitFrequency;
    }
    if (changed.has('minorUnitVisibility') && this.evaluated.minorUnitVisibility !== null) {
      this.entity.minorUnitVisibility = this.evaluated.minorUnitVisibility;
    }
    if (changed.has('opacity') && this.evaluated.opacity !== null) {
      this.entity.opacity = this.evaluated.opacity;
    }
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
