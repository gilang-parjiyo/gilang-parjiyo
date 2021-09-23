let string = 'Titanic';
let regX = /T[a-z]*i/g
let regLazy = /T[a-z]*?i/g

console.log(string.match(regX)); // default find the longest possible matches
console.log(string.match(regLazy)); // lazy find the smallest possible matches