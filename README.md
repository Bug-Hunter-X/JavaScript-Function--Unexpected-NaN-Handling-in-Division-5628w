# JavaScript Function: Unexpected NaN Handling in Division

This repository demonstrates a common subtle bug in JavaScript related to NaN (Not a Number) handling during division.

## Bug Description

The `foo` function is designed to perform division, but it fails to correctly handle NaN values and the case where one of the inputs is 0. Instead of returning `Infinity` or `NaN` as expected, the function incorrectly returns 0.

## Bug Solution

The corrected `foo` function in `bugSolution.js` includes a check for `isNaN` before performing the division and handles cases where either `a` or `b` is 0.

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a code editor.
3. Run the files using a JavaScript runtime environment like Node.js or a browser's developer console.