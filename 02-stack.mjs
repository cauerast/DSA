import Stack from "./lib/Stack.mjs";

let stack = new Stack();

console.log(stack.print());
console.log(stack.isEmpty);

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.print());
console.log(stack.isEmpty);

let removed = stack.pop();
console.log({removed}, stack.print());

let last = stack.peek();
console.log({last}, stack.print())