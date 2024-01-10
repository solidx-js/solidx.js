import { html } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';

export class XRLoading extends XRSceneScopeElement<null> {
  private _ob: any;

  connected(): void {
    super.connected();

    this._ob = this.scene.onReadyObservable.addOnce(() => {
      this.style.display = 'none';
    });
  }

  disconnected(): void {
    super.disconnected();

    if (this._ob) {
      this._ob.remove();
      this._ob = null;
    }
  }
}
