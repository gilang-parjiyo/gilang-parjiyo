let A2 = 'haah';
let A3 = 'haaah';
let A10 = `h${'a'.repeat(10)}h`
let regex = /ha{3}h/ //ingat jika tidak di specify akhiranya a lebih ari 3 bisa true!

console.log(regex.test(A2)); // return false because only 2 a
console.log(regex.test(A3)); // return true because a exact 3;
console.log(regex.test(A10)); // return false because a more than 3;




