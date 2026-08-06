export default class Deque{
    // deque = Double-Ended queue

    #data;
    constructor(){
        this.#data = [];
    }

    insertFront(value){
        if(this.#data.includes(value)){
            console.log("you can't insert a already include item in this deque")
            return;
        } else {
            return this.#data.unshift(value); // insert at index 0;
        }
    }
    insertBack(value){
        if(this.#data.includes(value)){
            console.log("you can't insert a already include item in this deque")
            return;
        } else {
            return this.#data.push(value); // insert at last index;
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