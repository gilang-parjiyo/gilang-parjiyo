function factorialize(num) {
    if (num === 0) return 1;
    return num * factorialize(num - 1);
}

console.log(factorialize(5));
/*
5 != 0
5 * 4 * 3 * 2 * 1
0 = 0 

*/