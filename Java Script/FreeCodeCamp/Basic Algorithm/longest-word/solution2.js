function findLongestWordLength(string = '') {
    return Math.max( // find max word length
        ...string.split(' ') // split string to array of words, then spread '...'
            .map(word => word.length) // convert words to numbers so Math.max can find longest word.
    )
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));