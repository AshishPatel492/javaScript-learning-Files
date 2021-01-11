// Async_Await_in_Javascript

console.log('this is tute43');

async function ashish(){  // async is return promise
    console.log('inside ashish function');
    const response=await fetch('/learn/json/Sample-JSON-file-with-multiple-records-download.json');
    console.log('before response');
    const users=await response.json();
    console.log('users resolved');
    return users;
    // return 'ashish';
}

console.log('Before Calling ashish');
let f1=ashish();
console.log('After Calling ashish');
console.log(f1);
f1.then(data=>console.log(data));
console.log('End of function');