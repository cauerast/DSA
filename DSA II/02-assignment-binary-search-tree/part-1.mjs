// 1
import BynarySearchTree from './09-binary-tree.mjs';

const bst = new BynarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

let preArray = [];
let inArray = [];
let postArray = [];
bst.preOrderTraversal((value) => preArray.push(value));
bst.inOrderTraversal((value) => inArray.push(value));
bst.postOrderTraversal((value) => postArray.push(value));
console.log('PreOrder ->', preArray);
console.log('InOrder ->', inArray); // left side (least values) first, root and later we reach right side (greater values)
console.log('PostOrder ->', postArray);

// 2
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

preArray = [];
inArray = [];
postArray = [];
bst.preOrderTraversal((value) => preArray.push(value));
bst.inOrderTraversal((value) => inArray.push(value));
bst.postOrderTraversal((value) => postArray.push(value));
console.log('\nPreOrder ->', preArray);
console.log('\nInOrder ->', inArray);
console.log('\nPostOrder ->', postArray);
console.log('\nbst height ->', bst.height());
console.log('\ncount Leaves ->', bst.countLeaves());

// 3
// a)
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
console.log('\nbst height ->', bst.height());

// b)
bst.insert(50);
bst.insert(70);
bst.insert(30);
bst.insert(60);
bst.insert(80);
bst.insert(20);
bst.insert(40);

// c)

const bst2 = new BynarySearchTree();

bst2.insert(50);
bst2.insert(30);
bst2.insert(40);
bst2.insert(20);
bst2.insert(70);
bst2.insert(60);
bst2.insert(80);

let preArray2 = [];
let inArray2 = [];
let postArray2 = [];
bst2.preOrderTraversal((value) => preArray2.push(value));
bst2.inOrderTraversal((value) => inArray2.push(value));
bst2.postOrderTraversal((value) => postArray2.push(value));
console.log('PreOrder ->', preArray2);
console.log('InOrder ->', inArray2); // left side (least values) first, root and later we reach right side (greater values)
console.log('PostOrder ->', postArray2);
