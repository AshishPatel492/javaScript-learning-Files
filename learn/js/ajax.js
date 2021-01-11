// Ajax tutorial

console.log('this is ajax.js');
let fetchBtn = document.getElementById('fetchbtn');
fetchBtn.addEventListener('click', buttonClicked);

function buttonClicked() {
    console.log('you have clicked on button');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the Object
    // xhr.open('GET', 'ashish.json', true); // do NOT Send Password using GET Request, use allways POST Request

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true); // use any url to send data
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on Progress(Optional)
    xhr.onprogress = function () {
        console.log('On Progress');
    }

    // xhr.onreadystatechange=function(){
    //     console.log('ready state is',xhr.readyState);  
    // }

    // What to do When Response is Ready
    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText);
        }
        else {
            // console.error('some error');
            console.log('some error');
        }
    }

    // Send the Request
    // xhr.send();
    let postObj = `{"name":"test","salary":"1222","age":"22"}`;
    xhr.send(postObj);
    console.log("We are done");
}

let popBtn = document.getElementById('popbtn');
popBtn.addEventListener('click', popButtonClicked);

function popButtonClicked() {
    console.log('you have clicked on popButton');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true); // use any url, do NOT Send Password using GET Request, use allways POST Request

    // USE THIS FOR POST REQUEST
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true); // use any url to send data
    // xhr.getResponseHeader('Content-type','application/json');

    // What to do on Progress(Optional)
    // xhr.onprogress = function () {
    //     console.log('On Progress');
    // }

    xhr.onreadystatechange=function(){
    //     console.log('ready state is',xhr.readyState);  
    }

    // What to do When Response is Ready
    xhr.onload = function () {
        if (this.status === 200) {
            let Obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            let str = "";
            for (let key in Obj) {
                str += `<li>${Obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        console.log(Obj);
    }
        else{
        // console.error('some error');
        console.log('some error');
    }
}

// Send the Request
// xhr.send();
xhr.send();
console.log("We are done");
}