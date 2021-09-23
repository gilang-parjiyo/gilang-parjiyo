function celciusToFahrenheit(celcius) {
    return celcius * (9/5) + 32;
}

const celciusInput = process.argv[2]; //When a program is executed in the Node environment, process.argv is an array holding the arguments provided. In this case, it looks like ['node', 'celsius-to-fahrenheit.js', '100']. So, process.argv[2] returns 100.
const fahrenheitValue = celciusToFahrenheit(celciusInput)
console.log(`${celciusInput} degrees Celcius = ${fahrenheitValue} degree Fahrenheit`);


//to run program on node environment = node .\celcius-to-fahrenheit.js 100