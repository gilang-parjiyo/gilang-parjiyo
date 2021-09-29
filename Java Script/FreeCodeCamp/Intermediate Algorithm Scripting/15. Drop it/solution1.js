function dropELements(arr = [], func) {
    // hapus array ketika 
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

console.log(
    dropELements([0, 0, 0, 0], function (n) { return n === 1; })
);