// Sort an array which contain 1 to n values
// You have given an array which contain 1 to n element, your task is to sort this array in an efficient way and without replace with 1 to n numbers.
// Examples :
// Input : arr[] = {10, 7, 9, 2, 8, 3, 5, 4, 6, 1};
// Output : 1 2 3 4 5 6 7 8 9 10

// Quick sort

function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }

  return [...quick(left), pivot, ...quick(right)];
}

let a = [10, 7, 9, 2, 8, 3, 5, 4, 6, 1];
console.log(quick(a));
