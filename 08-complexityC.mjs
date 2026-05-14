// medir a complexidade de O(n!) sem usar recursividade;
function factorialIterative(n) {
    const start = performance.now();

    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }

    const end = performance.now();
    const elapsedTime = end - start;

    const stackedMemoryMB = (n * 4) / (1024 * 1024);
    let totalMemoryMB = 'N/A';
    if(typeof process !== 'undefined' && process.memoryUsage()){
        totalMemoryMB = process.memoryUsage().heapUsed / 1024 / 1024;
    }

    console.log("--- analytics ---");
    console.log("input time: ", n);
    console.log("factorial result: ", result.toFixed(2));
    console.log("Execution time: ", elapsedTime.toFixed(6), 'ms');
    console.log("Stacked Memory: ", stackedMemoryMB, 'MB');
    console.log("Total memory used by CPU: ", typeof totalMemoryMB === 'number' ? totalMemoryMB.toFixed(2) + 'MB': totalMemoryMB);
}

factorialIterative(5);