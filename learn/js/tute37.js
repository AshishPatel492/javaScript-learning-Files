// callback function

console.log('tute37.js');

//  Pretend that this Response is coming from the Server

const students=[
    {name:"Ashish",subject:"javaScript"},
    {name:"Vignesh",subject:"Auto Cad"}
]

function enrollStudents(student,callback){ // use any name for Argument
    setTimeout(function(){
        students.push(student);
        console.log('student has been enrolled');
        callback();
    },1000);
}
function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name} your Subject is  ${student.subject}</li>`;
        });
        document.getElementById('students').innerHTML=str;
        console.log('students have been fetched');
    },2000);
}

let newStudent={name:"Mahesh",subject:"BBA"};
enrollStudents(newStudent,getStudents); // use any Function for Callback
// getStudents();