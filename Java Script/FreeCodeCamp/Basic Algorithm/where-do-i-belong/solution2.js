function getIndexToInsert (arr, num) {
    arr.sort((a, b) => a - b);
    for (let i in arr) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToInsert([10, 20, 30, 40, 50], 60));