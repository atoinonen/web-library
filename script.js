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
        const title = document.createElement("h2");
        title.textContent = book.title;
        card.appendChild(title);
        list.appendChild(card);
    }
}

new Book("Odyssey", "Homer", 12109, false);
new Book("Hevoskuiskaaja", "Nicholas Evans", 678, true);
new Book("Shogun", "James Clavell", 1152, true);
new Book("Taipan", "James Clavell", 899, false)
listLibrary()