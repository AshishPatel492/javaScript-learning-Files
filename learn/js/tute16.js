// using DOM manuplation

console.log("Welcome to tute16");

let myelement=document.createElement('li');
let text=document.createTextNode('Created TextNode');
myelement.appendChild(text);
//Add Class Name to The li Element
myelement.className='child1';
myelement.id='Myli';
myelement.setAttribute('title','mytitle');
// myelement.innerText='<i>Hello This is Created By Ashish!</i>;'//use innerHTML to some style<b></b> bold
let ul=document.querySelector('ul.this');
ul.appendChild(myelement);//insert in a ul list
// console.log(myelement);
// console.log(ul);

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('This is a Crated node For elem2');
elem2.appendChild(tnode);
myelement.replaceWith(elem2);
let myul=document.getElementById('myul');
myul.replaceChild(myelement, document.getElementById('f1')); 
// myul.removeChild(document.getElementById('f2'));
let pr=elem2.hasAttributes('elem2');
elem2.removeAttribute('id');
elem2.setAttribute('id','set_elem2');
// console.log(elem2,pr);
/*
Create a Heading Element with text as "Go to codewithHarry" and
create an a tag outside it with href="https://www.codewithharry.com"
*/
let link=document.createElement('h1');
let a1=document.createElement('a');
link.appendChild(a1);
link.id='l1';
link.className='linklist';
ul.appendChild(link);
a1.setAttribute('href','https://www.codewithharry.com');
a1.setAttribute('Target','_blank');
a1.innerText="Go to code with harry";
console.log(link,a1);