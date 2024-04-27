// Count the number of possible triangles
// Given an unsorted array of positive integers, find the number of triangles that can be
// formed with three different array elements as three sides of triangles. For a triangle
// to be possible from 3 values, the sum of any of the two values (or sides) must be greater
// than the third value (or third side).

// Examples:
// Input: arr= {4, 6, 3, 7}
// Output: 3
// Explanation: There are three triangles
// possible {3, 4, 6}, {4, 6, 7} and {3, 6, 7}.
// Note that {3, 4, 7} is not a possible triangle.

//Approach :- [4,6,3,7]
// sort the array - [3,4,6,7]
// now if fist + second > last - agar ye true hai matlab triangle ban sakta hai

function triangles(arr) {
  let count = 0;
  arr.sort((a, b) => a - b);

  for (let i = arr.length - 1; i >= 0; i--) {
    let l = 0;
    let r = i - 1;
    while (l < r) {
      if (arr[l] + arr[r] > arr[i]) {
        count++;
      }
      l++;
    }
  }
  return count;
}

console.log(triangles([4, 6, 3, 7]));
