import DoublelinkedList from "./lib/Doublelinkedlist.mjs";
let list = new DoublelinkedList();

console.log("list is empty ? ", list.isEmpty ? "yes" : "no");
console.log(list.print())

list.insert(0, "Fiat 147");
list.insert(1, "Opala");
console.log("list is empty ? ", list.isEmpty ? "yes" : "no");
console.log(list.print())

list.insertTail("Chevette");
console.log(list.print());


removed = list.remove(1);
console.log({removed}, list.print());

let i0 = list.peek(0);
let i1 = list.peek(1);
console.log({i0, i1})

let posChevette = list.indexOf("Chevette");
console.log({posChevette});
