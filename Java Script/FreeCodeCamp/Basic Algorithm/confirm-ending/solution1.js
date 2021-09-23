function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target; // get amount slice after calculate str.length - target.length
}

console.log(confirmEnding('Batian', 'an'));