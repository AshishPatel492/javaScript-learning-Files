/* 
console.log("this is app.js");
showNotes();
let addTxt = document.getElementById('addTxtarea');
addTxt.focus(addTxt);
//If user Adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
  let addTxtbx = document.getElementById('addTxtarea');
  if (addTxtbx.value.length != 0 && addTxt.value != " ") {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }
    // notesObj.push(addTxt.value);
    notesObj.push(addTxtbx.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxtbx.value = "";
    //console.log(notesObj);
    showNotes();
    addTxtbx.focus(addTxtbx);
  }
  else {
    alert('Add Some Text');
    addTxtbx.focus(addTxtbx);
  }
});

//function to show and read elements to localstorage
function showNotes() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
              <div class="noteCard my-2 mx-2" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
              </div>
              </div>
            `;
  });
  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
// function to delete notes
function deleteNotes(index) {
  //console.log('i am deleting button', index);
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
  }
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
  let inputVal = search.value.toLowerCase();
  // console.log('input fired',inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  });
});
*/



/* 

Improving code to Add Title in a Notes

console.log("this is app.js");
showNotes();
let Focustitle = document.getElementById('inbx');
Focustitle.focus(Focustitle);
//If user Adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
  let addtitle = document.getElementById('inbx');
  let addTxtbx = document.getElementById('addTxtarea');
  let title = localStorage.getItem('titles');
  let notes = localStorage.getItem('notes');
  if (notes == null && title == null) {
    titleObj = [];
    notesObj = [];
  }
  else {
    titleObj = JSON.parse(title);
    notesObj = JSON.parse(notes);
  }
  // notesObj.push(addTxt.value);
  notesObj.push(addTxtbx.value);
  titleObj.push(addtitle.value);
  localStorage.setItem('titles', JSON.stringify(titleObj));
  localStorage.setItem('notes', JSON.stringify(notesObj));
  addtitle.value = "";
  addTxtbx.value = "";
  //console.log(notesObj);
  showNotes();
  addtitle.focus(addtitle);
});

// function to show and read elements to localstorage
function showNotes() {
  let title = localStorage.getItem('titles');
  let notes = localStorage.getItem('notes');
  if (notes == null && title == null) {
    titleObj = [];
    notesObj = [];
  }
  else {
    titleObj = JSON.parse(title);
    notesObj = JSON.parse(notes);
  }
  let html = "";
  //   console.log(typeof titleObj);
  titleObj.forEach(function (element, index) {
    html += `
                    <div class="noteCard my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${titleObj[index]}</h5>
                    <p class="card-text">${notesObj[index]}</p>
                    <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                    </div>
                  `;
  });
  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// function to delete notes
function deleteNotes(index) {
  // console.log('i am deleting button',storedata);
  let title = localStorage.getItem('titles');
  let notes = localStorage.getItem('notes');
  if (notes == null && title == null) {
    titleObj=[];
    notesObj = [];
  }
  else {
    titleObj = JSON.parse(title);
    notesObj = JSON.parse(notes);
    titleObj.splice(index,1);
    notesObj.splice(index,1);
    // console.log(index);
    localStorage.setItem('titles', JSON.stringify(titleObj));
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

  }
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
  let inputVal = search.value.toLowerCase();
  // console.log('input fired',inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("h5")[0].innerText;
    // console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  });
});
*/


// is solved by herry

console.log("is solved by herry");
showNotes();
let addTxt = document.getElementById('addTxtarea');
// addTxt.focus(addTxt);
//If user Adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
  let addTxtbx = document.getElementById('addTxtarea');
  let addTitle = document.getElementById('addTitle');
  if (addTxtbx.value.length != 0 && addTxt.value != " ") {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
      notesObj = [];
    }
    else {
      notesObj = JSON.parse(notes);
    }
    let myObj = {
      title: addTitle.value,
      text: addTxtbx.value
    }
    // notesObj.push(addTxt.value);
    notesObj.push(myObj);
    // console.log(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxtbx.value = "";
    addTitle.value = "";
    //console.log(notesObj);
    showNotes();
    addTxtbx.focus(addTxtbx);
  }
  else {
    alert('Add Some Text');
    addTxtbx.focus(addTxtbx);
  }
});
//function to show and read elements to localstorage
function showNotes() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
              <div class="noteCard my-2 mx-2" style="width: 18rem;">
              <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
              <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
              </div>
              </div>
            `;          
  });
  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// function to delete notes
function deleteNotes(index) {
  //console.log('i am deleting button', index);
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
  }
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
  let inputVal = search.value.toLowerCase();
  // console.log('input fired',inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  });
});