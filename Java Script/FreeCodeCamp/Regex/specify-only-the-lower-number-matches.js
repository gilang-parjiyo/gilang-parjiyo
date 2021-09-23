let A4 = 'haaaah';
let A2 = 'haah';
let A1 = 'hah';
let A100 = `h${'a'.repeat(100)}h`
let multipleA = /ha{2,}/; // pattern to specify limit matches number to 2;

console.log(multipleA.test(A100));