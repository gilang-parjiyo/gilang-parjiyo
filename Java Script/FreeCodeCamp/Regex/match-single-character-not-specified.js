let str = 'gyuri i hope you find your happines 4545$}';
let regX = /[^aiueo]/gi;

let result = str.match(regX);
console.log(result); // symbol and whitespace ar included

/* Result
[
  'g', 'y', 'r', ' ', ' ', 'h',
  'p', ' ', 'y', ' ', 'f', 'n',
  'd', ' ', 'y', 'r', ' ', 'h',
  'p', 'p', 'n', 's', ' ', '4',
  '5', '4', '5', '$', '}'
]
*/