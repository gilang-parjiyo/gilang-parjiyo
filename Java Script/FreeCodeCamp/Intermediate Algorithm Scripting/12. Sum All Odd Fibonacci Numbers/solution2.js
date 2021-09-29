function sumFibs(num) {
    let fibonanci = 0;
    let twoBefore = 0;
    let oneBefore = 1;

    if (num < 0) return fibonanci;

    for (let i = 0; i <= num; i++) {
        if (i < 2 ) {
            fibonanci = i;
        } else if (num >= fibonanci){
            fibonanci = oneBefore + twoBefore;
            twoBefore = oneBefore;
            oneBefore = fibonanci;
        } else {
            return fibonanci
        }
    }
    return fibonanci
}

console.log(
    sumFibs(10)
);