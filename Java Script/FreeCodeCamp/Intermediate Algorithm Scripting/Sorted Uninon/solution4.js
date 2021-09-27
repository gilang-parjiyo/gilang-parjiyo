function uniteUnique(arr) {
    let newArr = [...arguments];
    let finalArr = []
    
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if (!finalArr.includes(newArr[i][j])) {
                finalArr.push(newArr[i][j])
            }
        }
    }
    return finalArr;
}

console.log(
    uniteUnique(
        [1, 3, 2], [5, 2, 1, 4], [2, 1]
    )
);

/* 
ubah args menjadi array dengan spread operator
buat array kosong.
loop trough item array pertama
loop trough array kedua
kondisi jika sudah include tidak di push
*/