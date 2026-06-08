import Stack from './lib/Stack.mjs';

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
}

function dfs(g, start) {
    const visited = new Set();
    const stack = new Stack();

    stack.push(start);

    while (!stack.isEmpty) {
        const node = stack.pop();

        if (!visited.has(node)) {
            console.log(node);
            visited.add(node);

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
