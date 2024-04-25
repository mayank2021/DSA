// Find the largest three distinct elements in an array
// Given an array with all distinct elements, find the largest three elements.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1).

// Examples:
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

//Method 1: sort the array and retunr the last three elements;

function LargestThree(arr) {
  arr.sort((a, b) => a - b);
  return {
    first: arr[arr.length - 1],
    second: arr[arr.length - 2],
    third: arr[arr.length - 3],
  };
}

// console.log(LargestThree([10, 4, 3, 50, 23, 90]));

//Method 2:

function LargestThreeM2(arr) {
  let first = (second = third = Number.MIN_SAFE_INTEGER);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    }

    if (arr[i] > second && arr[i] !== first) {
      third = second;
      second = arr[i];
    }

    if (arr[i] > third && arr[i] !== first && arr[i] !== second) {
      third = arr[i];
    }
  }

  return {
    first,
    second,
    third,
  };
}

// console.log(LargestThreeM2([10, 4, 3, 50, 23, 90]));
