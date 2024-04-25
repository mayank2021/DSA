// Rearrange array such that even positioned are greater than odd
// Given an array arr[] of N elements, sort the array according to the following relations:

// arr[i] >= arr[i – 1], if i is even, ∀ 1 <= i < N
// arr[i] <= arr[i – 1], if i is odd, ∀ 1 <= i < N
// Print the resultant array.

// Examples:
// Input: N = 4, arr[] = {1, 2, 2, 1}
// Output: 2 1 2 1

function evenGreaterThanOdd(arr) {
  let res = [];
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      // even
      res.push(arr[right]);
      right--;
    } else {
      //odd
      res.push(arr[left]);
      left++;
    }
  }

  return res;
}

console.log(evenGreaterThanOdd([1, 2, 2, 1]));
