// Error Handling &amp; Try Catch in Javascript

console.log('this is tute44.js');

// Pretend Comming from a Server as Response
let name="Vignesh";
name=undefined;
if(name!=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}

try {
    // hkdshfkdsfhksdfh;
    console.log('We Are Inside Try Block');
    functionAshish();
} catch (error) {
    console.log('Are you Okay?');
    console.log(error);
    // throw new Error(error);
    console.log(error.name);    
    console.log(error.message);    
}finally{ // if error == true and error == false but run this finally
    console.log('Finally we will run this');
    
}