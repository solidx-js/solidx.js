import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { CreateDecal } from '@babylonjs/core/Meshes/Builders/decalBuilder';
import { ElementUtil } from '../../util/ElementUtil';
import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Ray } from '@babylonjs/core/Culling/ray';
import { randomID } from '../../util';
import { RayHelper } from '@babylonjs/core/Debug/rayHelper';
import { Tags } from '@babylonjs/core/Misc/tags';

/**
 * 贴花
 */
export class XRDecal extends XRSceneScopeElement<Mesh> {
  /**
   * 贴花尺寸
   *
   * - x: width
   * - y: height
   * - z: depth
   */
  @Decorator.property('Vector3', 'size', Vector3.One())
  size = Vector3.One();

  /** 贴花投影体的中心 */
  @Decorator.property('Vector3', 'origin', Vector3.Zero())
  origin = Vector3.Zero();

  /** 贴花投影方向 */
  @Decorator.property('Vector3', 'direction', Vector3.Up())
  direction = Vector3.Up();

  /** 贴花投影角度 */
  @Decorator.property('Number', 'angle', 0)
  angle = 0;

  @Decorator.property('String', 'img', null)
  img: string | null = null;

  @Decorator.property('Number', 'img-level', 1)
  imgLevel = 1;

  @Decorator.property('Boolean', 'use-ray', false)
  useRay = false;

  @Decorator.property('String', 'ray-scope', 'scene')
  rayScope: 'scene' | 'parent' = 'scene';

  private _projector: Mesh | null = null;
  private _material: StandardMaterial | null = null;
  private _texture: Texture | null = null;
  private _ray: Ray | null = null;

  private _rayHelper: RayHelper | null = null;

  connected(): void {
    super.connected();

    this._texture = new Texture(this.img || null, this.scene);
    this._texture.hasAlpha = true;

    this._material = new StandardMaterial('decal_material', this.scene);
    this._material.backFaceCulling = false;
    this._material.zOffset = -2; // 保证贴图在模型表面, 而不是在模型内部
    this._material.diffuseTexture = this._texture;
    this._material.emissiveTexture = this._texture;
    this._material.disableLighting = true;
  }

  reload() {
    if (this.entity) {
      this.entity.dispose();
      this.entity = null;
    }

    const origin = this.evaluated.origin.clone();
    const direction = this.evaluated.direction.clone();
    direction.normalize();

    const size = this.evaluated.size;
    const angle = (this.evaluated.angle * Math.PI) / 180; // degree to radian

    const parent = ElementUtil.closestTransformNodeLike(this);
    if (parent) {
      // 如果有 parent, 要做世界矩阵转换
      const worldMatrix = parent.getWorldMatrix();
      Vector3.TransformCoordinatesToRef(origin, worldMatrix, origin);
      Vector3.TransformNormalToRef(direction, worldMatrix, direction);
    }

    let targetMesh: Mesh | null = null;

    // 使用射线拾取贴花对象
    if (this.useRay) {
      if (!this._ray) this._ray = new Ray(Vector3.Zero(), Vector3.Zero(), 1);

      this._ray.direction.copyFrom(direction);
      this._ray.length = size.z; // 用 size.z 作为射线长度

      // 射线起点在投影体的中心偏移一半射线长度
      origin.addToRef(direction.scale(-this._ray.length / 2), this._ray.origin);

      const canHitMeshes = new Set(
        (this.rayScope === 'parent' && parent ? parent.getChildMeshes(false) : this.scene.meshes).filter(
          m => m.isPickable && m.isVisible && m.isEnabled() && m.visibility > 0
        )
      );

      const pk = this.scene.pickWithRay(this._ray, m => canHitMeshes.has(m));
      if (pk?.pickedMesh && pk.pickedMesh instanceof Mesh) {
        targetMesh = pk.pickedMesh;
      }
    } else {
      this._ray = null;

      // 直接使用 parent 作为贴花对象
      if (parent && parent instanceof Mesh) targetMesh = parent;
    }

    // 创建贴花
    if (targetMesh) {
      const id = this.id || randomID();
      this.entity = CreateDecal('decal_' + id, targetMesh, {
        localMode: true,
        position: origin,
        normal: direction.scale(-1), // 贴花定义的法线方向与射线方向相反
        size,
        angle,
        cullBackFaces: true,
      });

      this.entity.material = this._material;

      Tags.AddTagsTo(this.entity, 'decal');
    }

    this._updateProjector(origin, direction, size, angle);
    this._updateRayHelper();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    const shouldRecreate =
      changed.has('size') ||
      changed.has('position') ||
      changed.has('direction') ||
      changed.has('angle') ||
      changed.has('useRay') ||
      changed.has('rayScope');

    if (shouldRecreate) this.reload();

    // _texture
    if (this._texture) {
      if (changed.has('img')) this._texture.updateURL(this.evaluated.img || '');
      this._texture.level = this.evaluated.imgLevel;
    }
  }

  /** 更新 projector (for debug) */
  private _updateProjector(origin: Vector3, direction: Vector3, size: Vector3, angle: number): void {
    // 创建
    if (this.inspect && !this._projector) {
      this._projector = CreateBox('projector', { size: 1 }, this.scene);
      this._projector.enableEdgesRendering(0.99);
      this._projector.edgesWidth = 2;
      this._projector.visibility = 0.001;
      this._projector.isPickable = false;
    }

    // 销毁
    if (!this.inspect && this._projector) {
      this._projector.dispose(false, true);
      this._projector = null;
    }

    // 更新
    if (this.inspect && this._projector) {
      this._projector.position.copyFrom(origin);
      this._projector.scaling.copyFrom(size);

      const color = this.inspect.color || '#ff0000';
      this._projector.edgesColor = Color4.FromHexString(color);

      // rotation: copy from https://playground.babylonjs.com/#EEUVTY#199
      const normal = direction.scale(-1);
      const yaw = -Math.atan2(normal.z, normal.x) - Math.PI / 2;
      const len = Math.sqrt(normal.x * normal.x + normal.z * normal.z);
      const pitch = Math.atan2(normal.y, len);

      this._projector.rotation.set(pitch, yaw, angle);
    }
  }

  private _updateRayHelper(): void {
    if (this.inspect && this._ray && !this._rayHelper) {
      this._rayHelper = new RayHelper(this._ray);
    }

    if (!this.inspect && this._rayHelper) {
      this._rayHelper.dispose();
      this._rayHelper = null;
    }

    if (this.inspect && this._rayHelper) {
      this._rayHelper.show(this.scene.defaultUtilityLayer.utilityLayerScene, Color3.FromHexString(this.inspect.color || '#ff0000'));
    }
  }

  disconnected(): void {
    super.disconnected();

    if (this._material) this._material.dispose();
    this._material = null;

    if (this._texture) this._texture.dispose();
    this._texture = null;

    if (this.entity) this.entity.dispose();
    this.entity = null;

    if (this._projector) this._projector.dispose();
    this._projector = null;

    this._ray = null;

    if (this._rayHelper) this._rayHelper.dispose();
    this._rayHelper = null;
  }
}
