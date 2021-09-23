function findDate(date) {
    let reg = /(3[01]|[12][0-9]|0?[1-9])\//;
    let result = reg.test(date);
    console.log(result);
}

'(1-12)/(1-31)/(9999)'

findDate('90/');