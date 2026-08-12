import { objNomes } from '../data/vetor-obj-nomes.mjs';

function compare(obj, value) {
  if (value === obj.first_name) return 0;
  else if (value > obj.first_name) return 1;
  else return -1;
}

function binarySearch(array, value) {
  let init = 0;
  let end = array.length - 1;

  while (init <= end) {
    let mid = Math.floor((init + end) / 2);

    switch (compare(array[mid], value)) {
      case 0:
        return mid;
      case 1:
        init = mid + 1;
        break;
      default:
        end = mid - 1;
        break;
    }
  }
  return -1;
}

console.log('first name index', binarySearch(objNomes, 'ALEXANDRE'));
