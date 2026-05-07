 // O(1) -> constant time
function ex1(arr){
    if(arr.length === 0) return null;
    return arr[0];
}

const arr = [5,7,8,9,2,3,4];
console.log(ex1(arr))
console.log("\n\n----------------\n\n");



// O(log n) -> log time   -->   number of times
function ex2(n){
    let i = 1;
    while(i < n){
        console.log(i);
        i *= 2;
    }
}
ex2(10);
console.log("\n\n----------------\n\n");



// O(n) -> linear time
function ex3(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
const arr2 = [5,7,8,9,2,3,4,10,54];
ex3(arr2);
console.log("\n\n----------------\n\n");


// O(nˆ2) -> quadratic time
function ex4(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i], arr[j]);
        }
    }
}

const arr3 = [5,7,8,9,2,3];
ex4(arr3);


// medir a complexidade de O(n!)
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
    if(typeof process !== 'undefined' && process.memoryUsage){
        totalMemoryMB = process.memoryUsage.heepUsed / 1024 / 1024;
    }

    console.log("--- analytics ---");
    console.log("input time: ", n);
    console.log("factorial result: ", result.toFixed(2));
    console.log("Execution time: ", elapsedTime.toFixed(6), 'ms');
    console.log("Stacked Memory: ", stackedMemoryMB, 'MB');
    console.log("Total memory used by CPU: ", typeof totalMemoryMB === 'number' ? totalMemoryMB.toFixed(2) + 'MB': totalMemoryMB);
}

factorial(170);