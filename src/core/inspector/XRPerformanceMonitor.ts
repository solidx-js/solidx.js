import { registerElement } from '../../registry';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import Stats from 'stats.js';

@registerElement('xr-performance-monitor')
export class XRPerformanceMonitor extends XRSceneScopeElement<Stats> {
  private _ob1: any;
  private _ob2: any;

  private get _container() {
    return this.scene.getEngine().container;
  }

  connected(): void {
    super.connected();

    const stats = new Stats();
    this.entity = stats;

    stats.showPanel(0); // fps

    this._container.appendChild(stats.dom);

    this._ob1 = this.scene.onBeforeRenderObservable.add(() => stats.begin());
    this._ob2 = this.scene.onAfterRenderObservable.add(() => stats.end());
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      this.entity.dom.remove();
      this.entity = null;
    }

    this._ob1.remove();
    this._ob1 = null;

    this._ob2.remove();
    this._ob2 = null;
  }
}
