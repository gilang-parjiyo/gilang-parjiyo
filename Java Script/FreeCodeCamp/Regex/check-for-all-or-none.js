let american = 'color';
let british = 'colour';
let regex = /colou?r/;

console.log(regex.test(british));
console.log(regex.test(american));