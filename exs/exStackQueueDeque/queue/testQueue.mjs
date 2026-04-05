import Queue from "./Queue-ex1.mjs";

let queue = new Queue();

queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.print());
console.log(queue.getOperationCount()) //  <-

