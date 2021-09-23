function chunkyMonkey(arr, size) {
    let newArray = [];
    for (let i = 0; i < arr.length; i += size) {
        newArray.push(arr.slice(i, i + size));
    }
    return newArray;
}

console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
