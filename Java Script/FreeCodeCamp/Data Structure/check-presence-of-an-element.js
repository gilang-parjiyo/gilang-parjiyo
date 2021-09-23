//solution 1
function checkElement1(arr, elem) {
    if (arr.indexOf(elem) > -1) { // -1 berarti element tidak ditemukan maka diset element harus lebih dari -1
        return true;
    } else {
        return false;
    }
}

console.log(checkElement1(['makan', 'mandi', 'tidur'], 'makans'));


//soltuion 2
function checkElement2(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}

console.log(checkElement2(['makan', 'mandi', 'tidur'], 'makan'));

//solution 3
function checkElement3(arr, elem) {
    return arr.indexOf(elem) != -1;
}
console.log(checkElement3(['makan', 'mandi', 'tidur'], 'makans'));