function trimFunc(str) {
    if (typeof str === 'string') {
        let regex = /^\s+|\s+$/g;
        let result = str.replace(regex, '');
        console.log(result);
        return result
    } else {
        return 'argument not string'
    }
}

console.log(trimFunc(2));