let str = 'mnet, man';
let regStar = /ma*n/g;
let regPlus = /ma+n/g;

let resultStar = str.match(regStar);
let resultPlus = str.match(regPlus);

console.log(resultStar);
console.log(resultPlus);



