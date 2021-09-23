function findLongestWord(words) {
    return words.split(' ') // split string into array of words
        .reduce((acc, word) => { // iterae
            return Math.max(acc, word.length) //findd the greater acc or word;
        }, 0); // initial value so 0 + word.length 
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


