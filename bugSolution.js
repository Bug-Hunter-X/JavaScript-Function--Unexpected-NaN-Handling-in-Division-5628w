function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN inputs
  }
  if (a === 0 || b === 0) {
    if (a === 0 && b === 0) return NaN; // Handle both 0
    if (a === 0) return 0; // Handle a = 0
    return Infinity; // Handle b = 0
  }
  return a / b;
}

console.log(foo(10, 0)); // Infinity
console.log(foo(10, NaN)); // NaN
console.log(foo(NaN, 10)); // NaN
console.log(foo(0,0)); // NaN
console.log(foo(0,10)); // 0