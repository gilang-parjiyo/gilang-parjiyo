function countVowels(vowel = '') {
    let regex = /[aiueo]/gi;
    let result = vowel.match(regex).length;
    return result;
}

console.log(countVowels('Gilang Romadhan'));