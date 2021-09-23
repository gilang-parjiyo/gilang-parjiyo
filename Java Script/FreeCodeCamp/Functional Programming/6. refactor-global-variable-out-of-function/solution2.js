var bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

function addBook(arr, bookname) {
    return [...arr, bookname]; // spread array then manually add book name
}

function removeBook(arr, bookname) {
    return arr.filter((book) => book !== bookname) // filter all book that is not bookname parameter
}

var newbookList = addBook(bookList, 'A Brief History of Time');
var newerbookList = removeBook(bookList, 'On The Electrodynamics of Moving Bodies');
var newestbookList = removeBook(addBook(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(
    newbookList,
    newerbookList,
    newestbookList,
    bookList // book list not mutated
);