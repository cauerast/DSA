
// Stack -> LIFO = Last in First Out

/* 
    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/

export default class Stack{
    #data;

    constructor(){
        this.#data = [];
    }
    // add
    push(value){
        return this.#data.push(value);
    }
    // remove and show to console
    pop(){
        return this.#data.pop();
    }
    //
    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0;
    }

    print(){
        return JSON.stringify(this.#data);
    }
}