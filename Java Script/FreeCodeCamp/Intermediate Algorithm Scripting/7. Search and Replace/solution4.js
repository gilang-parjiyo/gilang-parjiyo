function myReplace(str = '', bfr = '', afr = '') {

    function applyCase(source = '', target = '') {
        sourceArr = source.split('');
        targetArr = target.split('');

        for (let i = 0; i < Math.min(sourceArr.length, targetArr.length); i++) {
            if (/^[A-Z]/.test(source[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            } else {
                targetArr[i] = targetArr[i].toLowerCase();
            }
        }
        return targetArr.join('');
    }
    return str.replace(bfr, applyCase(bfr, afr))
}

console.log(
    myReplace(
        "A quick brown fox Jumped over the lazy dog",
        "Jumped",
        'leaped'
    )
);