import Queue from "./lib/Queue.mjs";


let queue = new Queue();
console.log(`is empty? ${queue.isEmpty}`);
console.log(queue.print());

queue.enqueue("caue");
queue.enqueue("igor");
queue.enqueue("miguel");

console.log(queue.print());

let next = queue.peek();
console.log({next});
queue.dequeue();
console.log(queue.print());
