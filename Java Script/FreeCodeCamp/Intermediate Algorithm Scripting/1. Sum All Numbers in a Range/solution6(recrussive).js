function sumAll(arr = []) {
    let [first, second] = arr.sort((a, b) => a - b);
    return first < second ? first + sumAll([first + 1, second]) : first;
}

console.log(
    sumAll([4, 1])
);

