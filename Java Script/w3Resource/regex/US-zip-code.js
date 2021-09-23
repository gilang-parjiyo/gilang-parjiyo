function usZipCode(code = '') {
    let regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    let result = code.match(regex);
    return result;
}

console.log(usZipCode('12345-1234'));