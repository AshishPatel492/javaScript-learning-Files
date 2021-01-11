// Regular_Expressions_-_Metacharacters_in_JavaScript

console.log('this is tute47.js');

let regex = /ashish/;

// Lets look into some metacharacter symbols
regex=/^aaaaa/;// ^ means expression will match if string start with
regex=/sh$/;// $ at the end of the string means "String ends with"
regex=/ash.sh/;// . matches any one character
regex=/a*hish/;// * matches any 0 or more character
regex=/as?hish?/;// ? matches optional character
regex=/ash\*ish/;// ? * as a string

let str = "ash*ish is learning Programing, and ashish try and try ashish";
let result = regex.exec(str);
console.log('The Result of exec is :', result);


if (regex.test(str)) {
    console.log(`The String ${str} Matches The Expression ${regex.source}`);
}
else {
    console.log(`The String ${str} Does Not Match The Expression ${regex.source}`);
}

