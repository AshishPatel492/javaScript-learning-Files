//Primitive Data types
  //string
  let name ="Ashish";
  console.log("my name is "+name);
  console.log("data type is "+(typeof name));

  // Numbers
  let marks =34;
  console.log("data type is "+(typeof marks));

  // Boolean
  let isDriver =true;
  console.log("data type is "+(typeof isDriver));

  // Null
  let nullvar = null;
  console.log("data type is "+(typeof nullvar));

  // Undefined
  let undef=undefined;
  console.log("data type is "+(typeof undef));

  // Reference Data Types

  // Arrays
  myarr=[1, 2, 3, 4,, false, "string"];
  console.log("data type is "+(typeof myarr));

  // Object Literals
  let stmerks={
      ashish:89,
      mahesh:50,
      vignesh:20,
      'vignesh kumar':60 // "vignesh kumar" tu use space
  }
  console.log(typeof stmerks);

  function findName(){

  }
  console.log(typeof findName);
  
  let date = new Date();
  console.log(typeof date);