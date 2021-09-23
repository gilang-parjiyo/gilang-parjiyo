let str = 'cat, cbt, cct, cdt, cet, cft';
let strReg = /c[a-e]t/g;
let result = str.match(strReg); // return [ 'cat', 'cbt', 'cct', 'cdt', 'cet' ] cft not logged because not in rage 'a-e'.
console.log(result);