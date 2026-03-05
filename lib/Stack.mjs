
// Stack -> LIFO = Last in First Out
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