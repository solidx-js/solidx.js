import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { XRSceneScopeElement } from '../core/XRSceneScopeElement';
import { html } from 'lit';
import { StateController } from './StateController';
import { IAttachmentDataItem, IOrthoData, IPosType, IToothDataItem } from './type';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math';
import { DecalImages } from './Const';
import uniq from 'lodash/uniq';

export class XROrtho extends XRSceneScopeElement<TransformNode> {
  readonly state = new StateController(this);

  @property()
  datasource: IOrthoData | null = null;

  @state()
  _loadedToothIds: number[] = [];

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  // 渲染单个附件
  renderSingleAttachment(atc: IAttachmentDataItem) {
    const position = Vector3.Zero();
    const quaternion = Quaternion.Identity();
    const scale = Vector3.One();
    atc.transform.decompose(scale, quaternion, position);

    return html`
      <xr-model
        id="attachment_${atc.id}"
        extension=".ctm"
        flat-shading
        src="${atc.resourceUrl}"
        material="attachment-mat-${atc.typeCode}"
        .position=${position}
        .quaternion=${quaternion}
        .scale=${scale}
      ></xr-model>
    `;
  }

  renderSingleTooth(tooth: IToothDataItem) {
    const ds = this.datasource;
    if (!ds) return null;

    const position = Vector3.Zero();
    const quaternion = Quaternion.Identity();
    const scale = Vector3.One();
    tooth.transform.decompose(scale, quaternion, position);

    const decalImgId = +tooth.slot.slice(2);
    const decalImg = (DecalImages as any)[decalImgId];

    return html`
      <xr-node id="tooth_root_${tooth.id}">
        <xr-model
          id="tooth_${tooth.id}"
          src="${tooth.resourceUrl}"
          extension=".ctm"
          material="tooth-mat"
          .position=${position}
          .quaternion=${quaternion}
          .scale=${scale}
          .originTransform=${tooth.transform}
          @loadeddata=${() => {
            this._loadedToothIds = uniq([...this._loadedToothIds, tooth.id]);
          }}
        >
          ${when(
            this._loadedToothIds.includes(tooth.id) && decalImg,
            () => html`
              <xr-decal
                id="tooth_decal_${tooth.id}"
                img="${decalImg}"
                origin="5 0 0"
                size="2 2 8"
                direction="-1 0 0"
                use-ray
                ray-scope="parent"
              ></xr-decal>
            `
          )}
        </xr-model>

        ${repeat(
          ds.attachments.filter(atc => atc.slot === tooth.slot && atc.posType === tooth.posType),
          atc => atc.id,
          atc => this.renderSingleAttachment(atc)
        )}
      </xr-node>
    `;
  }

  renderPosType(posType: IPosType) {
    if (!this.datasource) return null;
    const ds = this.datasource;

    const jaw = ds.jaw[posType];

    return html`
      <xr-node id="jaw-${posType}">
        <xr-model id="jaw_${jaw.id}" src="${jaw.resourceUrl}" extension=".ctm" material="jaw-mat"></xr-model>
        ${repeat(
          ds.toothList.filter(t => t.posType === posType),
          t => t.id,
          t => this.renderSingleTooth(t)
        )}
      </xr-node>
    `;
  }

  renderTypedMaterial() {
    return html`
      <xr-material id="tooth-mat" metallic="0.5" roughness="0.8"></xr-material>

      <xr-material id="attachment-mat-PRESSURE_BAR" alpha="0.8" metallic="0.8" roughness="0.2" albedo-color="#65B9FF"></xr-material>
      <xr-material id="attachment-mat-INDICATIVE" alpha="0.8" metallic="0.8" roughness="0.2" albedo-color="#6fabe7"></xr-material>
      <xr-material id="attachment-mat-NORMAL" alpha="0.8" metallic="0.8" roughness="0.2" albedo-color="#e7706f"></xr-material>

      <xr-material id="jaw-mat" metallic="0" roughness="1" albedo-color="#FF7A7A" backface-culling></xr-material>
    `;
  }

  render() {
    return html`
      <xr-camera id="cam1" radius="80" min-z="0.5" max-z="500"></xr-camera>

      ${this.renderTypedMaterial()}

      <xr-node id="HeadSpaceRoot" scale="1 1 -1" rotation="90 180 0">
        ${this.renderPosType('UPPER')}${this.renderPosType('LOWER')}
      </xr-node>
    `;
  }
}
