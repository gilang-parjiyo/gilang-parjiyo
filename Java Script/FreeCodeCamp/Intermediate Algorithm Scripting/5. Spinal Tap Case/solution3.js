function spinalCase(string = str) {
    return string.split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase()
    
}
str = 'thisIs_spinal case'
console.log(spinalCase(str));