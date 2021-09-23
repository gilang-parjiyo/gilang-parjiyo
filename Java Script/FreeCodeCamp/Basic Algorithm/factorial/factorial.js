function factorialize(num) {
    let result = 0;
    if (num === 0) {
        result = 1;
    } else {
        let factorial = [];
        for (let i = 1; i <= num; i++) {
            factorial.push(i);
        }
        result = factorial.reduce((a, b) => a * b);
    }
    return result;
}

console.log(factorialize(5));