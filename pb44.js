// Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
// Example:
// Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.
function isValidParentheses(str) {
    const stack = [];

    for (let char of str) {
        if (char === '(') {
            stack.push(')');
        } else if (char === '[') {
            stack.push(']');
        } else if (char === '{') {
            stack.push('}');
        } else {
            
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    
    return stack.length === 0;
}

console.log(isValidParentheses('()[]{}')); 
console.log(isValidParentheses('([)]'));    