function chunkyArrayInGroups(arr, size) {
    if (arr.length <= size) {
        return [arr];
    } else {
        return [arr.slice(0, size)]
            .concat(chunkyArrayInGroups(arr.slice(size), size));
    }


}
console.log(chunkyArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f'], 2));


/**
 * check 
 */