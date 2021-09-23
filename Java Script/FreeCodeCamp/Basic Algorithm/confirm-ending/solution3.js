function confirmEnding(str, target) {
    return str.slice(- target.length) === target; // if negative number provided as the first parameter to slice(), the offset is taken backwards from the end of the string.
}

console.log(confirmEnding('Please', 'ase'));