function chunkyArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
        console.log(arr.length);
    }
    return newArr
}

console.log(chunkyArrayInGroups(['a', 'b', 'c'], 1));