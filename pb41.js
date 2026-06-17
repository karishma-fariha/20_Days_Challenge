// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9 Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.
function twoSum(arr, target){
      const visited = new Map();
    for(let i=0;i< arr.length; i++){
        const final = target - arr[i];
         if(visited.has(final)){
            return [visited.get(final),i] ;

         }
         visited.set(arr[i],i);
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15],9));