import Stack from "./lib/Stack.mjs";

let frase = "Soccoram-me, subi no onibus em marrocos";

let stack = new Stack();

for(let i = 0; i < frase.length; i++){
    stack.push(frase.charAt(i));
}

console.log(stack.print());

let reverse = "";

while(!stack.isEmpty){
    reverse += stack.pop();
}

console.log(reverse)