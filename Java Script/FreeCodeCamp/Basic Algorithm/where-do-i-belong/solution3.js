function getIndexToInsert(arr, num) {
    return arr.filter(elem => elem <= num).length //filter item yang kurang dari num kemudian cari length arraynya
}

console.log(getIndexToInsert([], 60));