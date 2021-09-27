function translatePigLatin(string = str) {
    let regex = /^[^aiueo]+/i
    let consonant = string.match(regex);
    return consonant !== null 
    ? string.replace(regex, '')
    .concat(consonant)
    .concat('ay')
    : string.concat('way') 


}

let str = 'glove';
console.log(
    translatePigLatin(str)
);