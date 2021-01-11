// Match Code to another file

console.log('this is compare and test file');
// let's create object
/* 
let frends = {
    details: function (givenName, givenSurname, givenAddress) {
        indetais = {
            'first name': givenName,
            surname: givenSurname,
            address: givenAddress
        }
        return `hey ${indetais['first name']} ${indetais.surname} your Address is ${indetais.address}`
        // return indetais
    }
}

let call=frends.details("Ashish","Patel","Singad");
console.log(call);
*/
// let's create Constructor
function student(inputed_name, inputed_age, inputed_dob, subjectName = []) {
    this.sname = inputed_name;
    this.age = inputed_age;
    this.dob = inputed_dob;
    this.subjects = subjectName;
}


function school(sname, age, dob, subjects,g_name,g_address,g_std){
    student.call(this,sname,age,dob,subjects);
    this.schoolName=g_name;
    this.schoolAddress=g_address;
    this.schoolStd=g_std;
}

student.prototype=Object.create(school.prototype);

student.prototype.constructor=school;

student1 = new school('Vignesh', 27, '21/08/1992', ['C', 'java', 'Atocad'],'msl','limbarpada',8);
console.log(student1);