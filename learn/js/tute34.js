// Asynchronous_Programming

console.log('this is tute34.js');
// What_is_Asynchronous_Programming____JavaScript_Tutorial_In_Hindi_#34

// Way to Write Asynchronous Code in jS
   // 1. Async/await
   // 2. Callback
   // 3. Promises

   setTimeout(()=>{
    for (let index = 0; index < 450; index++) {
        const element = index;
        console.log('This is Index Numbers:',index);
    }
   },100);
   
   console.log('Done Printing');