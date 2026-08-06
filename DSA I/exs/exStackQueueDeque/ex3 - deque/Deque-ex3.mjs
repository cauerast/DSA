export default class Deque{
    // deque = Double-Ended queue

    #data;
    #maxLength;
    constructor(){
        this.#data = [];
        this.#maxLength = 5;
    }

    insertFront(value){
        if(this.#data.length < this.#maxLength){
            this.#data.unshift(value); // insert at index 0;
        } else {
            console.log("You can't insert more itens in this deque");
        }
    }
    insertBack(value){
        if(this.#data.length < this.#maxLength){
            this.#data.push(value); // insert at last index;
        } else {
            console.log("You can't insert more itens in this deque");
        }
    }

    removeFront(){
        return this.#data.shift();
    }
    removeBack(){
        return this.#data.pop();
    }

    peekFront(){ // front -> first position
        return this.#data[0]; 
    }
    peekBack(){ // back -> last position
        return this.#data[this.#data.length - 1];
    }

    get isEmpty(){
        return this.#data.length === 0 ? "yes" : "not";
    }

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