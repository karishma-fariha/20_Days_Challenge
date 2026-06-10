// Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

function sumArray(arr:number[]):number{
    let sum = 0;
    for(let num of arr){
        sum +=num;
    }
    return sum;
}
const result11 = sumArray([1,2,3,4,5]);
console.log(result11);