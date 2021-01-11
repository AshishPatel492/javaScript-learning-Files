console.log("this is tute59.js");

// Symbols

const sym1 = Symbol("My Identifire");
const sym2 = Symbol("My Identifire");
console.log("Symbol is : ", sym1);
console.log("type of Symbol is : ", typeof sym1);
console.log(sym1 === sym2);

a = "This is String";
b = "This is String";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol("Identifire for K1");
const k2 = Symbol("Identifire for K2");

myObj = {};
myObj[k1] = "Ashish";
myObj[k2] = "Vignesh";
myObj["name"] = "Good boy";
myObj[5] = "Good Int";
console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // !! Alert !!: Cannot do this to get Vignesh because it is same as myObj["k2"]

// Symbols are ignored in for in loop
for (let key in myObj) {
  console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));
