function findElement(arr = [], func) {
    arr.length && !func(arr[0]) ?
        findElement(arr.slice(1), func) : arr[0];
}

console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }));