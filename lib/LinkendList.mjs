class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

export default class Linkedlist{
    // Strucuture have Data and pointers to the next node

    #head; // start
    #tail; // end
    #count; // counter to count nodes

    constructor(){
        this.#head = null;
        this.tail = null;
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count;
    }

    insert(index, value){
        const node = new Node(value);

        // first insert
        if(this.isEmpty){
            this.#head = node;
            this.#tail = node;
        }

        // insert at index 0
        else if(index === 0){
            node.next = this.#head;
            this.#head = node;
        }

        // insert at the end
        else if(index >= this.#count){
            this.#tail.next = node;
            this.#tail = node;
        }

        this.#count++;
    }
}
