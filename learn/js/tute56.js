console.log("this is tute56.js");

let frends = ["mahesh", "vignesh", "rajesh", "hiren"];

// Traditional for Loop
// for (let index = 0; index < frends.length; index++) {
//     const element = frends[index];
//     console.log(element);
// }

// **************for in loop****************

// 1.0 Iterating an object
let obj = {
  name: "Ashish",
  language: "javaScript",
  hobbies: "js webapp",
};

// console.log(obj);

// 1.1 Iterating an object using Traditional for loop:

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop:

for (let key in obj) {
  // console.log(obj.key); // Not this
  console.log(obj[key]);
  // console.log(key); // for object property name
}

// 2. Iterating a String
// We can use for in with strings to loop through all the characters
let myString = "This is my String";

for (let char in myString) {
  console.log(myString[char]);
}

console.log("*********For of loop**********");
// **************for of loop****************

frends = ["mahesh", "vignesh", "rajesh", "hiren"];

for (let name of frends) {
  console.log(name);
}

for (let char of myString) {
  console.log(char);
}
