// Promise

console.log('this is tute39b.js');

const students = [
    { name: "Ashish", subject: "javaScript" },
    { name: "Vignesh", subject: "Auto Cad" }
]

function enrollStudents(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log('student has been enrolled');
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    });
}
function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name} your Subject is  ${student.subject}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log('students have been fetched');
    }, 5000);
}

let newStudent = { name: "Mahesh", subject: "BBA" };
/* 
enrollStudents(newStudent).then(function () {
    return getStudents();
}).catch(function () {
    console.log('!Opps Error');
});
*/

// second method
enrollStudents(newStudent).then(getStudents).catch(function () {
    console.log('!Opps Error');
});

// function inside then is ran as - resolve();
// function inside catch is ran as - resolve();