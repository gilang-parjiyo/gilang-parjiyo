function fearNotLetter(string = '') {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let missingChar = [];
    for (let i = 0; i < alphabet.indexOf(string[string.length-1]); i++) {
        if (string.indexOf(alphabet[i]) === -1) {
            missingChar.push(alphabet[i]);
        }
    }
    return missingChar.length === 0 ? undefined : missingChar;
}

console.log(
    fearNotLetter('abcdfh')
);