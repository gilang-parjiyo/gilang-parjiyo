let longHand = /[A-Za-z0-9_]/;
let shortHand = /\w+/;
let numbers = 43;
let varName = 'importan_var';

console.log(longHand.test(numbers));
console.log(longHand.test(varName));
console.log(shortHand.test(numbers));
console.log(shortHand.test(varName));