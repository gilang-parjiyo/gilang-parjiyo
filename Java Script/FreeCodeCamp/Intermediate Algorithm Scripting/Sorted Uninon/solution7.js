function uniteUnique(...args) {
    let flatArr = [].concat(...args)
    console.log([...new Set(flatArr)]);

    return [... new Set(flatArr)]
}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

/* 
buat array baru 'flatArray' dengan menggabungkan array kosong dengan argument array yang sudah di spread

buat set(unique object) dari 'flatArray' setelah di spread encapsule dengan bracket array [...new Set(flatArray)];
*/