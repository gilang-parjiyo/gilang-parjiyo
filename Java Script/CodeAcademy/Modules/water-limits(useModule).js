const converter = require('./converter(module)'); //relative path converter.js

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converter.celciusToFahrenheit(freezingPointC); // import function celciusToFahrenheit from module converter
const boilingPointF = converter.celciusToFahrenheit (boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);