function sumAll(arr = []) {
    arr.sort((a, b) => a - b);
    let newArr = [arr[0]];
    let count = 1;
    for (let i = arr[0]; i < arr[1]; i++) {
        newArr.push(newArr[0] + count++)
    }
    newArr = newArr.reduce((acc, curr) => acc + curr)
    return newArr;

}


console.log(
    sumAll([10, 5])
);


// Logic:
// start > end = start to end;
// start < end = end to start;
// start < end
// push
// reduce