function getIndexToIns(arr, num) {
    return arr.concat(num) //gabungkan num kedalam index
        .sort((a, b) => a - b) // sorting array setelah digabungkan dengan num
        .indexOf(num); // log index of num
}

console.log(getIndexToIns([], 5));