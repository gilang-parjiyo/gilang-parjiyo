let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9];

function nonMutatingConcat(original, attach) {
    return original.concat(attach); // using method concat so original array not mutated
}

console.log(
    nonMutatingConcat(arr1, arr2),

);  