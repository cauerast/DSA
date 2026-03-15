
// Queue -> FIFO = First in First Out

/*
 - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*/

export default class Queue{
    
    #data; // encapsulamento = private
    constructor(){
        this.#data = [];
    }

    // add items to queue
    enqueue(value){
        this.#data.push(value);
    }

    // remove items from queue (aways index 0);
    dequeue(){
        return this.#data.shift();
    }

    // peek - see the first item 
    peek(){
        return this.#data[0];
    }

    get isEmpty(){
        return this.#data.length === 0;
    }

    // print the queue
    print(){
        let output = "[";
        for(let i = 0; i < this.#data.length; i++){
            if(output != "["){
                output += ", \n";
            }
            output += `(${i+1}º): ${this.#data[i]}`;
        }
        return output + "]";
    }

}