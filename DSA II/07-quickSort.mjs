// mid case: O(n log n)
// best case: O(n log n)

//    [2, 5, 7, 1, 6, 3, 4] // switch (5, 1)
//        d     i        p  
//    [2, 1, 7, 5, 6, 3, 4] // switch (3, 7)
//           d        i  p   
//    [2, 1, 3, 5, 6, 7, 4] // end of for loop
//           d        i  p  
//    [2, 1, 3, 5, 6, 7, 4] // d++
//              d     i  p   
//    [2, 1, 3, 4, 6, 7, 5] // put pivot at array divisor
//              d     i  p     

// quickSort(arr, start, div - 1); // left side -> [2, 1, 3]
// quickSort(arr, div + 1, end); // right side -> [6, 7, 5]

// [ [2, 1, 3]     [4]     [6, 7, 5] ]
//   left side     div     right side

// [[1, 2, 3]     [4]     [5, 6, 7]]

// [1, 2, 3, 4, 5, 6, 7]

// ---------------------------------------------------------------


function quickSort(arr, start = 0, end = arr.length - 1){
  if(end <= start) return; // out condition

  let pivot = end; // p = pivot

  let div = start - 1; // arr divisor

  for(let i = start; i < end; i++){
    if(arr[pivot] > arr[i]){
      div++

      if(div !== i){
        [arr[i], arr[div]] = [arr[div], arr[i]]
      }
    }
  }

  div++;

  if(arr[div] > arr[pivot] && div !== pivot){
    [arr[div], arr[pivot]] = [arr[pivot], arr[div]]
  }

  quickSort(arr, start, div - 1); // left side
  quickSort(arr, div + 1, end); // right side
}


let nums = [2,5,7,1,6,3,4];

quickSort(nums)

console.log(nums)

