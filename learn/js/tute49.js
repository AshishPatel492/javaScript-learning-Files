console.log('this is tute49.js');

// Character Classes

let regex=/\w is/;           // Wordd Character-  _ or alphabet or Numbers
regex=/\w+ish/;             // \w+ means one or more word characters
regex=/\Wish/;             // W non word characters
regex=/\W+ish/;           // W means more then one non word characters
regex=/\d0980/;          // d means Digit 
regex=/\d+/;            // d+ means more then one Digit 
regex=/\D000/;         // D means non Digit 
regex=/\D+000/;       // D+ means more then one non Digit 
regex=/\sfrend/;       // s means match whitespace characters 
regex=/\s+frend/;       // s+ means one or more then match whitespace characters 
regex=/\Sfrend/;       // S means manch non whitespace characters 
regex=/\S+frend/;       // S+ means match one or more then non whitespace characters 
regex=/\bn/;       // b means boundary 

// Assertions

regex=/i(?=s)/;
regex=/Ashi(?!sh)/;
const string="Ashish is a vignesh frend 098098dwewew0008";
let result=regex.exec(string);
console.log('The result from exec is:', result);

if (regex.test(string)) {
   console.log(`The String ${string} matches the expression ${regex.source}`);
   
} else {
   console.log(`The String ${string} does not match the expression ${regex.source}`);
   
}
