function fearNoLetter(string = '') {
    let arrCode = [];
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);

        if (code !== string.charCodeAt(0) + i) {
            arrCode.push(String.fromCharCode(code - 1))
        }
    }
    return arrCode.length === 0 ? undefined : arrCode
}

console.log(
    fearNoLetter('bcdg')
);