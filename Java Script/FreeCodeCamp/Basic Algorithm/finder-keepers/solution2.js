function findElement(arr, func) {
    let num = 0
    num = arr.find((elem) => func(elem) === true);
    return num;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }));