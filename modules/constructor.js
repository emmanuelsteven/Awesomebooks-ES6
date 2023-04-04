// import { Book } from './modules/bookclass.js';
export const myBookLib = new BookLib ([]);
export const UI = (books) => {
  const bookLi = document.querySelector('#book-list');
  const book = document.createElement('LI');
  book.setAttribute('style', 'id:list');
  book.id = `${books.id}`;
  book.innerHTML = `<h3> "${books.title}" by ${books.author} </h3>`;

  book.style.listStyle = 'none';
  const delBook = document.createElement('button');
  delBook.innerHTML = 'Delete';
  delBook.addEventListener('click', () => {
    myBookLib.removeBook(books);
    bookLi.removeChild(book);
  });
  book.appendChild(delBook);
  bookLi.appendChild(book);
};

export class Book {
  id = '';

  title = '';

  author = '';

  constructor(id, title, author) {
    this.id = id;
    this.author = author;
    this.title = title;
  }
}

export class BookLib {
  bookList = [];

  constructor(bookList) {
    this.bookList = bookList;
  }

  addBook(book) {
    if (book.title.trim() !== '' && book.author.trim() !== '') {
      this.bookList = this.bookList.concat(book);
      localStorage.setItem('bookLib', JSON.stringify(this.bookList));
      UI(book);
    }
  }

  removeBook(book) {
    this.bookList = this.bookList.filter((filt) => filt.id !== book.id);
    localStorage.setItem('bookLib', JSON.stringify(this.bookList));
  }
}
