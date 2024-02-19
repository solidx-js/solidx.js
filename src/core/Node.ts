import { Matrix, Quaternion, Vector3 } from 'tiny-math.js/dist/esm';

/** 场景图节点 */
export class Node {
  static walk(n: Node, callback: (n: Node) => any) {
    callback(n);

    for (let i = 0; i < n.children.length; i++) {
      const child = n.children[i];
      Node.walk(child, callback);
    }
  }

  // 父节点(冗余一下)
  parent: Node | null = null;
  children: Node[] = [];

  position: Vector3 = new Vector3();
  rotation: Quaternion = Quaternion.Identity();
  scaling: Vector3 = new Vector3(1, 1, 1);

  // 模型矩阵
  matrix: Matrix = Matrix.Identity();
  worldMatrix: Matrix = Matrix.Identity();

  setParent(parent: Node) {
    if (this.parent) this.parent.removeChild(this);
    parent.addChild(this);
  }

  addChild(child: Node) {
    if (this.children.indexOf(child) >= 0) return;

    this.children.push(child);
    child.parent = this;
  }

  removeChild(child: Node) {
    const index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
      child.parent = null;
    }
  }

  computeWorldMatrix(bubbleUp?: boolean) {
    // 更新本地 matrix
    this.matrix.composeInPlace(this.position, this.rotation, this.scaling);

    if (this.parent) {
      if (bubbleUp) {
        this.parent.computeWorldMatrix(true);
      }

      this.worldMatrix = this.matrix.multiply(this.parent.worldMatrix);
    } else {
      this.worldMatrix = this.matrix.clone();
    }
  }
}
