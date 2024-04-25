// Move all zeroes to end of array
// Given an array of random numbers, Push all the zero’s of a given array to the end of the array.
// The order of all other elements should be same.
// Expected time complexity is O(n) and extra space is O(1).

// Example:
// Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

function moveZerosToEnd(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
}

let a = [1, 2, 0, 4, 3, 0, 5, 0];
moveZerosToEnd(a);
console.log(a);
