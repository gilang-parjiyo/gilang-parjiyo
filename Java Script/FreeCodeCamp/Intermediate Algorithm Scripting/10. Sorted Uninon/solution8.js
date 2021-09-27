function uniteUnique(...args) {
    return [...new Set(args.flat())]
}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

/* 
arguments dari spread dibuat flat menggabungkan semua sub arugment menjadi satu.
kemudian argument dimasukan ke set menjadi object unique
spread object menggunakan spread operator menjadi individual value
encapsule value kedalam array dengan bracket
*/