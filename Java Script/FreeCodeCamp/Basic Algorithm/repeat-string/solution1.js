function repeatStringNumTimes(str, num) {
    let strIterate = str;
    if (num <= 0) {
        str = '';
    } else {
        for (let i = 2; i <= num; i++)str += strIterate;
    }

    return str;
}

repeatStringNumTimes("abc", 3);

console.log(repeatStringNumTimes("abc", 3));