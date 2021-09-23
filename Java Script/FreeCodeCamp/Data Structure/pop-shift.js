function popShift(arr) {
    let shifted = arr.shift();
    let popped = arr.pop();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));