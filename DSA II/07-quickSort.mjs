// mid case: O(n log n)
// best case: O(n log n)

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

