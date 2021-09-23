function diffArr(arr1 = [], arr2 = []) {
    return [...diffTwo(arr1, arr2), ...diffTwo(arr2, arr1)]

    function diffTwo(a = [], b = []) {
        return a.filter(value => b.indexOf(value) === -1);
    }
}

console.log(diffArr([1, 2, 3, 7, 5], [1, 2, 3, 4, 5]));