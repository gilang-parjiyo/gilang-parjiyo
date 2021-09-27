function myReplace(str = string, before = bef, after = aft) {
    if (/^[A-Z]/.test(before) === true) {
        after = after.replace(after[0],
            after[0].toUpperCase());
    } else if (/^[a-z]/.test(before) === true) {
        after = after.replace(after[0],
            after[0].toLowerCase());
    }
    return str.replace(before, after);
}

let string = "A quick brown fox jumped over the lazy dog";
let bef = 'jumped';
let aft = 'Leaped';

console.log(
    myReplace(string, bef, aft)
);