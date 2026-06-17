// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.


function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    const SortSTR = (str)=>{
        return str.toLowerCase().split('').sort().join('');
    }
    return SortSTR(str1)===SortSTR(str2);
}
console.log(isAnagram('listen','silent'));