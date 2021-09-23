function truncateString(str, num) {
    return str.length <= num ? str :
        str.split('', num).join('') + '...';
}

console.log(truncateString('the number of characters', ));