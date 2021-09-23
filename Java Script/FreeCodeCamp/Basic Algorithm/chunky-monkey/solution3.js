function chunkyArrayInGroups(arr, size) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;

}

console.log(chunkyArrayInGroups(['a', 'b', 'c'], 2));