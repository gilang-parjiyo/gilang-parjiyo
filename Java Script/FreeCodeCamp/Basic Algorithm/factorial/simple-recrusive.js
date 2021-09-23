function factorialize4(num) {
    return num === 0 ? 1 : num * factorialize4(num - 1)
}

console.log(factorialize4(0));