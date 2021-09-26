function spinalCase(string = str2) {
return string
.replace(/([a-z])([A-Z])/g, '$1 $2')
.split(/[\s\_]/)
.join('-')
.toLowerCase();
}

let str2 = 'thisIs_Spinal-Tap'

console.log(spinalCase(str2));