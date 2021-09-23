let pakStr = 'pak';
let pikStr = 'pik';
let pukStr = 'puk';
let pekStr = 'pek';
let pokStr = 'pok';


let result1 = pakStr.match(/p[aiue]k/g);
let result2 = pikStr.match(/p[aiue]k/g);
let result3 = pukStr.match(/p[aiue]k/g);
let result4 = pekStr.match(/p[aiue]k/g);
let result5 = pokStr.match(/p[aiue]k/g); 

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5); // result null karena didalam character clases nya tidak ada huruf o.
