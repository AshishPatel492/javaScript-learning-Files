// Loops in js

console.log("This is tute9.js");
//General Loops: for, while, do-while

// for(let i=0;i<100;i++)
// {
//     console.log(i);
// }

// let j=0;
// while(j<10){
//     console.log(j+1);
//     j++;
// }

// let k = 0;//use greter than 10
// do {
//     // console.log(k);
//     if (k === 5) {
//         k+=1;
//         continue; // break;
//     }
//     console.log(k+1);
//     k+=1;
// } while (k < 10);
// console.log("done break!");

// let arr=[1,2,3,4,5];
//without forEach
// for(let i=0;i<arr.length;i++){
//     const element=arr[i];
//     console.log(element);
// }
// with forEach 
// arr.forEach(function(element){
//     console.log(element);
// });

let obj={
    name:"Ashish Patel",
    age:27,
    type:"Learner Programer",
    os:"windows & Linux"
}
for(let key in obj)
{
    console.log(`The ${key}
    of object is 
    ${obj[key]}`);
}