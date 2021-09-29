function steamrollArray(arr = []) {
    let lenArr = arr.length;
    let flattenArr = [];
    for (let i = 0; i < lenArr; i++) {
        if (Array.isArray(arr[i])) {
            flattenArr.push(...steamrollArray(arr[i]));
        } else {
            flattenArr.push(arr[i]);
        }
    }
    return flattenArr;
}
console.log(
    steamrollArray([1, [], [3, [[4]]]])
);

