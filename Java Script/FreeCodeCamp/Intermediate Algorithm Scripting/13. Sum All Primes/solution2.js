function sumPrime(num = 0) {
    let primes = [];
    // Check all numbers for primality
    for (let i = 2; i <= num; i++) { // start from 2 because 2 is start of primality number
        if (primes.every(prime => i % prime !== 0)) primes.push(i); //exclude all number that can divide other than 1 and 2;
    }
    // sum all primality number
    return primes.reduce((sum, prime) => sum + prime)
}

console.log(
    sumPrime(10)
);