// Segregate even and odd numbers using Lomuto’s Partition Scheme
// Given an array arr[] of integers, segregate even and odd numbers in the array such that all the even
// numbers should be present first, and then the odd numbers.

// Examples:
// Input: arr[] = {7, 2, 9, 4, 6, 1, 3, 8, 5}
// Output: 2 4 6 8 7 9 1 3 5

// if order doesn't matter
function segregateEvenOdd(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      res.unshift(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(segregateEvenOdd([7, 2, 9, 4, 6, 1, 3, 8, 5]));

// if order does matter
function segregateEvenOddM2(arr) {
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [...even, ...odd];
}

console.log(segregateEvenOddM2([7, 2, 9, 4, 6, 1, 3, 8, 5]));

// if order does matter - without using extra space
function segregateEvenOddM3(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
}
let a = [7, 2, 9, 4, 6, 1, 3, 8, 5];
segregateEvenOddM3(a);
console.log(a);
