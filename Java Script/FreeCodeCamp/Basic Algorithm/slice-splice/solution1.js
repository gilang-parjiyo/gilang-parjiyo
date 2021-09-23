function frankenSplice(arr1, arr2, n)  {
    let newArr = arr2.slice(); // copy arr2 with slice into newArr
    newArr.splice(n, 0, ...arr1); // insert array 1 into array 2
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));