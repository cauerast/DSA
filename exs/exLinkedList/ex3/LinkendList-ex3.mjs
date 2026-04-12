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
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count;
    }

    reverse(){
        if(this.isEmpty) return -1;

        let node = this.#head; // start node at head
        let prev = null;

        this.#tail = this.#head;

        while(node != null){
            let aux = node.next; // start aux
            node.next = prev; // node points to previous node, inverting the pointers
            prev = node; // prev walks to next
            node = aux; // node walks to next
        }
        this.#head = prev;
    }

    countOccurrences(n){
        let node = this.#head;
        let acc = 0;
        while(node != null){
            if(node.data === n){
                acc++;
            } else {
                node = node.next;
            }
        }
        return `${n} appears ${acc} times at linkedList`;
    }
    
    insert(index, value){
        const node = new Node(value);

        // 1- first insert
        if(this.isEmpty){
            this.#head = node;
            this.#tail = node;
        }

        // 2- insert at index 0
        else if(index === 0){
            node.next = this.#head;
            this.#head = node;
        }

        // 3- insert at the end
        else if(index >= this.#count){
            this.#tail.next = node;
            this.#tail = node;
        }

        // 4- intermediate index
        else{
            let before = this.#head;
            for(let i = 1; i < index; i ++){
                before = before.next;
            }

            let after = before.next;

            node.next = after;
            before.next = node;
        }

        this.#count++;
    }

    insertHead(value){
        this.insert(0, value);
    }

    insertTail(value){
        this.insert(this.#count, value);
    }

    // remove method
    remove(index){
        // 1 - empty list or position is out of bounds
        if(this.isEmpty || index < 0 || index > this.#count - 1){
            return undefined;
        }

        let removed;

        // 2 - remove the start 
        if(index === 0){
            removed = this.#head;
            this.#head = this.#head.next;
            
            // only 1 node case
            if(this.#count === 1){
                this.#tail = null;
            }
        }

        // remove intermediate or final node method
        else {
            let before = this.#head;

            for(let i = 1; i < index; i++){
                before = before.next;
            }

            removed = before.next;
            let after = removed.next;
            before.next = after;

            if(index === this.#count - 1){
                this.#tail = before;
            }
        }

        this.#count--;

        return removed.data;
    }

    removeHead(){
        return this.remove(0);
    }

    removeTail(){
        return this.remove(this.#count - 1);
    }

    indexOf(value){
        // 1st case -> empty list
        if(this.isEmpty) return -1;

        let node = this.#head;

        for(let i = 0; i < this.#count; i++){
            if(node.data === value){
                return i;
            }
            node = node.next
        }
        return -1;
    }

    peek(index){
        // 1st case -> empty list or index out of bounds
        if(this.isEmpty || index < 0 || index > this.#count - 1){
            return undefined;
        }

        // 2nd case -> sequential search
        let node = this.#head;
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node.data;
    }

    peekHead(){
        return this.peek(0);
    }

    peekTail(){
        return this.peek(this.#count - 1)
    }

    print(){
        let output = "( ";
        let node = this.#head

        for(let i = 0; i < this.#count; i++){
            if(output !== "( "){
                output += ", ";
            }
            output += `[${i}]: ${node.data}`;
            node = node.next;
        }
        output += ` ), count: ${this.#count}`;

        return output;
    }
}
