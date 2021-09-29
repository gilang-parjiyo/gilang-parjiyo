function sumFibs(num) {
    let curNumber = 1;
    let prevNumber = 0;
    let result = 0;

    while (curNumber <= num) {
        if (curNumber % 2 !== 0) {
            result += curNumber;
        }
        curNumber += prevNumber;
        prevNumber = curNumber - prevNumber;
    }
    return result
}

console.log(
    sumFibs(10)
);