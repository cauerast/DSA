
// Queue -> FIFO = First in First Out
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
                output += ", ";
            }
            output += `(${i+1}º): ${this.#data[i]}`;
        }
        return output + "]";
    }

}