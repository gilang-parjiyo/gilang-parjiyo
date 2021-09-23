function falsyBouncy(arr) {
    return arr.filter(Boolean); // filter value array that boolean are true
}

console.log(falsyBouncy([7, "ate", "", false, 9]));