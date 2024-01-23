class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    displayLibrary() {
        console.log("Library Books:");
        this.books.forEach(book => {
            book.displayInfo();
        });
    }
}
const myLibrary = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.displayLibrary();
