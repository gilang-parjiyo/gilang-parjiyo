function smallestCommon(arr = []) {
    //setup
    const [MIN, MAX] = arr.sort((a, b) => a - b);
    const RANGE = Array(MAX - MIN + 1).fill(0).map((_, i) => i + MIN);
    // GCD Greatest Common Divisor of two number
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b); // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm

    // Least Common Multiple
    const lcm = (a, b) => a * b / gcd(a, b);   // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor

    return RANGE.reduce((multiple, curr) => lcm(multiple, curr));
}

console.log(
    smallestCommon([1, 5])
);