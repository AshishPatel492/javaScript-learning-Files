// Type Conversion and Type coercion
console.log("Welcome to tute5");
let myVar;
//myVar =34;
myVar =String(34);
console.log(myVar,(typeof myVar));

let mybool=String(true);
console.log(mybool,(typeof mybool));

let date=String(new Date());
console.log(date,(typeof date));

let arr=String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));

let i=10;
console.log(i.toString(),(typeof i));

let stri=Number("20001");
console.log(stri,(typeof stri));

let number =parseFloat('34.098');
console.log(number,(typeof number));

let mystr =Number('698');
let mynum = 34;
console.log(mystr + mynum);