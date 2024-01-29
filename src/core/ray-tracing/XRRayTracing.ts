import { PropertyValueMap, html } from 'lit';
import { registerElement } from '../../registry';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { query } from 'lit/decorators.js';

@registerElement('xr-ray-tracing')
export class XRRayTracing extends XRSceneScopeElement<null> {
  @query('canvas')
  private canvas!: HTMLCanvasElement;

  connected(): void {
    super.connected();

    this.style.display = 'block';
    this.style.position = 'absolute';
    this.style.top = '0';
    this.style.left = '0';
    this.style.width = '100%';
    this.style.height = '100%';
    this.style.zIndex = '1000';
    this.style.pointerEvents = 'none';
  }

  disconnected(): void {
    super.disconnected();
  }

  protected firstUpdated(changed: any): void {
    super.firstUpdated(changed);

    import('./lib').then(({ RayTracer }) => {
      this.logger.info('RayTracer loaded');

      const rt = new RayTracer(this.scene, this.canvas);
      rt.start();
    });
  }

  render() {
    const w = this.scene.getEngine().getRenderWidth();
    const h = this.scene.getEngine().getRenderHeight();

    return html` <canvas width="${w}" height="${h}" style="width: 100%; height: 100%;"></canvas> `;
  }
}
