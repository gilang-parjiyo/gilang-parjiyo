function sumAll(arr = []) {
    arr.sort((a, b) => a - b); //sort ascending
    let sum = 0; // variable hold sum value
    for (let i = arr[0]; i <= arr[1]; i++) { // iteration from start to end
        sum += i; // sum
    }
    return sum;

}


console.log(
    sumAll([10, 5])
)
