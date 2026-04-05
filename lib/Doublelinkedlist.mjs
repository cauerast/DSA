class Node {
    constructor(value){
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}

export default class DoublelinkedList{
    #head;
    #tail;
    #count;

    contructor(){
        this.#head = null;
        this.#tail = null;
        this.count = 0;
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count;
    }

    // method that search a node by your position
    #findNode(index){
        let node;

        // node at 1st half of list
        if(index < this.#count / 2){
            node = this.#head;
            for(let i = 0; i < index; i++){
                node = node.next;
            }
        } 
        
        // node at 2nd half of list
        else {
            node = this.#tail;
            for(let i = this.#count - 1; i > index; i--){
                node = node.prev;
            }
        }

        return node;
    }

    // inset any position method
    insert(index, value){
        let node = new node(value);

        // 1 - is empty
        if(this.isEmpty){
            this.#head = node;
            this.#tail = node;
        }
        
        // 2 - insert at first position
        else if(index === 0){
            node.next = this.#head;
            this.#head.prev = node;
            this.#head = node;
        }
        
        // 3 - insert at last position
        else if(index >= this.#count){
            node.prev = this.#tail;
            this.#tail.next = node;
            this.#tail = node;
        }

        // 4 - insert at intermediate positions
        else{
            let nodeIndex = this.#findNode(index);
            let before = nodeIndex.prev;

            before.next = node;
            node.prev = before;
            node.next = nodeIndex;
            nodeIndex = node;
        }

        this.#count++;
    }

    // insert at 1st position
    insertHead(value){
        this.insert(0, value);
    }

    // insert at last position
    insertTail(value){
        this.insert(this.#count, value)
    }

    // method that remove node
    remove(index){
        // empty list or index out of bounds
        if(this.isEmpty || index < 0 || index > this.#count - 1){
            return undefined;
        }

        let removed;
        // remove first node
        if(index === 0){
            removed = this.#head;
            this.#head = removed.next;
        }

        if(this.#head){
            this.#head.prev = null;
        }

        if(this.#count === 1){
            this.#tail = null;
        }

        else if(index === this.#count - 1){
            removed = this.#tail;
            this.tail = removed.prev;

            if(this.#tail){
                this.#tail.next = null;
            }

            if(this.#count === 1){
                this.#head = null;
            }
        }

        else{
            removed = this.#findNode(value);
            let before = removed.prev;
            let after = removed.next;

            before.next = after;
            after.prev = before;


        }

        this.#count--;

        return removed.data;
    }
    // removes the fisrt item
    removeHead(){
        return this.remove(0);
    }

    // reoves the last item 
    removeTail(){
        return this.remove(this.#count - 1);
    }

    peek(index){
        if(this.isEmpty || index < 0 || index > this.#count - 1){
            return undefined;
        }

        else {
            const node = this.#findNode(index);
            return node.data;
        }
    }

    peekHead(){
        return this.peek(0);
    }

    peekTail(){
        return this.peek(this.#count - 1);
    }

    indexOf(){
        if(this.isEmpty) return -1;

    }
}