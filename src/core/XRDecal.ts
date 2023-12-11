import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { CreateDecal } from '@babylonjs/core/Meshes/Builders/decalBuilder';
import { ElementUtil } from '../util/ElementUtil';
import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';

export class XRDecal extends XRSceneScopeElement<Mesh> {
  @Decorator.property_Vector3()
  size = Vector3.One();

  @Decorator.property_Vector3()
  position = Vector3.Zero();

  @Decorator.property_Vector3()
  normal = Vector3.Up();

  @Decorator.property_Number()
  angle = 0;

  private _projector?: Mesh;
  private _material: PBRMaterial | null = null;

  connected(): void {
    super.connected();

    this._material = new PBRMaterial('decal_material', this.scene);
    this._material.zOffset = -2;

    const tex = new Texture('https://rshop.tech/gw/assets/upload/202312111316365.png', this.scene);
    tex.hasAlpha = true;
    this._material.albedoTexture = tex;
    this._material.emissiveTexture = tex;
    this._material.emissiveColor.set(1, 1, 1);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    const shouldRecreate = changed.has('size') || changed.has('position') || changed.has('normal') || changed.has('angle');

    if (shouldRecreate) {
      if (this.entity) this.entity.dispose();

      const parent = ElementUtil.closestTransformNodeLike(this);

      if (parent && parent instanceof Mesh) {
        const worldMatrix = parent.getWorldMatrix();

        const position = Vector3.TransformCoordinates(this.position, worldMatrix);
        const normal = Vector3.TransformNormal(this.normal, worldMatrix);
        const size = this.size;
        const angle = (this.angle * Math.PI) / 180; // degree to radian

        this.entity = CreateDecal(parent.name + '_decal', parent, { localMode: true, position, normal, size, angle });
        this.entity.material = this._material;

        (this.entity as any).__createArgs = { position, normal, size, angle };
      }
    }

    this._updateProjector();
  }

  /** 更新 projector (for debug) */
  private _updateProjector(): void {
    if (this.debug && !this._projector) {
      this._projector = CreateBox('projector', { size: 1 }, this.scene);
      this._projector.enableEdgesRendering(0.99);
      this._projector.edgesWidth = 1;
      this._projector.visibility = 0.001;
    }

    if (!this.debug && this._projector) {
      this._projector.dispose(false, true);
      this._projector = undefined;
    }

    if (this._projector && this.entity && (this.entity as any).__createArgs) {
      const position = (this.entity as any).__createArgs.position as Vector3;
      const size = (this.entity as any).__createArgs.size as Vector3;
      const normal = (this.entity as any).__createArgs.normal as Vector3;
      const angle = (this.entity as any).__createArgs.angle as number;

      this._projector.position.copyFrom(position);
      this._projector.scaling.copyFrom(size);

      // rotation: copy from https://playground.babylonjs.com/#EEUVTY#199
      const yaw = -Math.atan2(normal.z, normal.x) - Math.PI / 2;
      const len = Math.sqrt(normal.x * normal.x + normal.z * normal.z);
      const pitch = Math.atan2(normal.y, len);

      this._projector.rotation.set(pitch, yaw, angle);
    }
  }

  remove(): void {
    super.remove();

    if (this.entity) this.entity.dispose();
    this.entity = null;
  }
}
