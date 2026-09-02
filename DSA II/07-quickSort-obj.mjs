let pass = 0, comps = 0, changes = 0;

function quickSort(arr, start = 0, end = arr.length - 1){

  if(end <= start) return; // out condition
  pass++

  let pivot = end; // p = pivot

  let div = start - 1; // arr divisor

  for(let i = start; i < end; i++){
    comps++
    if(arr[pivot] > arr[i]){
      div++

      if(div !== i){
        [arr[i], arr[div]] = [arr[div], arr[i]]
        changes++;
      }
    }
  }

  div++;

  if(arr[div] > arr[pivot] && div !== pivot){
    [arr[div], arr[pivot]] = [arr[pivot], arr[div]]
    changes++
  }

  quickSort(arr, start, div - 1); // left side
  quickSort(arr, div + 1, end); // right side

}


import {nomes} from '../data/nomes-desord.mjs'

quickSort(nomes)

console.log(nomes)
console.log({pass, comps, changes})

