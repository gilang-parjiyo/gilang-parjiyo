function celciusToFahrenheit(celcius) {
    return celcius * (9 / 5) + 32;
}

module.exports.celciusToFahrenheit = celciusToFahrenheit;
module.exports.fahrenheitToCelcius = function (fahrenheit) {
    return (fahrenheit - 35) * (5 / 9);
}