// Chalange Solution

/*
 You Have to Create a Div and Inject it into the Page wich Contains a Heading.

 Whenever Someone Clicks on the Div, it Should be Converted into an Editable item.
 Whenever user Clicks away(blur). Save the Note into the Local Storage. 
*/
console.log("this is tute 21");
//Target and select Elements
let Selected_element = document.querySelector('div#myfirst');
let Created_element = document.createElement('div');
let Selected_ul = document.querySelector('ul.this');
let li = document.getElementsByClassName('child1');
//given id of created Element
Created_element.id = 'mysecond';
//given class name of created Element
Created_element.className = 'child0';
//append created element in a web page
Selected_element.appendChild(Created_element);
Created_element.appendChild(Selected_ul);
//Add Event handaler
Created_element.addEventListener('dblclick', function (e) {
    localStorage.clear();//clear prewent data in local storage
    for (let i = 0; i < li.length; i++) {//loop for target li elements
        let inputbx = document.createElement('input');//insert input box to edit li element text
        li[i].appendChild(inputbx);//append input box in a web page
        inputbx.value = li[i].innerText;// insert li elements values in a input box
        Created_element.addEventListener('click', function (e) {
            localStorage.setItem(i, inputbx.value);//store new value through input box to local storage
        });
    }
});
//loop for select li elements
for(let j=0;j<li.length;j++){
    let t=li[j].innerText=localStorage.getItem(j,j);//aply new value in a li element to stored by local storage
    console.log(t);
}