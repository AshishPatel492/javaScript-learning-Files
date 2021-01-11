// Prototype & Inheritance

console.log('tish is tute30.js');

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates ashish object

// let ashish=Object.create(proto);
// ashish.name='ashish';
// ashish.role='Programer';
// ashish.changeName('Ashish2');
// console.log(ashish);

// This also creates ashish object // second sysntex
const ashish1 = Object.create(proto, {
    name: { value: 'ashish', writable: true },
    role: { value: 'Programer' },
});
ashish1.changeName('Ashish3');
console.log(ashish1);

// Employee constructor

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan

Employee.prototype.slogan = function () {
    return `This Company is the best. Regards, ${this.name}`;
}

// Create an Object from this Constructor now

let ashishObj = new Employee("Ashish", 10000, 10);
console.log(ashishObj.slogan());

// Programer constructor

function Programer(name, salary, experience, Language) {
    Employee.call(this, name, salary, experience);
    this.Language = Language;
}

// Inherit the prototype

Programer.prototype = Object.create(Employee.prototype);

// Manually set the constructor

Programer.prototype.constructor = Programer;

let Vignesh = new Programer("Vignesh", 5000, 5, "AutoCad");
console.log(Vignesh);