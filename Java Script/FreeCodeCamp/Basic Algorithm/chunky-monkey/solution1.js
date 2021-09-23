function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
    for (let i in arr) {
        if (i % size !== size - 1) {
            temp.push(arr[i])
        }
        else {
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }

    }
    if (temp.length !== 0) result.push(temp);
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", 'e'], 2));