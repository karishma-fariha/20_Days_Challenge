// Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;
type User = {
    firstName: string;
    lastName: string;
    age: number;
}
const user: User = { firstName: 'Sara', lastName: 'Khan', age: 25 };
const { firstName: name1, lastName, age }: { firstName: string; lastName: string; age: number } = user;
console.log(name1);
console.log(lastName);
console.log(age);