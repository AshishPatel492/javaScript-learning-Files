// Arrow functions

console.log('this is tute 41.js');

// this is regular function
// const ashish=function(){
//     console.log('hello Ashish');
// }
// ashish();

// Converting it to an arrow function
// const ashish = () => {
//     console.log('hello Ashish this is Arrow');
// }

// function returning Something
// const greet=function(){
//     return 'Good Morning';
// }
// console.log(greet());

// One Liners do not require braces/return
// One Line will automatically return
// const greet=()=>'Good Morning';

// returning Object in one Line
// const greet=()=>({name:'ashish',subject:'javaScript'});

// Using Single Argument
// const greet = name => 'Good Morning ' + name;

// using Multiple Argument
/* 
 Single parameters do not need parenthesis
 but you will have to put parenthesis if there are multiple parameters
*/
const greet = (name,subject) => 'Good Morning ' + name+subject;
console.log(greet('Ashish ','javaScript'));