/* 
   Selection sort - sorting by selection
   Given the following unsorted list: [ 5, 2, 4, 1 ]
   
   Step 1: Find the smallest number in the entire list and swap it with the first.
   [ 5, 2, 4, 1 ] -> The smallest number found is 1.
     ^        ^       Swap 5 and 1.
   [ 1, 2, 4, 5 ] -> The number 1 is now fixed at the beginning!
   
   Step 2: Find the smallest number starting from the second position [ 2, 4, 5 ].
   [ 1, 2, 4, 5 ] -> The smallest number is 2. It is already in the correct place.
        ^             No swap is needed.
   
   Step 3: Find the smallest number starting from the third position [ 4, 5 ].
   [ 1, 2, 4, 5 ] -> The smallest number is 4. It is already in the correct place.
           ^          No swap is needed.
   
   Final sorted result: [ 1, 2, 4, 5 ]
*/


// ps = selected position
// pm = min position
// i = index

// [5, 2, 6, 4, 1, 3]
// ps pm  i

import { nomes } from "../data/nomes-desord.mjs";

function selectionSortObj(arr){
  let pass = 0, comps = 0, changes = 0;

  for(let ps = 0; ps < arr.length - 1; ps++){
    pass++;

    let pm = ps + 1;
    for(let i = pm + 1; i < arr.length; i++){

      if(arr[pm] > arr[i]) pm = i;
      comps++;
    }

    if(arr[ps] > arr[pm]){
      [ arr[ps], arr[pm] ] = [ arr[pm], arr[ps] ];
      changes++;
    }
    comps++;
  }

  return arr;
}

console.log(selectionSortObj(nomes));
console.log({pass, comps, changes});