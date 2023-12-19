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
import { styleMap } from 'lit/directives/style-map.js';

export class XROrtho extends XRSceneScopeElement<TransformNode> {
  readonly state = new StateController(this);

  @property()
  datasource: IOrthoData | null = null;

  @state()
  _loadedToothIds: number[] = [];

  @state()
  _loading = true;

  connected(): void {
    super.connected();

    this.style.display = 'block';
    this.style.width = '100%';
    this.style.height = '100%';
    this.style.position = 'relative';
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

  renderOverlay() {
    if (this._loading) {
      return html`<div
        style=${styleMap({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        ${Loading()}
      </div>`;
    }
  }

  render() {
    return html`
      <xr-scene auto-resize env-rotation-y="216">
        <xr-camera id="cam1" radius="80" min-z="0.5" max-z="500"></xr-camera>

        <xr-pipeline-ssao2 id="ssao" samples="32" radius="6" max-z="200"></xr-pipeline-ssao2>

        ${this.renderTypedMaterial()}

        <xr-node id="HeadSpaceRoot" scale="1 1 -1" rotation="90 180 0">
          ${this.renderPosType('UPPER')}${this.renderPosType('LOWER')}
        </xr-node>
      </xr-scene>

      ${this.renderOverlay()}
    `;
  }
}

const Loading = () => html`
  <svg height="1em" viewBox="0 0 100 40" style="vertical-align: -0.125em;">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-100.000000, -71.000000)">
        <g transform="translate(95.000000, 71.000000)">
          <g transform="translate(5.000000, 0.000000)">
            <rect fill="currentColor" x="20" y="16" width="8" height="8" rx="2">
              <animate
                attributeName="y"
                from="16"
                to="16"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
                values="16; 6; 26; 16; 16"
                keyTimes="0; 0.1; 0.3; 0.4; 1"
              ></animate>
            </rect>
            <rect fill="currentColor" x="46" y="16" width="8" height="8" rx="2">
              <animate
                attributeName="y"
                from="16"
                to="16"
                dur="2s"
                begin="0.2s"
                repeatCount="indefinite"
                values="16; 6; 26; 16; 16"
                keyTimes="0; 0.1; 0.3; 0.4; 1"
              ></animate>
            </rect>
            <rect fill="currentColor" x="72" y="16" width="8" height="8" rx="2">
              <animate
                attributeName="y"
                from="16"
                to="16"
                dur="2s"
                begin="0.4s"
                repeatCount="indefinite"
                values="16; 6; 26; 16; 16"
                keyTimes="0; 0.1; 0.3; 0.4; 1"
              ></animate>
            </rect>
          </g>
        </g>
      </g>
    </g>
  </svg>
`;
