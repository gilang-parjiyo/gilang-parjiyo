function findLongestWordLength(words) {
    words = words.split(' '); // convert string sentence into array of words
    let longestWord = 0; // initialize word length;
    for (let word in words) { // iterate array words
        if (words[word].length > longestWord) longestWord = words[word].length; //compare array words to initialize word length
    }
    return longestWord;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));