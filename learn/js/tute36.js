// challange solusion
// using class
console.log('this is tute36.js');
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