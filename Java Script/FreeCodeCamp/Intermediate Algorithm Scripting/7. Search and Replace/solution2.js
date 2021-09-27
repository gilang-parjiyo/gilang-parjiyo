function myReplace(string = str, before = bfr, after = afr) {
    let index = string.indexOf(before);
    if(string[index] === string[index].toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return string.replace(before, after);    
}

let str = 'A quick brown fox Jumped over the lazy dog';
let bfr = 'Jumped';
let afr = 'leaped';

console.log(
    myReplace(str, bfr, afr)
);