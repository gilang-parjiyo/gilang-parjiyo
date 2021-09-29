function smallestCommons(arr = []) {
    // mencari min dan max
    const [MIN, MAX] = arr.sort((a, b) => a - b);
    // buat array berisi nilai diantara a dan b
    const RANGE = Array(MAX - MIN + 1).fill(0).map((_, i) => i + MIN);
    // rumus gcd greatest common divisor
    const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
    // rumus lcm least common multiplier
    const lcm = (a, b) => a * b / gcd(a, b);
    return RANGE.reduce((mulitply, curr)=> lcm(mulitply, curr));  
}

console.log(
    smallestCommons([1, 5])
);