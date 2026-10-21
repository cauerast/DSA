import BinarySearchTree from "./09-binary-tree.mjs";

const tree = new BinarySearchTree();

tree.insert(80);
tree.insert(14);
tree.insert(19);
tree.insert(37);
tree.insert(23);
tree.insert(21);
tree.insert(25);
tree.insert(51);
tree.insert(64);

let inOrderArray = [];
let preOrderArray = [];
let postOrderArray = [];

// In-Order (LVR)
tree.inOrderTraversal(value => inOrderArray.push(value));
console.log('In-Order Path:', inOrderArray);

// Pre-Order (VLR)
tree.preOrderTraversal(value => preOrderArray.push(value));
console.log('Pre-Order Path:', preOrderArray);

// Post-Order (LRV)
tree.postOrderTraversal(value => postOrderArray.push(value));
console.log('Post-Order Path:', postOrderArray);

