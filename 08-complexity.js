 // O(1) -> constant time
function ex1(arr){
    if(arr.length === 0) return null;
    return arr[0];
}

const arr = [5,7,8,9,2,3,4];
console.log(ex1(arr))
console.log("\n\n----------------\n\n");



// O(log n) -> log time    -->   number of times
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