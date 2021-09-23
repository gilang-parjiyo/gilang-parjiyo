
function largestOfFour(array, finalArr = []) {
    return array.length === 0 ? finalArr : largestOfFour(array.slice(1), finalArr.concat(Math.max(...array[0])))
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));