function diffArr(arr1 = [], arr2 = []) {
    return arr1.concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(diffArr([1, 2, 3, 7, 5], [1, 2, 3, 4, 5]));