let quit = 'qu';
let noquit = 'qt';
let quRegex = /q(?=u)/;
let qtRegex = /q(?!u)/;

console.log(quRegex.test(quit)); // true karena setelah q ada u
console.log(qtRegex.test(noquit)); // true karena setelah q tidak ada u

let password = 'abc123';
let passRegex = /(?=\w{3,6})(?=\D*\d)/;

console.log(passRegex.test(password));