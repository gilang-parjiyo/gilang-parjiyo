function dropElements(arr = [], func) {
    return arr.filter((item) => !func(item));
}

console.log(
    dropElements([0, 1, 1, 0], function (n) { return n === 1; })
);
