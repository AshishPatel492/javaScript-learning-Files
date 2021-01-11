// using Events

console.log("welcome to tute18.js");
// let btn = document.getElementById('sb');
// btn = addEventListener('click', func1);
// btn = addEventListener('dblclick', func2);
// btn = addEventListener('mousedown', func3);
// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }
// function func2(e) {
//     console.log("Thanks it's a doubleclick", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks it's a mousedown", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter',function(){
// console.log("you Entered no");
// });
// document.querySelector('.no').addEventListener('mouseleave',function(){
// console.log("you Exit no");
// });
document.querySelector('.container').addEventListener('mousemove',function(e){
console.log(e.offsetX,e.offsetY);
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},154)`;
console.log("you triggered mose move event");
});