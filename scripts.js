const myLibrary = ['test', 'book'];
const addBookButton = document.querySelector(".add-book-button");
const bookTableBody = document.querySelector(".book-table tbody")

addBookButton.addEventListener('click', (event) => {
    addBookToLibrary(prompt());
})

function addBookToLibrary(book) {
    myLibrary.push(book);
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = book;
    row.appendChild(cell);
    bookTableBody.appendChild(row);
}

function Book() {

}




