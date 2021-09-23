let string = 'setiap kali dia berbicara tidak jelas terdengar seperti hah hih huh heh hoh.';
let regString = /ha./g;

let result = string.match(regString);

console.log(result); // return ['hah'] karena kata yang ditemukan berawalan 'ha' adalah hah;