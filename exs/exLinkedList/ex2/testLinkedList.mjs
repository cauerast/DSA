import Linkedlist from "./LinkendList-ex2.mjs";

let list = new Linkedlist();

list.insert(0, 10);
list.insert(1, 55);
list.insert(2, 88);
list.insert(3, 99);
list.insert(4, 77);
list.insert(5, 22);

console.log(list.print());

list.reverse();
console.log(list.print());