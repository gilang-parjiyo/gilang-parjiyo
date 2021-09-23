let A1 = 'hah';
let A2 = 'haaaah';
let mutlipleA = /ha{2,3}h/ // true jika a minimal ada 2a dam maksimal 3a

console.log(mutlipleA.test(A2));
