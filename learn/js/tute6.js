// Tamplate Litarals

console.log("Welcome tute6.js");
const name = "Ashish";
const greeting = "good morning";
// console.log(greeting+" "+name);

let html;
html = "<h1>this is heading</h1>" +
    "<p>my IS pera</p>";

html = html.concat("this", "str2");
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
console.log(html);
//  console.log(html[40]);
// console.log(html.indexOf('this'));
// console.log(html.lastIndexOf('>'));
// console.log(html.charAt(4));
// console.log(html.endsWith("str2"));
// console.log(html.includes(" "));
// console.log(html.substring(-4));
// console.log(html.slice(-4));
// console.log(html.split(">"));
// console.log(html.replace("this","it"));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myhtml = `Hello ${name}
<h1> This is Heading "  "</h1>
<p> You like ${fruit1} and ${fruit2}
</html>`;
document.body.innerHTML = myhtml;
//console.log(myhtml);