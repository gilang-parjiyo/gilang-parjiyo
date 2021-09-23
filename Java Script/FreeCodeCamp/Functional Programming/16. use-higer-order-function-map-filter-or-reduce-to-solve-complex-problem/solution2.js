function squareList(arrNum) {
    return arrNum
        .filter((num) => num > 0 && num % parseInt(num) === 0) // filter positive whole number
        .map((num) => Math.pow(num, 2)); // 
}

console.log(
    squareList([-3, 4.8, 5, 3, -3.2])
);