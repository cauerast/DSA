import Linkedlist from "./LinkendList-ex1.mjs";

const list = new Linkedlist();

list.insert(0, 2);
list.insert(1, 4);
list.insert(2, 6);
list.remove(2);

console.log(list.print())