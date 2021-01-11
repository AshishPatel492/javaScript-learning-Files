console.log('this is tute45.js');

const myJson=`{
    "Employees": [
      {
        "userId": "krish",
        "jobTitle": "Developer",
        "firstName": "Krish",
        "lastName": "Lee",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "123456",
        "emailAddress": "krish.lee@learningcontainer.com",
        "address":[{"city":"surat","Code":"11323"}]
      },
      {
        "userId": "devid",
        "jobTitle": "Developer",
        "firstName": "Devid",
        "lastName": "Rome",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumber": "1111111",
        "emailAddress": "devid.rome@learningcontainer.com",
        "address":[{"city":"surat","Code":"11323"}]
      },
      {
        "userId": "tin",
        "jobTitle": "Program Directory",
        "firstName": "tin",
        "lastName": "jonson",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumber": "2222222",
        "emailAddress": "tin.jonson@learningcontainer.com",
        "address":[{"city":"surat","Code":"11323"}]
      }
    ]
  }`;

  const myObj=JSON.parse(myJson);
  console.log(myObj['Employees']);

  let data=document.getElementById('data');
  data.addEventListener('click',()=>{
console.log('clicked');
populate();
  });

  function populate() {
      let results=myObj['Employees'];
      let html="";
      results.forEach(element => {
          html+=`<li>Results is ${element.firstName}</li>`;
        //   console.log(element.address);
          
      });

      let defs=document.getElementById('datalist');
      defs.innerHTML=html;
      
  }
  