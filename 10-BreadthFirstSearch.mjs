import Queue from './lib/Queue.mjs';

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
}

function dfs(g, start)  {
    const visited = new Set();
    // Use typeof to reference the class type if queue doesn't export a type natively
    const queue = new Queue(); 

    queue.enqueue(start);

    // 1. Added parentheses to call isEmpty() as a method
    while (!queue.isEmpty) { 
        const node = queue.dequeue();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

            // 2. Added loop to enqueue neighboring nodes into the queue
            const neighbors = g[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.enqueue(neighbor);
                }
            }
        }
    }
}

dfs(graph, 'A');
