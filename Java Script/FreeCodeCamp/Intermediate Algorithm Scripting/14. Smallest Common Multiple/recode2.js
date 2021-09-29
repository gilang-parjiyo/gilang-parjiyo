function smallestCommons(arr = []) {
    // Tentukan nilai minimal dan maximal
    const [MIN, MAX] = arr.sort((a, b) => a - b);
    // Membuat array baru dari arr
    const RANGE = Array(MAX - MIN + 1).fill(0).map((_, i) => i + MIN);
    // Membuat batas atas penambahan
    const UPPER_BOUND = RANGE.reduce((a, b) => a * b);

    // Mencari penambahan max yang bisa dibagi = 0 disemua item range
    for (let mulitple = MAX; mulitple <= UPPER_BOUND; mulitple += MAX) {

        // Check apakah semua item range bisa divisible variable multiple
        const DIVISIBLE = RANGE.every(value => mulitple % value === 0);
        //check apakah semua value range telah bisa mendivisble multiple
        if (DIVISIBLE) {
            return mulitple
        }
    }
}

console.log(
    smallestCommons([1, 5])
);