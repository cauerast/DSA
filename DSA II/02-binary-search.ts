import { nomes } from '../data/vetor-nomes.mjs';

// search algorithm that needs a sorted array - binary search
let nums: number[] = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
function binarySearch(array: number[] | string[], value: string | number) {
  let init = 0;
  let end = array.length - 1;

  while (end >= init) {
    let mid = Math.floor((init + end) / 2);

    if (value === array[mid]) return mid;
    else if (value > array[mid]) {
      init = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log('99 position: ', binarySearch(nums, 88));
console.log(
  'ALEXANDRE position: ',
  binarySearch(nomes as string[], 'ALEXANDRE')
);
