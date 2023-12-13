import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { CreateDecal } from '@babylonjs/core/Meshes/Builders/decalBuilder';
import { ElementUtil } from '../util/ElementUtil';
import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';

/**
 * 贴花
 */
export class XRDecal extends XRSceneScopeElement<Mesh> {
  /** 贴花尺寸 */
  @Decorator.property('Vector3')
  size = Vector3.One();

  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Vector3')
  normal = Vector3.Up();

  @Decorator.property('Number')
  angle = 0;

  @Decorator.property('String')
  img?: string;

  @Decorator.property('Number', 'img-level')
  imgLevel = 1;

  private _projector?: Mesh;
  private _material: StandardMaterial | null = null;
  private _texture: Texture | null = null;

  connected(): void {
    super.connected();

    this._texture = new Texture(this.img || null, this.scene);
    this._texture.hasAlpha = true;

    this._material = new StandardMaterial('decal_material', this.scene);
    this._material.zOffset = -2; // 保证贴图在模型表面, 而不是在模型内部
    this._material.diffuseTexture = this._texture;
    this._material.emissiveTexture = this._texture;
    this._material.disableLighting = true;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    const shouldRecreate = changed.has('size') || changed.has('position') || changed.has('normal') || changed.has('angle');

    if (shouldRecreate) {
      if (this.entity) this.entity.dispose();

      const parent = ElementUtil.closestTransformNodeLike(this);

      if (parent && parent instanceof Mesh) {
        const worldMatrix = parent.getWorldMatrix();

        const position = Vector3.TransformCoordinates(this.evaluated.position, worldMatrix);
        const normal = Vector3.TransformNormal(this.evaluated.normal, worldMatrix);
        const size = this.evaluated.size;

        const angle = (this.evaluated.angle * Math.PI) / 180; // degree to radian

        this.entity = CreateDecal(parent.name + '_decal', parent, { localMode: true, position, normal, size, angle });
        this.entity.material = this._material;

        (this.entity as any).__createArgs = { position, normal, size, angle };
      }
    }

    // _texture
    if (this._texture) {
      if (changed.has('img')) this._texture.updateURL(this.evaluated.img || '');
      this._texture.level = this.evaluated.imgLevel;
    }

    this._updateProjector();
  }

  /** 更新 projector (for debug) */
  private _updateProjector(): void {
    // 创建
    if (this.inspect && !this._projector) {
      this._projector = CreateBox('projector', { size: 1 }, this.scene);
      this._projector.enableEdgesRendering(0.99);
      this._projector.edgesWidth = 1;
      this._projector.visibility = 0.001;
    }

    // 销毁
    if (!this.inspect && this._projector) {
      this._projector.dispose(false, true);
      this._projector = undefined;
    }

    // 更新
    if (this.inspect && this._projector && this.entity && (this.entity as any).__createArgs) {
      const position = (this.entity as any).__createArgs.position as Vector3;
      const size = (this.entity as any).__createArgs.size as Vector3;
      const normal = (this.entity as any).__createArgs.normal as Vector3;
      const angle = (this.entity as any).__createArgs.angle as number;

      this._projector.position.copyFrom(position);
      this._projector.scaling.copyFrom(size);

      const color = this.inspect.color || '#ff0000';
      this._projector.edgesColor = Color4.FromHexString(color);

      // rotation: copy from https://playground.babylonjs.com/#EEUVTY#199
      const yaw = -Math.atan2(normal.z, normal.x) - Math.PI / 2;
      const len = Math.sqrt(normal.x * normal.x + normal.z * normal.z);
      const pitch = Math.atan2(normal.y, len);

      this._projector.rotation.set(pitch, yaw, angle);
    }
  }

  remove(): void {
    super.remove();

    if (this._material) this._material.dispose();
    this._material = null;

    if (this._texture) this._texture.dispose();
    this._texture = null;

    if (this.entity) this.entity.dispose();
    this.entity = null;
  }
}
