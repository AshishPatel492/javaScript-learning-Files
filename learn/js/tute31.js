// Classes

console.log('this is tute31.js');
class Employee{
    constructor(givenName,givenExperience,givenDivision){
this.name=givenName;
this.Experience=givenExperience;
this.Division=givenDivision;
    }
    slogan(){
        return `I am ${this.name} this Company is the best`;
    }
    joiningYear(){
        return 2020-this.Experience;
    }
    static add(a,b){ // Static method use to without create any object
        return a+b;
    }
}
// let ashish=new Employee("Ashish",5,"Multitask");
// console.log(ashish);
// console.log(Employee.add(12,12));// Direct run
// Class Inheritance

class Programer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage,github){
        super(givenName,givenExperience,givenDivision);
        this.language=givenLanguage;
        this.github=github;
    }
    favoriteLanguage(){
        if(this.language=='python'){
            return 'python';
        }
        else{
            // return 'javaScript';
            return this.language;
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

let vignesh=new Programer("Vignesh",4,"frontend","auto cad",12345);
console.log(Programer.multiply(22,44));
console.log(vignesh.favoriteLanguage());
