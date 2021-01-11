// challange

console.log('this is tute32.js');
/* 
 create a class library and implement the following:
 1. Constructor must take the book list as an argument
 2. getBookList()
 3. issueBook(bookName, user)
 4. returnBook(bookName)
*/

/* 
// using class

class Library {
    constructor(BookList) {
        this.Books = BookList;
        this.issuedBook = {};
    }
    getBookList() {
        this.Books.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookName, user) {
        if (this.issuedBook[bookName] == undefined) {
            this.issuedBook[bookName] = user;
        }
        else {
            console.log('this book is allready issued!');
        }
    }
    returnBook(bookname) {
        delete this.issuedBook[bookname];
    }
}

let Books=new Library(['php','java','c']);
console.log(Books);
*/

// using constructor

function Library(BookList) {
    this.BooksList = BookList;
    this.issuedBook = {};
    this.getBookList = function () {
        this.BooksList.forEach(element => {
            console.log(element);
        });
    }
    this.issueBook = function (bookName, user) {
        if (this.issuedBook[bookName] == undefined) {
            this.temp_user=user;
            this.temp_book=bookName;
            this.issuedBook[bookName] = user;
        }
        else {
            console.log(`${this.temp_book} book is allready ${this.temp_user} issued!`);
        }
    }
    this.returnBook = function (bookName) {
        delete this.issuedBook[bookName];
    }
}

let Books = new Library(['php', 'java', 'c', 'c++']);
console.log(Books);