const myLibrary = [];
const addBookButton = document.querySelector(".add-book-button");
const bookTableBody = document.querySelector(".book-table tbody");

addBookButton.addEventListener('click', (event) => {
    const book = new Book();
    createRow(book);
    myLibrary.push(book);
    console.log(myLibrary);
    clearForm();
})

function Book() {
    this.title = document.querySelector('#title').value;
    this.author = document.querySelector('#author').value;
    this.pages = document.querySelector('#pages').value;
    this.read = document.querySelector('#read:checked') !== null;
}

function createRow(book) {
    let row = document.createElement('tr');
    row.appendChild(createCell(book.title));
    row.appendChild(createCell(book.author));
    row.appendChild(createCell(book.pages));
    row.appendChild(createCell(book.read));
    row.appendChild(createCell('Delete', book));
    bookTableBody.appendChild(row);
}

function createCell(content, book) {
    let cell = document.createElement('td');
    cell.textContent = content;
    if (cell.textContent === 'Delete') {
        cell.addEventListener('click', (event) => {
            myLibrary.splice(book);
            event.target.closest('tr').remove();
        })
    }
    return cell;
} 

function clearForm() {
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'text' || input.type === 'number') {
            input.value = '';  // Clear text and number fields
        } else if (input.type === 'radio') {
            input.checked = false;  // Uncheck radio buttons
        }
    });
}