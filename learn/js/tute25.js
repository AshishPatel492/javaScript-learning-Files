// Challange Solustion

console.log("this is tute25.js");
// create div Element
let createdDiv = document.createElement('div');

// add some text
let val=localStorage.getItem('text');
let textNode;
if(val==null){
     textNode = document.createTextNode('this is my Element, click to Edit');
}
else{
    textNode=document.createTextNode(val);
}

// append textnode in div element
createdDiv.appendChild(textNode);

// Giv element id, class, style and etc..
createdDiv.setAttribute('id', 'elem');
createdDiv.setAttribute('class', 'elem');
createdDiv.setAttribute('style', 'border: 2px solid black; width: 154px; margin: 34px; padding: 23px;');

// Grab the main container
let tarckElm = document.querySelector('.container');
let frist = document.getElementById('myfirst');

// Insert the element before element with id first
tarckElm.insertBefore(createdDiv, frist);
// console.log(createdDiv, tarckElm, frist);

// add Event listener to the div element
createdDiv.addEventListener('click',function(){
    
    //condition for disable click many time
    let noTextArea=document.getElementsByClassName('textarea').length;
    if(noTextArea==0)
    {
        let html=elem.innerHTML;
        createdDiv.innerHTML=`<textarea class="textarea" id="textarea">${html}</textarea>`;
    }

//litsen for the blur event on textarea
let textarea=document.getElementById('textarea');
textarea.addEventListener('blur',function(){
elem.innerHTML=textarea.value;
localStorage.setItem('text',textarea.value);
});
});