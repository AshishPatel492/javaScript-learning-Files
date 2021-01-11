// using Event listener

console.log("Hello tute17");
document.getElementById('heading').addEventListener(
    'click',function(e){
console.log("you have click on Heading");
let variable=e.target;
variable=e.target.className;
variable=e.target.id;
variable=e.offsetX;
variable=e.offsetY;
variable=e.clientX;
variable=e.clientY ;

alert('You Have Click On Heading, see console');
console.log(variable);
    });