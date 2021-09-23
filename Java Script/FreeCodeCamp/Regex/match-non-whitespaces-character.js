let words = 'What is the meaning of live';
let reg = /\S/g; // equal to /[^\s\t\f]

console.log(words.match(reg).length);