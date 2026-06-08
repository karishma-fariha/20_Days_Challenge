// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

function largestNumber(num1:number,num2:number,num3:number):number{
    const largest =Math.max(num1,num2,num3);
    return largest;

}
const result = largestNumber(45,55,72);
console.log(result);