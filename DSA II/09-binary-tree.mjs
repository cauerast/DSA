// BINARY SEARCH TREE (BST)

//              nodes (n)
//  leftNode(< n)      rightNode(> n)

// --- TERMINOLOGY & GLOSSARY ---
// * Binary Tree: A hierarchical data structure where each node has at most two children.
// * Nodes (n): The individual elements containing a value and pointers to their children.
// * Parent Node: A node that has one or more child nodes connected below it.
// * Leaf Nodes: Nodes at the very bottom of the tree that have no children
// * Left Child: The child node positioned to the left (value < n in a BST).
// * Right Child: The child node positioned to the right (value > n in a BST).
// * Cardinality: The total node quantity or size of the tree.
// * Height: The length of the longest path from the root to a leaf node.

// --- TRAVERSAL METHODS ---
// * Pre-Order (VLR)  -> Visit (Root), Left, Right
// * In-Order (LVR)   -> Left, Visit (Root), Right (Yields sorted order in a BST)
// * Post-Order (LRV) -> Left, Right, Visit (Root)

// EXTENDED VISUAL EXAMPLE
//
//            8
//          /   \
//         4     10
//        / \      \
//       2   6      12
//      / \
//     1   3
//
// --- METRICS & ROLES FOR THIS SPECIFIC TREE ---
// * Cardinality = 8
// * Height = 4
// * Leaf Nodes = [1, 3, 6, 12]
//
// --- TRAVERSAL OUTPUTS ---
// * Pre-Order (VLR)  -> 8, 4, 2, 1, 3, 6, 10, 12
// * In-Order (LVR)   -> 1, 2, 3, 4, 6, 8, 10, 12
// * Post-Order (LRV) -> 1, 3, 2, 6, 4, 12, 10, 8
// ============================================================================

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  #root;
  constructor() {
    this.#root = null;
  }

  insert(value) {
    const inserted = new Node(value);

    // first case, empty tree
    if(this.#root === null) this.#root = inserted

    // second case, traveling tree recursively
    else this.#insertNode(inserted, this.#root)

  }

  #insertNode(){
    return 
  }
  // #insertNode(inserted, node){
  //   if(inserted < node) return node.left = inserted
  //   else if (inserted > node) return node.right = inserted
  //   else return;
  // }
}
