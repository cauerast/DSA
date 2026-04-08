import Stack from "./Stack-ex2.mjs";

let stack = new Stack();

console.log(stack.print());
console.log(stack.isEmpty);

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.print());

console.log(stack.pop())
console.log(stack.pop())

console.log(stack.history())