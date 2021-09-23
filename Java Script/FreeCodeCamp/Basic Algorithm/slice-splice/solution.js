function frankenSplice(arr1 = [], arr2 = [], n) {
    let newArr = arr2.slice(); // copy arr2 to newArr with slice();
    for (let i in arr1) { // loop trouggh arr1
        newArr.splice(n, 0, arr1[i]); // insert arr1 to arr2
        n++; // iterate index
    }
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));