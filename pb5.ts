// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.
function checkSign(num: number): string {
    if (num === 0) {
        return "zero";
    } else if (num > 0) {
        return "positive";
    } else {
        return "negative";
    }
}

const result5 = checkSign(-5);
console.log(result5); 