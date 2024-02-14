let addBookBtn = document.getElementById("showModal");
let modal = document.getElementById("modal");
let form = document.getElementById("form")
let cancelBtn = document.getElementById("cancel")

let myLibrary = [];

addBookBtn.addEventListener("click", () => {
    modal.showModal()
})

cancelBtn.addEventListener("click", (event) => {
    event.preventDefault()
    modal.close()
})

//////////////////////////////////////////////////////////////////////////
form.addEventListener("submit", function (event) {
    event.preventDefault()

    // Book Information From Form Inputs
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let readStatus = document.getElementById("read").value

    let newBook = new BookConstructor(title, author, pages, readStatus)
    addBook(newBook)
})




function BookConstructor(title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
}

// 

function addBook(book) {
    myLibrary.push(book)
    console.log(myLibrary)
}

//////////////////////////////////////////////////////////////////////////
// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value
//     let pages = document.getElementById("pages").value
//     let readStatus = document.getElementById("read").value

//     let newBook = new BookConstructor(title, author, pages, readStatus)
//     addBook(newBook)
// })

// form.addEventListener("click", createBook)

// function createBook() {

//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value
//     let pages = document.getElementById("pages").value
//     let readStatus = document.getElementById("read").value

//     let newBook = new BookConstructor(title, author, pages, readStatus)
//     addBook(newBook)
// }