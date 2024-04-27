// Sort an array in wave form
// Examples:
// Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
// Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80}

function waveForm(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  let right = arr.length - 1;
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      res.push(arr[right]);
      right--;
    } else {
      res.push(arr[left]);
      left++;
    }
  }
  return res;
}

console.log(waveForm([10, 5, 6, 3, 2, 20, 100, 80]));
