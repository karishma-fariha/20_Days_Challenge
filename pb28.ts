// Problem 28: Promise Chain  [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
// Example:
// delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
// Hint: Use new Promise with setTimeout inside.

function delay(ms: number): Promise<void> {
    return new Promise((resolved) => setTimeout(resolved,ms))

}
delay(1000)
    .then(() => {
        console.log('1 sec');
        return delay(2000);
    })
    .then(() =>
        console.log('3 sec total')
    );