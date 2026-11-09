function max3(a, b, c) {
  return a >= b && a >= c ? a : b >= a && b >= c ? b : c;
}

console.log(max3(1, 3, 4));
console.log(max3(-1, -2, -3));
