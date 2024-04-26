// Reversal algorithm for Array rotation
// Given an array arr[] of size N, the task is to rotate the array by d position to the left.

// Examples:
// Input:  arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3, 4, 5, 6, 7, 1, 2

// Method 1
function reversalAlgo(arr, d) {
  for (let i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
}

// let a = [1, 2, 3, 4, 5, 6, 7];
// reversalAlgo(a, 2);
// console.log(a);

// Method 2
// divide the array into 2 parts -> 0-d(array a) & d-length(array b)
// revrse array and array b separatly and join them -> 2 1 7 6 5 4 3
// now reverse the whose array -> 3 4 5 6 7 1 2

function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
function reversalAlgoM2(arr, d) {
  let a = reverseArr(arr.slice(0, d));
  let b = reverseArr(arr.slice(d));
  return reverseArr([...a, ...b]);
}
let a = [1, 2, 3, 4, 5, 6, 7];
console.log(reversalAlgoM2(a, 2));
