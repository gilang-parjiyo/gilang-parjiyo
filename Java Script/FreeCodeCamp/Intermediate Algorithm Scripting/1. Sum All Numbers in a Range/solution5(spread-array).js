function sumAll(arr) {      
    let sumBetween = 0;
    for( let i = Math.min(...arr); i <= Math.max(...arr); i++ ) {
        sumBetween += i;
    }
    return sumBetween;
}

console.log(
    sumAll([4,1])
);              