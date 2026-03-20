import Linkedlist from "./lib/LinkendList.mjs";

const list = new Linkedlist();

console.log("list is empty? ", list.isEmpty ? "Yes":"No");

list.insert(0, "Fusca");
list.insert(0, "Corcel");
console.log(list.print());

list.insert(2, "Opala");
list.insert(3, "Chevette");
list.insert(4, "Maverick");
console.log(list.print());

list.insert(3, "Brasilia");
console.log(list.print());

list.inserHead("Belina");
list.insertTail("Gol");
console.log(list.print());

let removed = list.remove(0);
console.log({removed});
console.log(list.print())

removed = list.remove(4);
console.log({removed});
console.log(list.print());

let indexFusca = list.indexOf("Fusca");
let indexOpala = list.indexOf("Opala");
let indexGol = list.indexOf("Gol");
let indexXXX = list.indexOf("XXX");

console.log({indexFusca, indexGol, indexOpala, indexXXX});

let idx0 = list.peek(0);
let idx1 = list.peek(1);
let idx4 = list.peek(4);

console.log({idx0, idx1, idx4});

