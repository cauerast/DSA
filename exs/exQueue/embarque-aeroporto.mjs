/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.
*/

// 1 -> 
import Queue from "../../lib/Queue.mjs";
let airportQueue = new Queue();

airportQueue.enqueue("passenger A");
airportQueue.enqueue("passenger B");
airportQueue.enqueue("passenger C");
airportQueue.enqueue("passenger D");
airportQueue.enqueue("passenger E");

// 2 ->
console.log("airport queue rn ->\n", airportQueue.print());

// 3 ->
console.log("\npassenger called ->", airportQueue.dequeue());

// 4 ->
console.log("\nairport queue rn ->\n", airportQueue.print());

// 5 -> 
airportQueue.enqueue("passenger F");
airportQueue.enqueue("passenger G");
airportQueue.enqueue("passenger H");

// 6 ->
console.log("\nairport queue rn ->\n", airportQueue.print());

// 7 -> 
console.log("\nnext passenger to be called ->", airportQueue.peek());

// 8 -> 
airportQueue.dequeue();
console.log("\nairport queue rn ->\n", airportQueue.print());