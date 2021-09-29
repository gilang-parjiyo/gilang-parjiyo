function steamrollArray(orArr = [], flatArr = []) {
    let elem = orArr.pop();
    return elem ? Array.isArray(elem) ?
        steamrollArray(orArr.concat(elem), flatArr)
        : steamrollArray(orArr, [elem, ...flatArr])
        : flatArr;
}

console.log(
    steamrollArray([1, [], [3, [[4]]]])
);