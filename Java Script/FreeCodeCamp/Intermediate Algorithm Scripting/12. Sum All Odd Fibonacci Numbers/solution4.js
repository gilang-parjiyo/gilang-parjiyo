function sumFibs(num) {
    let arrFib = [1, 1];
    let nextFeb = 0;

    while ((nextFeb = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFeb);
    }
    return arrFib.filter(item => item % 2 !== 0)
    .reduce((a, b) => a + b)
}

console.log(
    sumFibs(4)
);