// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().

function chunkArray<T>(arr:T[], size:number):T[][]{
    const chunked:T[][] = [];
    let index =0;
    while(index < arr.length){
        chunked.push(arr.slice(index,index+size));
        index +=size;
    }
    return chunked;
}
const result15 = chunkArray([1,2,3,4,5], 2);
console.log(result15);