function repeatStringNumTimes(str, num){
    let accumulator =''; // if num = 0 accumulator will be empty string
    while (num > 0) { // while greater than 0 keep iterating 
        accumulator += str; // concat string
        num--; // decrease number
    }
    return accumulator;
}

console.log(repeatStringNumTimes('*', 3));