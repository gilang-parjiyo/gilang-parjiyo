let yourBias = 'gyuri, Gyuri, gyuri, jiheon, jiheon, jisun';

let rateBias = /gyuri/g; // menampilkan hasil matches string
let results = yourBias.match(rateBias);

let rateBiasIgnoreCase = /gyuri/gi; // show matches plus ignore case Note tidak boleh terbalik menggunakan keyword 'ig' akan menghasilkan mull
let resultsIgnore = yourBias.match(rateBiasIgnoreCase);

console.log(results); // [ 'gyuri', 'gyuri' ]
console.log(resultsIgnore); // [ 'gyuri', 'Gyuri', 'gyuri' ]