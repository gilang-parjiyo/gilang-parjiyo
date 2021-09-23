var global = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    return [].concat(arr).sort((a, b) => a - b)
}

console.log(
    'sort result: ' + nonMutatingSort(global),
    '\nvariable global unchanged ' + global,
);

