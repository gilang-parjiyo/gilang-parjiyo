function diffArray(arr1 = [], arr2 = []) {
    let newArr = [];

    function firstInTwo(first = [], second = []) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i])
            }
        }
    }

    firstInTwo(arr1, arr2);
    firstInTwo(arr2, arr1);
    return newArr;
}
let arr1 = [1, 2, 3, 7, 5]
let arr2 = [1, 2, 3, 4, 5]

console.log(
    diffArray(arr1, arr2)
);

