console.log("this is tute 57.js");
// Maps in javaScript: We can use any type of key or value

const myMap = new Map();
console.log(myMap);

// const key1='myStr';
const key1 = "myStr",
  key2 = {},
  key3 = function () {};

// Setting map values
myMap.set(key1, "This is a String");
myMap.set(key2, "This is a blank object");
myMap.set(key3, "This is an blank function");
console.log(myMap);

// Getting the values from a Map

let value1 = myMap.get(key1);
console.log(value1);

// Get the size of the Map

console.log(myMap.size);

// You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
  console.log("key is ", key);
}
// Get only values
for (let value of myMap.values()) {
  console.log("value is ", value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key) => {
  console.log("key is ", key);
  console.log("value is ", value);
});

// Converting Map to an array
let myArray = Array.from(myMap);
console.log("Map to Array is", myArray);

// Converting Map keys to an array
let mykeysArray = Array.from(myMap.keys());
console.log("Map to Keys Array is", mykeysArray);

// Converting Map values to an array
let myvaluesArray = Array.from(myMap.values());
console.log("Map to Values Array is", myvaluesArray);
