import { GlowLayer } from '@babylonjs/core/Layers/glowLayer';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { registerElement } from '../../registry';
import { Decorator } from '../Decorator';

@registerElement('xr-glow')
export class XRGlow extends XRSceneScopeElement<GlowLayer> {
  @Decorator.property('Number', 'intensity', 1, { min: 0, max: 10, step: 0.1, title: '强度' })
  intensity: number | null = null;

  connected(): void {
    super.connected();

    this.entity = new GlowLayer(this.id, this.scene);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('intensity') && this.evaluated.intensity !== null) {
      this.entity.intensity = this.evaluated.intensity;
    }
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      this.entity.dispose();
      this.entity = null;
    }
  }
}
