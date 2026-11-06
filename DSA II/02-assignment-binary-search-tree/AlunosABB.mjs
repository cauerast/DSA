class Node {
  constructor(studentData) {
    this.data = studentData;
    this.left = null;
    this.right = null;
  }
}

export class AlunosABB {
  constructor() {
    this.root = null;
  }

  insert(student) {
    if (this.root === null) {
      this.root = new Node(student);
      return true;
    }
    return this.#insertNode(this.root, student);
  }

  #insertNode(node, student) {
    if (student.ra === node.data.ra) {
      return false;
    }

    if (student.ra < node.data.ra) {
      if (node.left === null) {
        node.left = new Node(student);
        return true;
      }
      return this.#insertNode(node.left, student);
    } else {
      if (node.right === null) {
        node.right = new Node(student);
        return true;
      }
      return this.#insertNode(node.right, student);
    }
  }

  inOrder(callback) {
    this.#inOrderRec(this.root, callback);
  }

  #inOrderRec(node, callback) {
    if (node !== null) {
      this.#inOrderRec(node.left, callback);
      callback(node.data);
      this.#inOrderRec(node.right, callback);
    }
  }

  searchStudent(ra) {
    return this.#searchRec(this.root, ra);
  }

  #searchRec(node, ra) {
    if (node === null) return null;
    if (ra === node.data.ra) return node.data;

    if (ra < node.data.ra) {
      return this.#searchRec(node.left, ra);
    } else {
      return this.#searchRec(node.right, ra);
    }
  }

  remove(ra) {
    this.root = this.#removeNode(this.root, ra);
  }

  #removeNode(node, ra) {
    if (node === null) return null;

    if (ra < node.data.ra) {
      node.left = this.#removeNode(node.left, ra);
      return node;
    } else if (ra > node.data.ra) {
      node.right = this.#removeNode(node.right, ra);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let successor = this.#findMin(node.right);
      node.data = successor.data;
      node.right = this.#removeNode(node.right, successor.data.ra);
      return node;
    }
  }

  #findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  count() {
    return this.#countRec(this.root);
  }

  #countRec(node) {
    if (node === null) return 0;
    return 1 + this.#countRec(node.left) + this.#countRec(node.right);
  }

  height() {
    return this.#heightRec(this.root);
  }

  #heightRec(node) {
    if (node === null) return -1;
    let leftHeight = this.#heightRec(node.left);
    let rightHeight = this.#heightRec(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  countLeaves() {
    return this.#countLeavesRec(this.root);
  }

  #countLeavesRec(node) {
    if (node === null) return 0;
    if (node.left === null && node.right === null) return 1;
    return this.#countLeavesRec(node.left) + this.#countLeavesRec(node.right);
  }

  averageGrade() {
    let totalSum = 0;
    let totalCount = this.count();
    if (totalCount === 0) return 0;

    this.inOrder((student) => {
      totalSum += student.media;
    });

    return totalSum / totalCount;
  }

  preOrder(callback) {
    this.#preOrderRec(this.root, callback);
  }

  #preOrderRec(node, callback) {
    if (node !== null) {
      callback(node.data);
      this.#preOrderRec(node.left, callback);
      this.#preOrderRec(node.right, callback);
    }
  }

  printTree() {
    this.#printTreeRec(this.root, 0);
  }

  #printTreeRec(node, level) {
    if (node !== null) {
      this.#printTreeRec(node.right, level + 1);
      console.log(' '.repeat(level * 4) + node.data.ra);
      this.#printTreeRec(node.left, level + 1);
    }
  }
}
