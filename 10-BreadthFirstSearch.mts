import Stack from './lib/Queue.mjs'

interface Graph {
    [key: string]: string[];
}

const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

// bfs ->

function bfs(g:Graph, start:string): void {
    // non-repeatable values data structure. Set() has te has() method.
    const visited:Set<string> = new Set();
    const stack:Stack = new Stack();

    stack.enqueue(start);

    while(!stack.isEmpty){
        const node:string = stack.dequeue();

        if(!visited.has(node)){
            console.log(node);
            visited.add(node);
        }
    }
}

bfs(graph, 'A');