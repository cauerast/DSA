import BinarySearchTree from "./09-binary-tree.mjs";

const tree = new BinarySearchTree();
tree.insert(48);
tree.insert(71);
tree.insert(15);
tree.insert(29);
tree.insert(57);
tree.insert(1);
tree.insert(80);
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


/// Removing test

// before removes
let REMOVE_PATH = [];
tree.inOrderTraversal(value => REMOVE_PATH.push(value));
console.log('Before removes:', REMOVE_PATH);

// 0 degree remove
tree.remove(64);
REMOVE_PATH = [];
tree.inOrderTraversal(value => REMOVE_PATH.push(value));
console.log('After removing 64:', REMOVE_PATH);

// 1st degree remove
tree.remove(1);
REMOVE_PATH = [];
tree.inOrderTraversal(value => REMOVE_PATH.push(value));
console.log('After removing 1:', REMOVE_PATH);

// 2nd degree remove
tree.remove(15);
REMOVE_PATH = [];
tree.inOrderTraversal(value => REMOVE_PATH.push(value));
console.log('After removing 15:', REMOVE_PATH);

// root remove
tree.remove(48);
REMOVE_PATH = [];
tree.inOrderTraversal(value => REMOVE_PATH.push(value));
console.log('After removing 48 (root):', REMOVE_PATH);
// new root now -> 
REMOVE_PATH = [];
tree.preOrderTraversal(value => REMOVE_PATH.push(value));
console.log('New Root is: ', REMOVE_PATH[0]); // root is aways the grather value from left side or the least value from right side. In that case, the least value from right side because we chose that on binary-tree.mjs code