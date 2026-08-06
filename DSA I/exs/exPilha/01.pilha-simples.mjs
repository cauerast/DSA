/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
*/

import Stack from "../../lib/Stack.mjs";

let stack = new Stack();

stack.push(5) // add 5 to stack -> [5]
stack.push(9) // add 9 to stack -> [5, 9]
stack.pop() // remove item 9 -> [5]
stack.push(3) // add 3 to stack -> [5, 3]
stack.push(8) // add 8 to stack -> [5, 3, 8]
stack.pop() // remove item 8 -> [5, 3]
stack.pop() // remove item 3 -> [5]
stack.push(6) // add 6 to stack -> [5, 6]
stack.push() // remove item 6 -> [5]
stack.push(2) // add 2 to stack -> [5, 2]
stack.pop() // remove item 2 [5]
stack.push(10) // add 10 to stack -> [5, 10]
stack.push(1) // add 1 to stack -> [5, 10, 1]
stack.pop() // remove item 1 -> [5, 10]
stack.pop() // remove item 10 -> [5]
stack.push(15) // add 15 to stack -> [5, 15]
stack.pop() // remove item 15 -> [5]
stack.pop() // remove item 5 -> []

// at the final, stack is empty