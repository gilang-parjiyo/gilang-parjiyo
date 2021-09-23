const squareList = arr => {
    // Only change code below this line
    return arr.filter(item => Number.isInteger(item) && item > -1) // filter item that positif and whole number
        .map(item => item * item) // square item using map
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/**
 *
 */