// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

{
    function myFunction(num) {
        let primes = []
        for (let i = 2; i <= num; i++) {
            if (primes.every((prime) => i % prime !== 0))
                primes.push(i);
        }
        let lastPrime = primes[primes.length - 1];
        if (num === lastPrime) {
            return lastPrime;
        } else {
            for (let i = lastPrime + 1; ; i++) {
                if (primes.every((prime) => i % prime !== 0)) {
                    primes.push(i);
                    break;
                }
            }
        }
        return primes[primes.length - 1];
    }
}



{
    function myFunction(input) {
        function isPrime(num) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return num > 1;
        }
        let n = input;
        while (!isPrime(n)) n++;
        return n
    }
}

