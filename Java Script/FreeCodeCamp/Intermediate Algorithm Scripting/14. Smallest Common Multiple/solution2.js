function smallestCommons(arr = []) {
    // Setup
    const [MIN, MAX] = arr.sort((a, b) => a - b);
    const RANGE = Array(MAX - MIN + 1).fill(0).map((_, i) => i + MIN);

    // Largests possible value for SCM
    const UPPER_BOUND = RANGE.reduce((a, b) => a * b);

    // Test all multiples of 'max'
    for (let multiple = MAX; multiple <= UPPER_BOUND; multiple += MAX) {

        // Check if every value in range divides 'mulitples'
        const DIVISIIBLE = RANGE.every(value => multiple % value === 0);
        if (DIVISIIBLE) {
            return multiple;
        }
    }
}

console.log(
    smallestCommons([23, 18])
);