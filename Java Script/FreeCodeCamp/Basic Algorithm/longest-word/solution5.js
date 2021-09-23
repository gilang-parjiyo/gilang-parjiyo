function findLongestWord(word = '') {
    const words = word.split(' '); // split string into array of individual words 

    if (words.length === 1) {
        return words[0].length; // recrussive terminal condition if word length is 1;
    }

    return Math.max(  // find max value
        words[0].length, // access first word in array
        findLongestWord(words.slice(1).join(' ')) // call recrussive function with parameter remove first word and join array again to string.
    );
}