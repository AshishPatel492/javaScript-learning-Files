console.log("this is tute60.js");
// Destructuring in javaScript

let a, b;
[a, b] = [34, 564];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Array Destructuring
({ a, b, c, ...d } = { a: 35, b: 50, c: 55, d: 99, e: 33 });
// console.log(a,b,c,d);

const fruits = ["Apple", "Bananas", "Mangoes"];
[a, b, c] = fruits;
console.log(a, b, c);
// console.log(fruits);

// Object Destructuring

let laptop = {
  model: "vivobook",
  date: "23 days",
  ram: "8gb",
  ssd: 200,
  start: function () {
    console.log("started");
  },
};

const { model, date, ram, ssd, start } = laptop;
console.log(model, date, ram, ssd, start);

start();
