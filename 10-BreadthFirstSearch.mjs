import Queue from './lib/Queue.mjs';

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
}

function bfs(g, start)  {
    const visited = new Set();
    const queue = new Queue(); 

    queue.enqueue(start);

    while (!queue.isEmpty) { 
        const node = queue.dequeue();

        if (!visited.has(node)) {
            console.log(node); // show
            visited.add(node); // visit

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

bfs(graph, 'A');
