import Deque from "./Deque-ex3.mjs";

// to buy

let deque = new Deque();

deque.insertFront(1);
deque.insertBack(2);
deque.insertFront(3);
deque.insertBack(4);
deque.insertFront(5);
deque.insertBack(6);

console.log(deque.print())