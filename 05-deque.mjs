import Deque from "./lib/Deque.mjs";

// to buy

let toBuy = new Deque();

console.log(toBuy.print());
console.log("Is the list empty: ", toBuy.isEmpty) // get methods dont need ();

// foods
toBuy.insertFront("Rice");
toBuy.insertFront("Meal");
toBuy.insertFront("Beans");
toBuy.insertFront("tomatoes");

// Outher prod
toBuy.insertBack("CleanProduct");
toBuy.insertBack("laundry detergent");
toBuy.insertBack("detergent");

console.log(toBuy.print());


let removed = toBuy.removeFront();
console.log({removed});
console.log(toBuy.print());

let front = toBuy.peekFront();
let back = toBuy.peekBack();

console.log({front});
console.log({back});

