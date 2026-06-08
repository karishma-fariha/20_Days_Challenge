// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32
function toFahrenheit(celsius:number):number{
const Fahrenheit = (celsius*9/5)+32;
return Fahrenheit;

}
const result2 = toFahrenheit(0);
console.log(result2);
