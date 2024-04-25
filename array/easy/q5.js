// Rearrange an array in maximum minimum form using Two Pointer Technique
// Given a sorted array of positive integers, rearrange the array alternately i.e
// first element should be a maximum value, at second position minimum value, at third position second max, at
// fourth position second min, and so on.

// Examples:
// Input: arr[] = {1, 2, 3, 4, 5, 6, 7}
// Output: arr[] = {7, 1, 6, 2, 5, 3, 4}

function maxMinArragement(arr) {
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

console.log(maxMinArragement([1, 2, 3, 4, 5, 6, 7]));
