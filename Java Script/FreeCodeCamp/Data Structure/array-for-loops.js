function filteredArray(arr, elem) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) newArr.push(arr[i]);

    }
    return newArr;

}

console.log(filteredArray([[1, 2, 3], [2, 45, 5], [7, 8, 9]], 7)); //return [ [ 1, 2, 3 ], [ 2, 45, 5 ] ] karena tidak mengandung elemen 7 maka di push kedalam newArr

/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
*/