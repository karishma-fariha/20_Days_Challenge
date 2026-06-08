"use strict";
// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.
function swapVariable(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return a, b;
}
const swap = swapVariable(5, 10);
