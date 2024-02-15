let addBookBtn = document.getElementById("showModal");
let modal = document.getElementById("modal");
let form = document.getElementById("form")
let cancelBtn = document.getElementById("cancel")
let libraryContainer = document.querySelector(".library-container")
let myLibrary = [];

addBookBtn.addEventListener("click", () => {
    modal.showModal()
})

cancelBtn.addEventListener("click", (event) => {
    event.preventDefault()
    modal.close()
})


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
    let bookContainerDiv = document.createElement("div")
    bookContainerDiv.className = "book-container"

    let cardContainerDiv = document.createElement("div")
    cardContainerDiv.className = "card-container"

    bookContainerDiv.appendChild(cardContainerDiv)

    let upperContainerDiv = document.createElement("div")
    upperContainerDiv.className = "upper-container"

    cardContainerDiv.appendChild(upperContainerDiv)

    let containerTitleDiv = document.createElement("div")
    containerTitleDiv.className = "container-title"

    upperContainerDiv.appendChild(containerTitleDiv)

    let hThree = document.createElement("h3")
    let cardTitle = document.createTextNode("Library Card")

    containerTitleDiv.appendChild(hThree)
    hThree.appendChild(cardTitle)

    let libraryTitleDiv = document.createElement("div")
    libraryTitleDiv.className = "library-title"
    let libraryTitleUser = document.createTextNode(book.title)
    libraryTitleDiv.appendChild(libraryTitleUser)
    upperContainerDiv.appendChild(libraryTitleDiv)

    let libraryLabelDiv = document.createElement("div")
    libraryLabelDiv.className = "library-label"
    let libraryLabelTitle = document.createTextNode("Title")
    libraryLabelDiv.appendChild(libraryLabelTitle)
    upperContainerDiv.append(libraryLabelDiv)

    let libraryAuthorDiv = document.createElement("div")
    libraryAuthorDiv.className = "library-author"
    let libraryAuthorUser = document.createTextNode(book.author)
    libraryAuthorDiv.appendChild(libraryAuthorUser)
    upperContainerDiv.appendChild(libraryAuthorDiv)

    let libraryLabelAuthor = document.createElement("div")
    libraryLabelAuthor.className = "library-label"
    libraryLabelAuthor.setAttribute("id", "library-label-author")
    let libraryLabelAuthorTitle = document.createTextNode("Author")
    libraryLabelAuthor.appendChild(libraryLabelAuthorTitle)
    upperContainerDiv.appendChild(libraryLabelAuthor)

    libraryContainer.appendChild(bookContainerDiv)

}

function displayBooks() {

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