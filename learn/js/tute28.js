// prototype

console.log("this is tute28.js");
let obj={
    name:"Ashish",
    address:"Singad",
    date_of_birth:"26/06/1992"
}

// do not Overwrite prototype by Default Browser Engine,like object.prototype....       do not try.
function CObj(givenName,givenAddress){
    this.name=givenName;
    this.address=givenAddress;
}
CObj.prototype.getName=function(){
    return this.name;
}
CObj.prototype.setName=function(newName){
    this.name=newName;
}
obj2=new CObj('Ashish','Singad');
console.log(obj2);