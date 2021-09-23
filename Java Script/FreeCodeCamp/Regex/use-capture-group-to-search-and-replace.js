let numberStr = 'one two three';
let regex = /(\w+)\s(\w+)\s(\w+)/; // every group dipisah berdasarkan spasi maka dipakai '\s'
let result = numberStr.replace(regex, '$3 $2 $1'); 

console.log(result);

//replace string
let str = 'Setiap manusia pasti pernah mengalami depresi';
let regexStr = /depresi/;
let resultStr = str.replace(regexStr, 'bahagia');

console.log(resultStr);