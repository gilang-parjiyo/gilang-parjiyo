function dropElements(arr = [], func, i = 0) {
    return i < arr.length && !func(i) ?
        dropElements(arr.slice(i + 1), func, i) // i tidak di iterate karena arr.length berkurang.
        : arr;
}

console.log(
    dropElements([1, 2, 3, 4], function (n) {
        return n >= 5;
    })
);

/*
method use :
- recrussive
- slice()
- ternary operator, logical AND

recrussive concept
- iteration : iteration yang digunakan adalah i = 0 dan tidak dirubah karena yang berubah adalah panjang array.

codeflow
- terminator : i < arr.length dan func(i) = false
    true : call function lagi dengan slice drop element + tambah iterasi
    false : return arr.

take away
- selalu perhatikan operation slice(), karena arraynya akan berubah

*/