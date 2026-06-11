// Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().

function invertObject(obj:{[key:string]:any}):{[key:string]:string}{
    return Object.entries(obj).reduce((a,[key,value])=>{
        a[value]= key
        return a;
    },{} as{[key:string]:string})

}
console.log(invertObject({a: 1, b: 2}));