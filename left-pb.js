// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().
function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
// const throttledScroll = throttle(onScroll, 200);

 
// Problem 45: Binary Search  [Medium]
// Description: Write a function binarySearch(arr, target) that searches a sorted array and returns the index of the target, or -1 if not found.
// Example:
// Input: [1,3,5,7,9], target=7  → Output: 3
// Hint: Use left and right pointers; check the middle element each iteration.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    }

    if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }

  return -1; // Target not found
}

// Example
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // Output: 3
console.log(binarySearch([1, 3, 5, 7, 9], 4)); // Output: -1
 
// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

function deepClone(obj) {
  // Return primitive values and null directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create a new array or object
  const clone = Array.isArray(obj) ? [] : {};

  // Recursively copy each property
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Example
const a = { x: { y: 1 } };
const b = deepClone(a);

b.x.y = 99;

console.log(a.x.y); // 1
console.log(b.x.y); // 99


// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event names and values are arrays of functions.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register a listener
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  // Trigger all listeners for an event
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach(listener => {
      listener(...args);
    });
  }

  // Remove a specific listener
  off(event, listener) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      fn => fn !== listener
    );
  }
}

// Example Usage
const emitter = new EventEmitter();

const greetListener = (name) => {
  console.log("Hello " + name);
};

emitter.on("greet", greetListener);

emitter.emit("greet", "Sara"); // Hello Sara

emitter.off("greet", greetListener);

emitter.emit("greet", "Sara"); // Nothing happens

// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
// Example:
// myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// Hint: Loop through the array, apply the callback to each element, push results to a new array.

function myMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

// Example
const doubled = myMap([1, 2, 3], x => x * 2);

console.log(doubled); // [2, 4, 6]