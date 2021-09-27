function fearNoLetter(str = '') {
    let missing = undefined;
    let curCharCode = str.charCodeAt(0)
    str.split('').forEach(item => {
        if (item.charCodeAt(0) === curCharCode) {
            curCharCode++;
        } else {
            missing = String.fromCharCode(curCharCode);
        }
    });
    return missing;
}

console.log(
    fearNoLetter('acdef')
)