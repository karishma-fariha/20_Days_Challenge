// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().
function mergeObjects<T, U extends object>(obj1:T, obj2:U):T & U{
return {...obj1,...obj2};
}
const objA={a:1,c:3};
const objB = {b:2};
const merged = mergeObjects(objA,objB);
console.log(mergeObjects(objA,objB));