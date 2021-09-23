function factorialize(num) {
    let number = 1;
    for (let i = 1; i <= num; i++) {
        number *= i;
    }
    return number;
}

console.log(factorialize(0));


function factorialize2(num) {
    for (var product = 1; num > 0; num--) {
        product *= num;
    }
    return product;
}

console.log(factorialize2(5));
