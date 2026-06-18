// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

function romanToInt(s){
    const romanNum={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    let totalNum= 0;
    for(let i=0;i<s.length;i++){
      if(romanNum[s[i]] < romanNum[s[i+1]]){
        total -= romanNum[s[i]];
      }else{
        totalNum +=romanNum[s[i]];
      }
    }
    return totalNum;
}
console.log(romanToInt('LVIII'));