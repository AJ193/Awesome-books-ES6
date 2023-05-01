import Allbookshop from './modules/data.js';
import showwindow from './modules/books.js';
import * as dateTime from './modules/date-time.js';

const ourLocalDate = document.querySelector('.ourLocalDate');
ourLocalDate.innerHTML = `${dateTime.ourLocalDate} ${dateTime.hour}:${dateTime.minit}`;

const aweSomeBookshop = new Allbookshop();

aweSomeBookshop.additionTionOfBooks();
aweSomeBookshop.giveOutBooks();
showwindow();