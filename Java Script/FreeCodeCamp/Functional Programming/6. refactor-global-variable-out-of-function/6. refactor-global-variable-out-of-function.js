// the global variable
var bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae"
];

function addBook(arr, bookName) {
    let newArr = [...arr]
    newArr.push(bookName);
    return newArr;
}

function removeBook(arr, bookName) {
    let newArr = [...arr];
    let indexBook = newArr.indexOf(bookName);
    if (indexBook >= 0) {
        newArr.splice(indexBook, 1);
    }
    return newArr;
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