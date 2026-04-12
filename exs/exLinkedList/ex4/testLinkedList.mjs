import Linkedlist from "./LinkendList-ex3.mjs";

let list = new Linkedlist();

list.insert(0, 10);
list.insert(1, 55);
list.insert(2, 88);
list.insert(3, 99);
list.insert(4, 77);
list.insert(5, 22);
list.insert(6, 77);


console.log(list.print());

list.removeValue(77);
console.log(list.print());