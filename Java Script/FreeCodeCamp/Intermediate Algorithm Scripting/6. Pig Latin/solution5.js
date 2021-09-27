function translatePigLatin(str = string, charPos = 0) {
        return ['a','i','u','e','o'].includes(str[0]) 
        ? str + (charPos === 0 ? + 'way' : 'ay') 
        :charPos === str.length 
        ? str + 'ay'
        : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

let string = 'glove';

console.log(
    translatePigLatin(string)
);