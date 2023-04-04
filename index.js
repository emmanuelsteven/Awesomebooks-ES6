import { DateTime } from './modules/luxon.js';
import { Book, UI, myBookLib } from './modules/constructor.js';

import {
  List, Form, Contact, heading,
} from './modules/nav-variable.js';

const getBook = () => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const book = new Book(myBookLib.bookList.length, title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
};

const addBtn = document.querySelector('.addBook');
addBtn.addEventListener('click', () => {
  const book = getBook();
  myBookLib.addBook(book);
});

window.onload = () => {
  myBookLib.bookList = JSON.parse(localStorage.getItem('bookLib')) || [];
  myBookLib.bookList.forEach((book) => {
    UI(book);
  });
};

navigation = (section) => {
  switch (section) {
    case 'show-book':
      List.style.display = 'block';
      Form.style.display = 'none';
      Contact.style.display = 'none';
      heading.innerHTML = 'All Awesome Books';
      break;

    case 'form':
      List.style.display = 'none';
      Form.style.display = 'block';
      Contact.style.display = 'none';
      heading.innerHTML = 'Add a New Book';
      break;

    case 'contact':
      List.style.display = 'none';
      Form.style.display = 'none';
      Contact.style.display = 'block';
      heading.innerHTML = 'Contact Information';
      break;

    default: break;
  }
};

const displayDateTime = () => {
  const dateTimeString = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.querySelector('.date').innerHTML = dateTimeString;
};
setInterval(displayDateTime, 1000);