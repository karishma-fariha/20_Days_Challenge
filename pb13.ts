// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

function removeDuplicates<T>(arr:T[]):T[]{
    return arr.filter((item:T,index:number):boolean=>arr.indexOf(item)===index);
}
const resultD = removeDuplicates([1, 2, 2, 3, 3, 4]);
console.log(resultD);