function mergeSort(arr){
  if(arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, mid); // slice(a, b) -> pega do start ate o end - 1;
  let rightArr = arr.slice(mid); // slice(a) -> pega do ate o fim;

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  let leftPos = 0; rightPos = 0; resArr = [];

  while(leftPos < leftArr.length && rightPos < rightArr.length){
    if(leftArr[leftPos] < rightArr[rightPos]){
      resArr.push(leftArr[leftPos]);
      leftPos++;
    } else {
      resArr.push(rightArr[rightPos]);
      rightPos++;
    }
  }
}

let nums = [77, 44, 33, 77, 66, 88, 99, 90, 23, 67, 21, 1, 8];