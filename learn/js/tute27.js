// Constructors

console.log("this is tute27.js");

// Object Literal for Creating Objects
let car={
    name:'maruti 800',
    topSpeed:89,
    run:function(){
        console.log("car is running");
    }
}

// We Have Allready seen constructors like these:
// new Date();

// Creating Constructor for cars

function GeneralCar(givenName,givenSpeed){
    this.name=givenName;
    this.speed=givenSpeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`this car is slower by ${200-this.speed} Km/H than Mercedes`);
    }
}
car1=new GeneralCar('Nissan',180);
car2=new GeneralCar('Alto 800',80);
car3=new GeneralCar('Mercedes',200);