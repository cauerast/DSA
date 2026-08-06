import Queue from '../lib/Queue.mjs';

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

function bfs(g: Graph, start: string): void {
    const visited: Set<string> = new Set();
    // Use typeof to reference the class type if Queue doesn't export a type natively
    const queue = new Queue(); 

    queue.enqueue(start);

    // 1. Added parentheses to call isEmpty() as a method
    while (!queue.isEmpty) { 
        const node: string = queue.dequeue();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

            // 2. Added loop to push neighboring nodes into the queue
            const neighbors = g[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.enqueue(neighbor);
                }
            }
        }
    }
}

bfs(graph, 'A');
