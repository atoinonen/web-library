const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read ? "already read." : "not read yet.");
    };
    addBookToLibrary(this);
}

function addBookToLibrary(book, library = myLibrary) {
    myLibrary.push(book);
}

function listLibrary(library = myLibrary) {
    const list = document.getElementById("list");
    for (var book of library) {
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
        
        if (book.read){
            card.className += " read"
        }else{
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
}

function showForm(){
    const div = document.getElementById("add-book-form");
    const form = document.createElement("form");
    addFormField("title", "Title", "text", form);
    addFormField("author", "Author", "text", form);
    addFormField("pages", "Number of pages", "number", form);
    div.appendChild(form);
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

new Book("Odyssey", "Homer", 12109, false);
new Book("Hevoskuiskaaja", "Nicholas Evans", 678, true);
new Book("Shogun", "James Clavell", 1152, true);
new Book("Taipan", "James Clavell", 899, false)
listLibrary()
const newBookButton = document.getElementById("new-book");
newBookButton.addEventListener("click", showForm);