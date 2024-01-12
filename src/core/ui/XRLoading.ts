import { registerElement } from '../../registry';
import { ElementUtil } from '../../util';
import { XRSceneScopeElement } from '../XRSceneScopeElement';

@registerElement('xr-loading')
export class XRLoading extends XRSceneScopeElement<null> {
  private _ob: any;

  connected(): void {
    super.connected();

    const durationMs = ElementUtil.parseDuration(this._styled?.transitionDuration || '0');

    this._ob = this.scene.onReadyObservable.addOnce(() => {
      this.logger.info('fading out');
      this.classList.add('fading-out');

      setTimeout(() => {
        this.logger.info('hide in %sms', durationMs);
        this.classList.add('hide');
      }, durationMs);
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
