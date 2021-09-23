const radius = 6;
const sideLength = 10;

const {circleArea, squareArea } = require('./area(module)');

const areaOfCircle = circleArea(radius);
const areaOfSquare = squareArea(sideLength);

console.log(`The area of cicle is ${areaOfCircle} and the area of square is ${areaOfSquare}`);