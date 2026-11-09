function isBetween(n, a, b) {
  if (n >= a && n <= b) {
    return true;
  } else {
    return false;
  }
}
console.log(isBetween(1, 3, 4));
console.log(isBetween(0, 0, 10));
console.log(isBetween(-2, -4, -2));
