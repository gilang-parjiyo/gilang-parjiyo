let repeatStr = 'row row row row row row';
let regexRepeat = /(row) \1 \1/g;
let result = regexRepeat.test(repeatStr);
let match = repeatStr.match(regexRepeat);
console.log(match);