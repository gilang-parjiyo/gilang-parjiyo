function largestOfFour(arr) {
    return arr.map(group => { // create new array from argument array [[][][][]]
        return group.reduce((acc, item) => { // reduce [[a, b, c, d]...]
            return acc > item ? acc : item; // [a > b] ? a : b pick greatest number
        });
    });
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));