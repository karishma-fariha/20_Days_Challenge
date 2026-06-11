// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.
function fizzBuzz(n: number): void {
    const result: any[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else if (i % 3 === 0)
        {
            result.push("Fizz");
        }
        else{
            result.push(i);
        }
    }
    console.log(result.join(','));
}
console.log(fizzBuzz(15));