import { XRNode } from './XRNode';
import { XRAssets } from './XRAssets';
import { IAssetData } from '../system';

export class XRAssetItem extends XRNode {
  static requiredAttrs: string[] = ['id'];

  private _data: IAssetData | null = null;

  get name() {
    return 'XRAssetItem';
  }

  get data() {
    return this._data;
  }

  init(): void {
    super.init();

    // 父元素必须是 XRAssets
    if (!(this.parentElement instanceof XRAssets)) {
      throw new Error('XRAssetItem must be a child of XRAssets.');
    }

    const id = this.getAttribute('id')!;
    const src = this.getAttribute('src');
    const mime0 = this.getAttribute('mime');

    if (src) {
      fetch(src)
        .then(res => res.blob())
        .then(async data => {
          this.logger.info('loaded: id=%s, src=`%s`', id, src);

          const buffer = await data.arrayBuffer();
          const mime = mime0 || data.type;
          this._data = { buffer, mime };

          this.system.assets.set(id, this._data);
          this.emit('loaded', {});
        });
    }
  }

  remove(): void {
    super.remove();
    this._data = null;
  }
}
