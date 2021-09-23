function celciusToFahrenheit (celcius) {
    return celcius * (9/5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celciusToFahrenheit(freezingPointC);
const boilingPointF = celciusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);