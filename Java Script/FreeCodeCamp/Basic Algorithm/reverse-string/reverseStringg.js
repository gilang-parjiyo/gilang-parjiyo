function reverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString('Hello'));


function reverseString2(str) {
    return str.split('')
    .reverse()
    .join('')
    
}

console.log(reverseString2('Hello'));