console.log("index.js");
// Constructor
function Books(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display Constructor

function Display() {

}
// Add Methods to Display Prototype

Display.prototype.add = function (addBooks) {
  console.log('Adding to Ui');
  // tableBody = document.getElementById('tableBody');
  // uiString = `<tr>
  //                 <td>${addBooks.name}</td>
  //                 <td>${addBooks.author}</td>
  //                 <td>${addBooks.type}</td>
  //           </tr>`;
  let lStore = localStorage.getItem('Books');
  if (lStore == null) {
    bookObj = [];
  }
  else {
    bookObj = JSON.parse(lStore);
  }
  let myObj = {
    title: addBooks.name,
    author: addBooks.author,
    type: addBooks.type
  }
  // notesObj.push(addTxt.value);
  bookObj.push(myObj);
  // console.log(myObj);
  localStorage.setItem('Books', JSON.stringify(bookObj));
  //tableBody.innerHTML += uiString;
}
Display.prototype.showData = function () {
  let lStore = localStorage.getItem('Books');
  // console.log(lStore);
  if (lStore == null) {
    bookObj = [];
  }
  else {
    bookObj = JSON.parse(lStore);
  }
  let uiString = "";
  bookObj.forEach(function (element, index) {
    uiString += `<tr>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-danger">Delete</button></td>
  </tr>`;
    // console.log(element.name);
  });
  let notesElm = document.getElementById('tableBody');
  if (bookObj.length != 0) {
    notesElm.innerHTML = uiString;
  }
  else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
// Implement the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById('libraryForm');
  libraryForm.reset();
}
// function to delete Book
function deleteBook(index) {
  let show = new Display();
  let showmsg = new Display();
  let lStore = localStorage.getItem('Books');
  if (lStore == null) {
    bookObj = [];
    //showmsg.show('warning','No Data Found!');
  }
  else {
    bookObj = JSON.parse(lStore);
    bookObj.splice(index, 1);
    localStorage.setItem('Books', JSON.stringify(bookObj));
    showmsg.show('success', 'Delete Successfull');
  }
  show.showData();
}

// Implement the validate function
Display.prototype.validate = function (addBooks) {
  if (addBooks.name.length < 3 || addBooks.author.length < 3) {
    return false;
  }
  else {
    return true;
  }
}

Display.prototype.show = function (type, showMsg) {
  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${showMsg}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
}


// Add Submit Event Listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
  console.log('Form Submited');
  let name = document.getElementById('bookName').value;
  let author = document.getElementById('author').value;
  let type;
  let fiction = document.getElementById('fiction');
  let programing = document.getElementById('programing');
  let cooking = document.getElementById('cooking');
  if (fiction.checked) {
    type = fiction.value;
  }
  else if (programing.checked) {
    type = programing.value;
  }
  else if (cooking.checked) {
    type = cooking.value;
  }
  let addBooks = new Books(name, author, type);
  console.log(addBooks);
  let display = new Display();
  if (display.validate(addBooks)) {

    display.add(addBooks);
    display.clear();
    display.show('success', 'Your Book is Successfully Added');
    display.showData();
  }
  else {
    // show error to user
    display.show('danger', `Sorry You Can't Add Book`);
  }
  e.preventDefault();
}
let show = new Display();
show.showData();
addEventListener('keyup',function(e){
  if(e.key=='ArrowDown'==true){
    // console.log(e.key);  
    document.getElementById('table').focus();
  }
});