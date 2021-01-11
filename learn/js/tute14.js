// element selectors

console.log("hello tute14.js");
/*
element selectors:
1.single element selectors
2.multi element selectors
*/
// 1.single element selectors
let element=document.getElementById('myfirst');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element.style.color='green';
// element.innerText="Welcome to Learn JavaScript With Harry";
element.innerHTML="<i>Welcome to Learn JavaScript With Harry</i>";
// console.log(element.innerHTML);


let sel =document.querySelector('#myfirst');
// sel=document.querySelector('.container');
sel=document.querySelector('body');
sel.style.color='skyblue'
// console.log(sel);

// 2. Multi element selector
let elems=document.getElementsByClassName('child');
// elems=document.getElementsByClassName('container');
// elems=document.getElementsByTagName('div');
// console.log(elems);
// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color='red';
// });
// console.log(elems[0].getElementsByClassName('child'));
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color='pink';
}