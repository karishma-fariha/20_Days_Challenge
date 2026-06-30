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

// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

async function retry(fn, times) {
  let lastError;

  for (let i = 0; i < times; i++) {
    try {
      return await fn(); // Return immediately if successful
    } catch (error) {
      lastError = error; // Save the latest error
    }
  }

  // All attempts failed
  throw lastError;
}


// Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    // Handle empty array
    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          // If all promises have resolved
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // Reject immediately if any promise fails
          reject(error);
        });
    });
  });
}

// Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.

function flattenObject(obj) {
  const result = {};

  function flatten(currentObj, parentKey) {
    for (let key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        // If the value is a non-null object (and not an array), recurse
        if (
          typeof currentObj[key] === "object" &&
          currentObj[key] !== null &&
          !Array.isArray(currentObj[key])
        ) {
          flatten(currentObj[key], newKey);
        } else {
          result[newKey] = currentObj[key];
        }
      }
    }
  }

  flatten(obj, "");
  return result;
}

// Example
const obj = {
  a: {
    b: {
      c: 1
    }
  }
};

console.log(flattenObject(obj));
// Output: { "a.b.c": 1 }

// Problem 40: Group Array by Property  [Medium]
// Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
// Example:
// groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type')// {fruit: [...], veg: [...]}
// Hint: Use reduce() and build an object where each key maps to an array.
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupKey = item[key];

    // Create the group if it doesn't exist
    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // Add the current item to the group
    result[groupKey].push(item);

    return result;
  }, {});
}

// Example
const data = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "mango" }
];

console.log(groupBy(data, "type"));