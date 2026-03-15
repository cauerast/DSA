/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.

*/

// 1 ->
import Queue from "../../lib/Queue.mjs";
let bankQueue = new Queue();

bankQueue.enqueue("customer 101");
bankQueue.enqueue("customer 102");
bankQueue.enqueue("customer 103");
bankQueue.enqueue("customer 104");
bankQueue.enqueue("customer 105");

// 2 ->
console.log("\nBank queue before -> \n", bankQueue.print());

// 3 ->
console.log("\nCustomer Served -> \n", bankQueue.peek());
bankQueue.dequeue();

// 4 -> 
console.log("\nBank queue rn -> \n", bankQueue.print());

// 5 -> 
console.log("\ncustomer 106 and 107 added to the queue")
bankQueue.enqueue("customer 106");
bankQueue.enqueue("customer 107");

// 6 ->
console.log("\nBank queue rn -> \n", bankQueue.print());

// 7 -> 
console.log("\nNext customer to be served -> \n", bankQueue.peek())

// 8 ->
console.log("\nNext customer called to be served!\n ")
bankQueue.dequeue();
console.log("Bank queue rn -> \n", bankQueue.print());
