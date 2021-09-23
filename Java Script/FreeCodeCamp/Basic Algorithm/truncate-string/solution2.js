function truncateString(str, num) {
    return str.length <= num ? str : str.slice(0, num) + '...';
}

console.log(truncateString('the browser does not support', 1));