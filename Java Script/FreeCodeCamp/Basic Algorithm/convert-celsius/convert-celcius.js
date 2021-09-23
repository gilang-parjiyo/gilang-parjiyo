const convertC = celsius => {
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

console.log(convertC(-5.5));

const convertF = fahrenheit => {
    let celsius;
    celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log(convertF(22));

function checkConvert(fahrenheit, celcius) {
    return fahrenheit - celcius === 48 ? true : false; 

}

console.log(checkConvert(convertC(20), convertF(68)));