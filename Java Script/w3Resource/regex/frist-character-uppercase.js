function checkUpper(str) {
    let result = /^[A-Z]/.test(str);
    if (result) {
        console.log(`String's first character is uppercase`);
    } else {
        console.log(`String's first character is not uppercase`);
    }
}
checkUpper('ABC');
checkUpper('abc');
