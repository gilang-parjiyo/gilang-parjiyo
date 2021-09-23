let fromis_9 = 'Jisun, Saerom, Chaeyong, Nagyung, Seoeyon, Jiwon, Hayoung, Jiheon, Gyuri';
let regBias = /Gyuri|Hayoungs/; // result true

let YourBias = regBias.test(fromis_9);
console.log(YourBias);