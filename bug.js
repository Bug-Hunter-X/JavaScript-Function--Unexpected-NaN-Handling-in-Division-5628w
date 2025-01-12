function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle cases where a or b is NaN
  }
  return a / b;
}

console.log(foo(10, 0)); // Infinity
console.log(foo(10, NaN)); // NaN
console.log(foo(NaN, 10)); // NaN