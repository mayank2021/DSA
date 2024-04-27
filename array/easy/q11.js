// Print all Distinct ( Unique ) Elements in given Array

// Examples:
// Input: arr[] = {12, 10, 9, 45, 2, 10, 10, 45}
// Output: 12, 10, 9, 45, 2

//Method 1
function distinct(arr) {
  return [...new Set(arr)];
}

console.log(distinct([12, 10, 9, 45, 2, 10, 10, 45]));

//Method 2
function distinctM2(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(distinctM2([12, 10, 9, 45, 2, 10, 10, 45]));
