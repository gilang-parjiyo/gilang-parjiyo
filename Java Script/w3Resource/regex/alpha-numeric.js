function alphaNumeric(value) {
    let regex = /^[A-Za-z0-9]+$/;
    let result = regex.test(value);
    return result;
}

console.log(alphaNumeric('aitrjf098df'));