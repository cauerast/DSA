import Stack from './lib/Stack.mjs';

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
    // Use typeof to reference the class type if Stack doesn't export a type natively
    const stack = new Stack(); 

    stack.push(start);

    // 1. Added parentheses to call isEmpty() as a method
    while (!stack.isEmpty) { 
        const node = stack.pop();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

            // 2. Added loop to push neighboring nodes into the stack 
            const neighbor = g[node] || [];
            for (let i = neighbor.length - 1; i >= 0; i--) {
                if (!visited.has(neighbor[i])) {
                    stack.push(neighbor[i]);
                }
            }
        }
    }
}

dfs(graph, 'A');
