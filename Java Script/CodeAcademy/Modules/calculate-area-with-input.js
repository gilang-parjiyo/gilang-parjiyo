const {circleArea, squareArea} = require('./area(module).js');

const input = process.argv[2];

const areaOfCircle = circleArea(input);
const areaOfSquare = squareArea(input);

console.log(`Area of circle is ${areaOfCircle} and area of square is ${areaOfSquare}`);