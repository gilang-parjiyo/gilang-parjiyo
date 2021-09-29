function steamrollArray(value, flatArr = []) {
    value.forEach(element => {
        if (Array.isArray(element)) {
            steamrollArray(element, flatArr);
        } else {
            flatArr.push(element);
        }
    });
    return flatArr;
}

console.log(
    steamrollArray([1, [], [3, [[4]]]])
);