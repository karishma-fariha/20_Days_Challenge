// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.

function rotateArray(arr, k){
    let n = arr.length; 
    k=k % n;
    return arr.slice(-k).concat(arr.slice(0,n-k));

}
console.log(rotateArray([1,2,3,4,5],3));