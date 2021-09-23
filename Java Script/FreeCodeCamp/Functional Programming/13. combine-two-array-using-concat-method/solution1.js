let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function nonMutatingConcat(original, attach) {
    return original.concat(attach); // concat original array with attach array
}

console.log(
    nonMutatingConcat(arr1, arr2)

);