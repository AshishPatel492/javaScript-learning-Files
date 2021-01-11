console.log('this is tute48.js');
    // Regular Expression:
    // Basic functions
    // Metacharacter Symbols


    // let regex=/^a/i;
// Character Sets - we use []

// let regex=/Ash[aty]sh; // can be an a, t or y
let regex=/Ash[a-z]sh/; // can be any character from a to z, you can also use [a-g],[h-m] etx..
 regex=/Ash[^aty]sh/; // cannot be any character from a, t or y
 regex=/Ash[^aty]s[uy]/; // cannot be any character from a, t or y, and can be u or y
 regex=/Ash[a-z]s[uy0-9][0-9]/; // we can have as many character sets as we want

 // Quantifiers - We use {}
 regex=/Ashi{2}sh/; // i can exactly 2 times
 regex=/Ashi{0,2}sh/; // i can occur exactly 0 to 2 (0 or 1 or 2) times

 // Groupings - we use Paranthesis for groupings ()

 regex=/(sh){2}/; // sh is 2 time
 regex=/(sh){2}([0-9]s){3}/;
 const string="Ashsh is a vignesh frend";

let result=regex.exec(string);
console.log('The result from exec is:', result);

if (regex.test(string)) {
    console.log(`The String ${string} matches the expression ${regex.source}`);
    
} else {
    console.log(`The String ${string} does not match the expression ${regex.source}`);
    
}