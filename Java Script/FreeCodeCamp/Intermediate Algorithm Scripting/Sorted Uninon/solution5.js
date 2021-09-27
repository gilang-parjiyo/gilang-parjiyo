function uniteUnique(arr) {
    let args = Array.prototype.slice.call(arguments);
    return args
        .reduce((arrA, arrB) => arrA
            .concat(arrB
                .filter(value => arrA
                    .indexOf(value) === -1)))

}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

/* 
buat args convert argument menjadi array dengan array.prototype.slice.call()
reduce args a, b
concat array a dengan array b
filter arry b yang ingin di concat
indexOf untuk memfilter item yang belum ada saja = -1
*/