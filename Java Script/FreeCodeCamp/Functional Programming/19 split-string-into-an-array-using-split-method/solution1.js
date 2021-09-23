function splitify(str) {
    return str.split(/\W/); // delimeter any character except alphabet
}

console.log(
    splitify("Hello World,I-am code")
);