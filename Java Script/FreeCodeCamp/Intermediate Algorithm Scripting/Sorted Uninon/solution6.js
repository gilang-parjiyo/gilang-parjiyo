function uniteUnique(arr) {
    let uniqueArr = [];
    let i = 0;

    while (i < arguments.length) {
        uniqueArr = uniqueArr.concat(arguments[i]);
        i++
    }

    return uniqueArr.filter((item, index) => uniqueArr
        .indexOf(item) === index);
}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

/* 
buat variable untuk menampung array uniqueArr
buat inisialisasi while loop dengan i = 0

while loop
gunakan argument untuk inisiasi
jika masih true uniqueArr concat degnan arguments
jangan lupa untuk increase i

filter uniqueArr
kondisi filter = jika index item sama dengan index uniqueArr karena hanya diambil satu saja yang sama.
*/