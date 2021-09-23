function repeatStringNumTimes(str, num) {
    return num <=0 ? str = '' : str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes('*', 0));