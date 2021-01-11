console.log("this is tute53.js");

// Generators in javaScript
// 1 - 1B

function* numberGen(){
    let i=0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
    while(true){
        // yield i++; 
        yield (i++).toString(); 
    }
}
const gen=numberGen();
// for (let index = 0; index <= 100; index++) {
//     console.log(gen.next().value);
// }
// console.log(gen.next());
// console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);