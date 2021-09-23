function largestFour(arr) {
    let largestFourArr = [];
    for (let item in arr) {
        largestFourArr.push(Math.max(...arr[item]))
    }
    return largestFourArr;
}

console.log(largestFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));