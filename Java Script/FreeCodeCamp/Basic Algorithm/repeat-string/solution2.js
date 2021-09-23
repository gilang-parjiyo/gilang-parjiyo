function repeatStringNumTimes(str, num) {
    if (num <= 0) { // terminator recrussive 
        return str = ''; // return if terminator is true
    } else {
        return str + repeatStringNumTimes(str, num - 1); // concating string with string function
    }

}

console.log(repeatStringNumTimes('*', 1));