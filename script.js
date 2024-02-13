let addBookBtn = document.getElementById("showModal");
let modal = document.getElementById("modal");


let form = document.getElementById("form")
let submitBtn = document.getElementById("submit")

addBookBtn.addEventListener("click", () => {
    modal.showModal()
})

form.addEventListener("submit", function (event) {
    event.preventDefault()

    // Book Information From Form Inputs
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let readStatus = document.getElementById("read").value
    console.log(title)

    let newBook = new BookConstructor(title, author, pages, readStatus)
    addBook(newBook)
})



let myLibrary = [];

function BookConstructor(title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
}

// 

function addBook(book) {
    myLibrary.push(book)
    console.log(myLibrary[0])
}

//book1 = new BookConstructor("Harry Potter", "J.K Rowling", "300", true)

// book2 = new BookConstructor("Ready Player One", "Ernest Cline", "350", False)

