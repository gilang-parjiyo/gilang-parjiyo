function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
        new Array(num)
            .fill(undefined)
            .reduce((product, val, index) => product * (index + 1), 1)
    )
}


console.log(factorialize(5));

console.log(true);