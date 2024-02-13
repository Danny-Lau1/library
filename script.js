let myLibrary = [];

function BookConstructor(title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
}

book1 = new BookConstructor("Harry Potter", "J.K Rowling", "300", true)

book2 = new BookConstructor("Ready Player One", "Ernest Cline", "350", False)

function addBook(book) {
    myLibrary.append(book)
}