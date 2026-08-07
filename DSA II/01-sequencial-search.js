const fruits = ['laranja', 'maca', 'uva', 'pera', 'jabuticaba', 'limao'];
const numbers = [1, 5 , 7, 10, 2, 24, 15];

function sequencialSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}

console.log("searching tangerina: ", sequencialSearch(fruits, "tangerina"))
console.log("searching number 5: ", sequencialSearch(numbers, 5))
