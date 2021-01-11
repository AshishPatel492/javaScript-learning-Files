// JavaScript Regular Expressions - Basic Functions

console.log('this is tute46.js');

let reg = /ashish/; // This is a regular expression literal in js
reg = /ashish/g; // use multiple for g(globle)
// reg = /ashish/i; // case insensitive 

// console.log(reg);
// console.log(reg.source);

let String = "This name is ashish also true name ashish";

// Functions to Match Expressions
// 1.exec() This Function Will Return an array for match or Null for no match

let result = reg.exec(String);
if (result) {
    // console.log(result);
    //  result=reg.exec(String);
    // console.log(result);
    //  result=reg.exec(String);
    // console.log(result); ---> we can use multiple exec with global flag
    // console.log(result.index);
    // console.log(result.input);
}
// 2. test() -- Return true or false
let result2 = reg.test(String);
// console.log(result2); --> This will only print true if the "reg" is there in the string "String"

// 3. match() - It will return an array of results or null

// let result3=reg.match(String)--> This is wrong!!
let result3=String.match(reg)//--> This is write
// console.log(result3);

// 4. search()- Returns index of first match else -1
// let result4=reg.search(String)--> This is wrong!!
let result4=String.search(reg)//--> This is write
// console.log(result4);

// 5. replace() - Returns new replaced String with all the replacements (if no global flag is given, first match will be replaced)
let result5=String.replace(reg,"VIGNESH");// for multiple changes use global flag in above
console.log(result5);

