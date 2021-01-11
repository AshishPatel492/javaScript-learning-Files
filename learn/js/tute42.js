// fetch api
console.log('this is tute 42.js')

// button with id myBtn
let myBtn = document.getElementById('myBtn');

// div with id content
let content = document.getElementById('content');

// GET request
/* function getData() {
    console.log('Started getData');
    let url = "./json/sample-json-file.json"; // no require json.stringify and json.pars, others function
    fetch(url).then((response) => {
        console.log('inside first then');
        return response.json();// you can also use .text(); extension but not parse only plane text, .json it has been auto parse.
    }).then((data) => {
        console.log('inside second then');
        console.log(data);                
    });
}

console.log('Before Running getData');
getData();
console.log('After Running getData');
 */
// GET request
function postData() {
    let url = "./json/sample-json-file.json";// require Post URL // no require json.stringify and json.pars, others function
    let data='{"firstName": "Ashish","lastName": "Patel","gender": "man","age": 24}';
    let params={
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        // body:data // data is string there not String to use Stringify, but data is object then use Sringify 
        body:JSON.stringify(data) // data is string there not String to use Stringify, but data is object then use Sringify 
    };
    fetch(url,params).then(response => response.json())
    .then(data => console.log(data))
}
postData();