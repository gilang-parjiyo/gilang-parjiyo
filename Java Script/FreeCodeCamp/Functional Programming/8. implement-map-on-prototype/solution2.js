//global variable
let s = ['1', '2', '3', '4', '5'];

Array.prototype.myMap = function (callback, arr = [], i = 0) {
    return i < this.length
        ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
        : arr;
}

let newArr = s.myMap(function (item) {
    return item * 2;
});

console.log(newArr);
