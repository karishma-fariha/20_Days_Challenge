// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

function findMax(arr:number[]):number{
  let max = arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
  }
  return max;  
}
const result12 = findMax([3,1,7,2,9]);
console.log(result12);