/* eslint-disable new-cap */
import bookLib from './modules/BookLib.js';
import getBook from './modules/getbook.js';
import UI from './modules/UI.js';
import { DateTime } from './modules/luxon.js';

const myBookLib = new bookLib([]);
const ui = new UI(myBookLib);

const addBtn = document.querySelector('.addBook');
addBtn.addEventListener('click', () => {
  const book = getBook();
  myBookLib.addBook(book);
  ui.generateBookHTML(book);
});

window.onload = () => {
  myBookLib.bookList = JSON.parse(localStorage.getItem('bookLib')) || [];
  myBookLib.bookList.forEach((book) => {
    ui.generateBookHTML(book);
  });
};

const navigation = (section) => {
  const List = document.querySelector('#show-book');
  const Form = document.querySelector('.form');
  const Contact = document.querySelector('.contact');
  const heading = document.querySelector('.header');

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

    default:
      break;
  }
};
navigation();

const dateTime = DateTime.now();
document.getElementById('date').innerHTML = dateTime.toLocaleString(
  DateTime.DATETIME_MED,
);