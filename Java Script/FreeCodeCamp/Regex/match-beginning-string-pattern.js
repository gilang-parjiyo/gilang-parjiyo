let firstStr = 'gilang romadhan';
let secondStr = 'romadhan gilang';
let firstReg = /^gilang/;

console.log(firstReg.test(firstStr)); // true found gilang at the beginning of string.
console.log(firstReg.test(secondStr)); // false can't find gilang at the beginning of stirng.
console.log(firstStr.match(firstReg)); // print gilang
