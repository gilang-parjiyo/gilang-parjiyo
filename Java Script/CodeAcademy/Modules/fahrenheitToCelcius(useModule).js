const {celciusToFahrenheit} = require('./converter(module)');

const celciusInput = process.argv[2];
const fahrenheitValue = celciusToFahrenheit(celciusInput);

console.log(`${celciusInput} degreess celcius is ${fahrenheitValue} degrees fahrenheit`);