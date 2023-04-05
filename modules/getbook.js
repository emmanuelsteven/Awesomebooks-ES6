import Book from './Book.js';

const getBook = () => {
  const titleHTML = document.querySelector('.title');
  const authorHTML = document.querySelector('.author');
  const randomId = `Id ${Date.now()}`;
  const newBook = new Book(randomId, titleHTML.value, authorHTML.value);
  titleHTML.value = '';
  authorHTML.value = '';
  return newBook;
};
export default getBook;
