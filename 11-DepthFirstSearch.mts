import Stack from './lib/Stack.mjs';

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

function dfs(g: Graph, start: string): void {
    const visited: Set<string> = new Set();
    // Use typeof to reference the class type if Stack doesn't export a type natively
    const stack = new Stack(); 

    stack.push(start);

    // 1. Added parentheses to call isEmpty() as a method
    while (!stack.isEmpty) { 
        const node: string = stack.pop();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

            // 2. Added loop to push neighboring nodes into the stack
            const neighbors = g[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

dfs(graph, 'A');
