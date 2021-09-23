let squareList = arr => {
    return arr.reduce((squarInteger, num) => {
        return Number.isInteger(num) && num > 0 // fitler positve whole number
            ? squarInteger.concat(num * num) // square postive number and concat with accumulator
            : squarInteger; // return accumulator
    }, []) // start with empty array
}

console.log(
    squareList([-3, 4.8, 5, 3, -3.2])
);

