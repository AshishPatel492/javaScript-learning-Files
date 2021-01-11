console.log('hello index.js');

const name = document.getElementById('name');
const email = document.getElementById('email');
const Phone = document.getElementById('phone');
const submit = document.getElementById('submit');
let validName=false;
let validEmail=false;
let validPhone=false;

$('#successmsg').hide();
$('#errormsg').hide();

name.addEventListener('blur', () => {
    // console.log('name is Blured');
    // Validate Name Here
    let regex = /(^[a-zA-Z][0-9a-zA-Z]{1,9}$)/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your Name is Valid');
        name.classList.remove('is-invalid');
        validName=true;
    }
    else {
        console.log('Your Name is invalid');
        name.classList.add('is-invalid');
        validName=false;
    }
});
email.addEventListener('blur', () => {
    // console.log('email is Blured');
    // Validate email Here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str =email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is Valid');
    email.classList.remove('is-invalid');
    validEmail=true;
    }
    else {
        console.log('Your email is invalid');
    email.classList.add('is-invalid');
    validEmail=false;
    }
});
phone.addEventListener('blur', () => {
    // console.log('phone is Blured');
    // Validate Phone Number Here
    let regex = /^([0-9]){10}/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your Phone Number is Valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else {
        console.log('Your Phone Number is invalid');
        phone.classList.add('is-invalid');
        validPhone=false;
    }
});

// function clear(){
//     let resetall=document.getElementsByTagName('input');
//     resetall.value=null;
// }
submit.addEventListener('click',(e)=>{
console.log('cliked');
// submit your form here.
e.preventDefault();
let success=document.getElementById('successmsg');
let error=document.getElementById('errormsg');
if (validName&&validEmail&&validPhone) {
    // $('#error').alert('close');
    success.classList.add('show');
    $('#errormsg').hide();
    $('#successmsg').show();
    setTimeout(() => {
        success.classList.remove('show');
    },5000);   
} else {
// $('#success').alert('close');
error.classList.add('show');
$('#successmsg').hide();
$('#errormsg').show();
setTimeout(() => {
error.classList.remove('show');    
},5000);
}
// clear();
});

let cars=document.getElementById('cars');
if(cars==selected){
    alert(cars);
}