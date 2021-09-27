function uniteUnique(...arr) {
    return arr
        .reduce((a, b) => a
            .concat(b
                .filter(value => a
                    .indexOf(value) == -1)), [])
}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);