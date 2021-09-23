let regex = /\W/; // equal to [^a-zA-Z0-9_];
let number = "200%";
let string = 'jangan pergi !'

console.log(number.match(regex)); // return %
console.log(string.match(string)); // return !