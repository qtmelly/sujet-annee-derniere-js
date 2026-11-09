function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([]));
console.log(sumArray([1, 2, 3]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([-10, 100, 1, 4, 5]));
