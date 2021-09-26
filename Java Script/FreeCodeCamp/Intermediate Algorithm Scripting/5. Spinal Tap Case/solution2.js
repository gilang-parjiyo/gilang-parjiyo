function spinalCase(string = str) {
    return string
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[\s\_]/g, '-')
    .toLowerCase();

}

let str = 'thisIs-Spinal_case quiz';
console.log(spinalCase(str));