import bookLib from './modules/bookLib1.js';
import getBook from './modules/getbook.js';
import UI from './modules/UI.js';

import { DateTime } from './modules/luxon.js';

const myBookLib = new bookLib([]);
const Ui = new UI(myBookLib);

const addBtn = document.querySelector('.addBook');
addBtn.addEventListener('click', () => {
  const book = getBook();
  myBookLib.addBook(book);
  Ui.generateBookHTML(book);
});

window.onload = () => {
  myBookLib.bookList = JSON.parse(localStorage.getItem('bookLib')) || [];
  myBookLib.bookList.forEach((book) => {
    Ui.generateBookHTML(book);
  });
};

const displayDateTime = () => {
  const dateTimeString = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.querySelector('.date').innerHTML = dateTimeString;
};
setInterval(displayDateTime, 1000);

const list = document.querySelector('#List');
const add = document.querySelector('#Addnew');
const cont = document.querySelector('#Contact');
const contContainer = document.querySelector('#contact');
const addContainer = document.querySelector('.form');
const listContainer = document.querySelector('#book-list');
const contFunc = () => {
  contContainer.setAttribute('style', 'display:block');
  listContainer.setAttribute('style', 'display:none');
  addContainer.setAttribute('style', 'display:none');
};
cont.addEventListener('click', contFunc);
const addFunc = () => {
  addContainer.setAttribute('style', 'display:block');
  listContainer.setAttribute('style', 'display:none');
  contContainer.setAttribute('style', 'display:none');
};
add.addEventListener('click', addFunc);
const listFunc = () => {
  addContainer.setAttribute('style', 'display:none');
  listContainer.setAttribute('style', 'display:block');
  contContainer.setAttribute('style', 'display:none');
};
list.addEventListener('click', listFunc);
