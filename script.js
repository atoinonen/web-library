const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read ? "already read." : "not read yet.");
    };
}

function addBookToLibrary(title, author, pages, read, library = myLibrary) {
    const book = new Book(title, author, pages, read);
    library.push(book);
    return book;
}

function listLibrary(library = myLibrary) {
    for (var book of library) {
        listBook(book);
    }
}

function listBook(book) {
    const list = document.getElementById("list");
    const card = document.createElement("div");
    card.className = "card"

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";

    const title = document.createElement("h2");
    title.textContent = book.title;
    cardTitle.appendChild(title);

    const read = document.createElement("span");
    read.textContent = book.read ? "☑" : "☐";
    read.className = "checkmark";
    cardTitle.appendChild(read);

    card.appendChild(cardTitle);

    if (book.read) {
        card.className += " read"
    } else {
        card.className += " not-read"
    }

    const author = document.createElement("h5");
    author.textContent = "by: " + book.author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = book.pages + " pages";
    card.appendChild(pages);

    list.appendChild(card);
}

function showForm(){
    const div = document.getElementById("add-book-form");
    const form = document.createElement("form");
    addFormField("title", "Title", "text", form);
    addFormField("author", "Author", "text", form);
    addFormField("pages", "Number of pages", "number", form);
    addFormField("read", "Have you read the book?", "checkbox", form);
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Add book";
    form.appendChild(button);
    div.style.maxHeight = "150px";
    div.appendChild(form);
    form.addEventListener("submit", addBook);
}

function addFormField(id, text, type, form){
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.htmlFor = id;
    label.textContent = text;
    input.type = type;
    input.name = id;
    input.id = id;
    form.appendChild(label);
    form.appendChild(input);
}

function addBook(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const book = addBookToLibrary(title, author, pages, read);
    listBook(book);
}

addBookToLibrary("Odyssey", "Homer", 12109, false);
addBookToLibrary("Hevoskuiskaaja", "Nicholas Evans", 678, true);
addBookToLibrary("Shogun", "James Clavell", 1152, true);
addBookToLibrary("Taipan", "James Clavell", 899, false)
listLibrary()
const newBookButton = document.getElementById("new-book");
newBookButton.addEventListener("click", showForm);