function confirmEnding(str, target) {
    let regex = new RegExp(target + '$', 'i'); // create new regular expression target is end($), (i) means ignore case sensitive
    return regex.test(str) // test regular expression against the string
}

console.log(confirmEnding('Bastian', 's'));