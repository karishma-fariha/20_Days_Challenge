// Problem 43: Find Missing Number  [Easy]
// Description: Given an array of n-1 integers from 1 to n with one number missing, write a function findMissing(arr, n) to find the missing number.
// Example:
// Input: [1,2,4,5], n=5  → Output: 3
// Hint: Use the formula: expected sum = n*(n+1)/2, then subtract actual sum.
function findMissing(arr, n){
    const ExSum = (n*(n+1))/2 ;
    const AcSum = arr.reduce((acc,curr)=>acc +curr, 0);
    return ExSum - AcSum;
}

console.log(findMissing([1,3,4,5],5));