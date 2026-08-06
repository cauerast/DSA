// medir a complexidade de O(n!) usando recursividade;
function factorial(n){
    const start = performance.now();

    function factorialRecursive(num){
        if(num === 0) return 1;
        return num * factorialRecursive(num - 1);
    }

    const result = factorialRecursive(n);
    const final = performance.now();

    const elapsedTime = final - start;

    // estimate used memory elapsed by fn call;
    const stackedMemoryMB = (n / 4) / (1024 * 1024);

    // real used memory elapsed by fn call;
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

factorial(170);