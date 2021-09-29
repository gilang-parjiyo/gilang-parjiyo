function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) { // menggunakan sqrt karena maksimal dividernya adalah square dari argument number
            if (num % i === 0) { // if divide more than 1 and 2 is not prime then return false
                return false;
            }
        }
        return true
    }

    // Check all numbers for primality using function siPrime
    let sum = 0;
    for (let i = 2; i < num; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
}

console.log(sumPrimes(10));


/*

*/
