function smallestCommons(arr = []) {
    //setup
    const [MIN, MAX] = arr.sort((a, b) => a - b);
    const numberDivisor = MAX - MIN + 1;
    // largest possible value for SCM
    let upperBound = 1;
    for (let i = MIN; i <= MAX; i++) {
        upperBound *= i;
    }
    // Test all multiples of max
    for (let multiple = MAX; multiple <= upperBound; multiple += MAX) {
        // Check if every value in range divides 'mulitple'
        let divisorCount = 0;
        for (let i = MIN; i <= MAX; i++) {
            // Count divisor
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisor) {
            return multiple
        }

    }

}

console.log(smallestCommons([5, 1]));
