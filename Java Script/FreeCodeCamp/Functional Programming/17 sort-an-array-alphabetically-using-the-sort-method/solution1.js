function alphabeticalOrder(arr) {
    return arr.sort((a, b) => {
        return a === b ? 0 : a > b ? 1 : -1;
    });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

/**
 * If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b
 * If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a
 * If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged
 */
