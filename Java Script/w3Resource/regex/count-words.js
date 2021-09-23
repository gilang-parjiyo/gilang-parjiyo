function countWords(str = '') {
    //replace start and end whitespace
    str = str.replace(/^\s*|\s*$/gi, '');
    // replace whitespaces more than once
    str = str.replace(/[ ]{2,}/gi, ' ');
    // replace new line with white space
    str = str.replace(/\n /, '\n');
    return str.split(' ').length;
}

console.log(countWords(' gilang      romadhan  \n  romadhan'));

















// function countWords(str = 'empty') {
//     //replace white at start and end
//     str = str.replace(/^\s*|\s*$/gi, '');
//     //replace more than one white spaces
//     str = str.replace(/[ ]{2,}/gi, ' ');
//     // replace new line white spaces
//     str = str.replace(/\n /, '\n');
//     return str.split(' ').length; //pattern by whitespace
// }

// console.log(countWords(` gilang  romadhan bisa sukses`));