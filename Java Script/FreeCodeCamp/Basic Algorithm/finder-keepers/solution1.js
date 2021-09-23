function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length && num === 0 | num === undefined; i++) {
        if (func(arr[i]) === true) {
            num = arr[i];

        } else if (func(arr[i]) === undefined | !false) {
            num = undefined;
        }
    }
    return num;
}

// findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }));

// console.log((function (num) { return num % 2 === 0; })(5));