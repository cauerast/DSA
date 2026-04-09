import Linkedlist from "./LinkendList.mjs";

let list = new Linkedlist();

list.insert(0, 10);
list.insert(1, 55);
list.insert(2, 88);

console.log(list.print());

list.reverse();
console.log(list.print());