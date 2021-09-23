function findLongestWordLength(word = []) {
    let regex = /\b\w+\b/gi;
    word = word.match(regex);
    word = word.reduce((a, b) => a.length > b.length ? a : b);
    return word;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dogsssss'));