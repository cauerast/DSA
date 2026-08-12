const fruitsTS = ['laranja', 'maca', 'uva', 'pera', 'jabuticaba', 'limao'];
const numbersTS: Array<number> = [1, 5, 7, 10, 2, 24, 15];

function sequencialSearchTs<T>(array: T[], value: T): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log('searching tangerina: ', sequencialSearchTs(fruits, 'tangerina'));
console.log('searching number 5: ', sequencialSearchTs(numbers, 5));
