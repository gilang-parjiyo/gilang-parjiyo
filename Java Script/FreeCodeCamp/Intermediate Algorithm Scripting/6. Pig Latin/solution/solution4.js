function translatePigLatin(string = str) {
    return string
    .replace(/^[aiueo]\w*/, '$&way')
    .replace(/(^[^aiueo]+)(\w*)/, '$2$1ay' )
}

let str = 'oglove';
console.log(
    translatePigLatin(str)
);