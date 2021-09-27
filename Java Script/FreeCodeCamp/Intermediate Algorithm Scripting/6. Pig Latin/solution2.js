function translatePigLatin(string = str) {
    let regex = /[aiueo]/gi;
    let pigLatin = '';

    if (string[0].match(regex)) {
        pigLatin = `${string} way`;
    } else if (string.match(regex) === null) {
        pigLatin = `${string} ay`;
    } else {
        let vowelIndice = string.indexOf(string.match(regex)[0])
        pigLatin = string.substr(vowelIndice) + string.substr(0, vowelIndice) + 'ay';
    }
    return pigLatin;
}

let str = 'glove'

console.log(
    translatePigLatin(str)
);