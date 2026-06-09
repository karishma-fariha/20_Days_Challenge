// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

function reverseString(str:string):string{
const reverse = str.split('').reverse().join('');
return reverse;
}
const result6 = reverseString("HelloKaru");
console.log(result6);
