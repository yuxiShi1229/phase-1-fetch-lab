function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data; 
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const bookElement = document.createElement('h2');
    bookElement.textContent = book.name;
    main.appendChild(bookElement);
  });
}