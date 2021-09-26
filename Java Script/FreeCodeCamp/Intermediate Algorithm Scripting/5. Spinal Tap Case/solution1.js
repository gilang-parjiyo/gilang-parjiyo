function spinalCase(string = str2) {
return string
.replace(/([a-z])([A-Z])/g, '$1 $2')
.split(/[\s\_]/)
.join('-')
.toLowerCase();
}

let str2 = 'thisIs-Spinal_case quiz'

console.log(spinalCase(str2));