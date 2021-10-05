function myFunction(string = '') {
    return string.split('')
        .map(item => String.fromCharCode(item.charCodeAt(0) + 1))
        .join('')
}

console.log(myFunction('bnchmf'));