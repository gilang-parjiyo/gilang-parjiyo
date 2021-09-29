// Fungsi untuk mencari penjumlahan terkecil dari number diantara arr[0] dan arr[1];

function smallestCommons(arr = []) {
    // Mencari minimal dan maximal number
    const [MIN, MAX] = [Math.min(...arr), Math.max(...arr)];
    // Mencari total angka pembagi mengguankan 'min' dan 'max'
    const NUM_DIVISOR = MAX - MIN + 1;

    // Mencari batas penambahan
    let upperBound = 1;
    for (let i = MIN; i <= MAX; i++) {
        upperBound *= i;
    }

    // Test penambahan maksimal
    for (let multiple = MAX; multiple <= upperBound; multiple += MAX) {

        // Penghitung bahwa semua nilai antara arr[0] dan [1] sisa bagi =0
        let divisorCount = 0;
        for (let i = MIN; i <= MAX; i++) {
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        // jika semua item sudah memiliki sisa bagi = 0 return multiple
        if (divisorCount === NUM_DIVISOR) {
            return multiple;
        }
    }

}

console.log(
    smallestCommons([5, 1])
);