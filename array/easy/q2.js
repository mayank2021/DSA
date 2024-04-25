// Find Second largest element in an array

// Examples:
// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.

// M1 : sort and return the second last element

// M2 :
function secondLargest(arr) {
  let first = (sec = Number.MIN_SAFE_INTEGER);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      sec = first;
      first = arr[i];
    }

    if (arr[i] > sec && arr[i] !== first) {
      sec = arr[i];
    }
  }

  return sec;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1]));
