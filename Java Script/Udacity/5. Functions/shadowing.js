var bookTitle = 'Le Petit Prince';
console.log(bookTitle);

function displayBookEnglish(){
    bookTitle = 'The Little Prince';
    console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle); // global scope variable 'bookTitle' 'le Petit Prince' re assing after function 'displayBookEnglish' called.
/**
Result :
Le Petit Prince
The Little Prince
Le Petit Prince
 */


// use this instead

var bookTitle = 'Le Petit Prince';
console.log(bookTitle);

function displayBookEnglish(){
    var bookTitle = 'The Little Prince'; // reassign new variable for bookt title inside function
    console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle); // global scope variable 'bookTitle' 'le Petit Prince' re assing after function 'displayBookEnglish' called.

/**
Result :
Le Petit Prince
The Little Prince
Le Petit Prince
 */

