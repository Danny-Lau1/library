let addBookBtn = document.getElementById("showModal");
let modal = document.getElementById("modal");
let form = document.getElementById("form")
let cancelBtn = document.getElementById("cancel")
let libraryContainer = document.getElementById("library-container-id")
let textInputs = document.querySelectorAll("input[type=text]")
let selectInput = document.querySelector("select")

let myLibrary = [];

let bookId = 0

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

    addToLibrary(newBook)
    renderLibrary()

    clearForm()
    modal.close()
})


function clearForm() {
    textInputs.forEach((input) => {
        input.value = ""
    });
    selectInput.value = "Read"
}

function addToLibrary(book) {
    myLibrary.push(book)
}

function renderLibrary() {
    libraryContainer.innerHTML = ""
    myLibrary.forEach((book) => {
        displayBooks(book)
    })
}

function incrementBookId() {
    bookId += 1
}

function BookConstructor(title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
    this.bookId = bookId
    incrementBookId()
}

function deleteBook(bookContainerDiv) {
    console.log(bookContainerDiv.getAttribute("book-id"))
    bookElementId = bookContainerDiv.getAttribute("book-id")

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i]["bookId"] === parseInt(bookElementId)) {
            console.log("hello")
            myLibrary.splice(i, 1)
            break
        }
    } renderLibrary()
}




function displayBooks(book) {
    let bookContainerDiv = document.createElement("div")
    bookContainerDiv.className = "book-container"
    bookContainerDiv.setAttribute("book-id", book.bookId)

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
    let libraryLabelAuthorTitle = document.createTextNode("Author")
    libraryLabelAuthor.appendChild(libraryLabelAuthorTitle)
    upperContainerDiv.appendChild(libraryLabelAuthor)

    let libraryPagesDiv = document.createElement("div")
    libraryPagesDiv.className = "library-pages"
    let libraryPagesUser = document.createTextNode(book.pages)
    libraryPagesDiv.appendChild(libraryPagesUser)
    upperContainerDiv.appendChild(libraryPagesDiv)

    let libraryPagesTitle = document.createElement("div")
    libraryPagesTitle.className = "library-label"
    libraryPagesTitle.setAttribute("id", "library-pages-label")
    let libraryPagesText = document.createTextNode("Pages")
    libraryPagesTitle.appendChild(libraryPagesText)
    upperContainerDiv.appendChild(libraryPagesTitle)


    let lowerContainerDiv = document.createElement("div")
    lowerContainerDiv.className = "lower-container"
    cardContainerDiv.appendChild(lowerContainerDiv)

    let libraryStatusDiv = document.createElement("div")
    libraryStatusDiv.className = "library-status"
    lowerContainerDiv.appendChild(libraryStatusDiv)

    let libraryStatusTitle = document.createElement("div")
    let statusTitle = document.createTextNode("Status:")
    libraryStatusTitle.appendChild(statusTitle)
    libraryStatusDiv.appendChild(libraryStatusTitle)

    let readStatusTitle = document.createElement("div")
    let readStatusUser = document.createTextNode(book.beenRead)
    readStatusTitle.appendChild(readStatusUser)
    libraryStatusDiv.appendChild(readStatusUser)

    let libraryDeleteDiv = document.createElement("div")
    libraryDeleteDiv.className = "library-delete"
    let libraryDeleteBtn = document.createElement("button")
    libraryDeleteBtn.className = "delete-button"
    let deleteText = document.createTextNode("Delete")
    libraryDeleteBtn.appendChild(deleteText)
    libraryDeleteDiv.appendChild(libraryDeleteBtn)
    lowerContainerDiv.appendChild(libraryDeleteDiv)

    libraryDeleteBtn.addEventListener("click", function () {
        deleteBook(bookContainerDiv)
    })

    libraryContainer.appendChild(bookContainerDiv)

}

