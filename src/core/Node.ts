import { Matrix } from 'tiny-math.js/dist/esm';

/** 场景图节点 */
export class Node {
  static walk(n: Node, callback: (n: Node) => any) {
    callback(n);

    for (let i = 0; i < n._children.length; i++) {
      const child = n._children[i];
      Node.walk(child, callback);
    }
  }

  private _children: Node[] = [];

  // 父节点(冗余一下)
  private _parent: Node | null = null;

  // 模型矩阵
  private _matrix: Matrix = Matrix.Identity();
  private _worldMatrix: Matrix = Matrix.Identity();

  get parent() {
    return this._parent;
  }

  get worldMatrix() {
    return this._worldMatrix;
  }

  setParent(parent: Node) {
    if (this._parent) this._parent.removeChild(this);
    parent.addChild(this);
  }

  addChild(child: Node) {
    if (this._children.indexOf(child) >= 0) return;

    this._children.push(child);
    child._parent = this;
  }

  removeChild(child: Node) {
    const index = this._children.indexOf(child);
    if (index >= 0) {
      this._children.splice(index, 1);
      child._parent = null;
    }
  }

  computeWorldMatrix(bubbleUp?: boolean) {
    if (this._parent) {
      if (bubbleUp) {
        this._parent.computeWorldMatrix(true);
      }

      this._worldMatrix = this._matrix.multiply(this._parent._worldMatrix);
    } else {
      this._worldMatrix = this._matrix.clone();
    }
  }
}
