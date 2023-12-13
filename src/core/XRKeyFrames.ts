import { XRSceneScopeElement } from './XRSceneScopeElement';
import { AttributeObserverController } from './controller';
import { Schema } from '../util';

export class XRKeyFrames extends XRSceneScopeElement<{ percentage: number; data: Record<string, string> }[]> {
  static requiredAttrs: string[] = ['id'];

  constructor() {
    super();

    new AttributeObserverController(this);
  }

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  protected willUpdate(changed: Map<string, any>): void {
    this._buildFrames();
  }

  private _buildFrames(): void {
    const frames: { percentage: number; data: Record<string, string> }[] = [];

    for (const attr of Array.from(this.attributes)) {
      const { name, value } = attr;

      if (name === 'from' || name === 'to' || name.endsWith('%')) {
        const percentage = name === 'from' ? 0 : name === 'to' ? 1 : parseFloat(name.replace('%', '')) / 100;
        const data = Schema.parse('Object', value);
        frames.push({ percentage, data });
      }
    }

    frames.sort((a, b) => a.percentage - b.percentage);
    this.entity = frames;
  }
}
