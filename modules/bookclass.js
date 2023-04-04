// export class Book {
//     id = '';

//     title = '';

//     author = '';

//     constructor(id, title, author) {
//       this.id = id;
//       this.author = author;
//       this.title = title;
//     }
// }

// export class BookLib {
//     bookList = [];

//     constructor(bookList) {
//       this.bookList = bookList;
//     }

//     addBook(book) {
//       if (book.title.trim() !== '' && book.author.trim() !== '') {
//         this.bookList = this.bookList.concat(book);
//         localStorage.setItem('bookLib', JSON.stringify(this.bookList));
//         UI(book);
//       }
//     }

//     removeBook(book) {
//       this.bookList = this.bookList.filter((filt) => filt.id !== book.id);
//       localStorage.setItem('bookLib', JSON.stringify(this.bookList));
//     }
// }
// export const myBookLib = new BookLib([]);