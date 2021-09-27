function translatePigLatin(string = str) {
    let regex = /^[aiueo]+/i;
    if (string.match(regex)) return `${string}way`; 

    let consonant = string.match(/^[^aiueo]+/i)[0]
    return string.substring(consonant.length) + consonant + 'ay';
}

let str = 'glove';
console.log(
    translatePigLatin(str)
);