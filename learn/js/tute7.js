// Arrays and Objects

console.log('welcome tute7.js and lets discuss about arrays');
let marks = [45, 66, 31, 70, 44, 88];
const fruits = ['orange', 'apple', 'pineaple'];
const mixarray = ['str', 85, [3, 5]];

const arr = new Array(23, 123, 21, 'orange');
// console.log(marks);
// console.log(mixarray);
// console.log(fruits);

// console.log(arr.length);
// console.log(Array.isArray(marks));
arr[0] = 'ashish';
// console.log(arr[0]);
let value = marks.indexOf(45);
// console.log(value);

// Mutating or Modifying arrays
// marks.push(3565);
// console.log(marks);
// marks.unshift(3565);
// console.log(marks);
// marks.pop();
// console.log(marks);
// marks.shift();
// console.log(marks);
// document.write(marks);
// marks.splice(2,3);
// marks.reverse();
let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name':'Ashish',
    adress:'singad',
    inactive:true,
    mark: [2, 5, 6, 8, 9]
}
console.log(myobj);
console.log(myobj['first name']);