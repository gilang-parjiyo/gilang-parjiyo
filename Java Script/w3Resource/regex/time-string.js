function timeString(time) {
    let regex = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;
    let result = regex.test(time);
    return result;
}

console.log(timeString('13:59:0'));