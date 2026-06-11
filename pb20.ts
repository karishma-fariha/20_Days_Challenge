// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.

type Person={
    name:string;
    [key :string]:any;

}
function findDuplicateNames(arr:Person[]):string[]{
    const HashMap = new Map <string,number>();
    const duplicates:string[]=[];

    for(const item of arr){
        const name = item.name;
        const currentCount = HashMap.get(name)||0;
        const newCount = currentCount+1;
        HashMap.set(name, newCount)
        if(newCount === 2){
            duplicates.push(name)
        }
    }
    return duplicates;

}
console.log(findDuplicateNames([{name:'Ali'},{name:'Sara'},{name:'Sara'},{name:'Ali'}]));