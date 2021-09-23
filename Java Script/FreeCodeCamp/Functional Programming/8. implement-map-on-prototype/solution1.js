//global variable
let s = ['1', '2', '3', '4', '5', '6'];


Array.prototype.myMap = function (callback) {
    let newArray = [];

    this.forEach((item) => newArray.push(callback(item)));

    return newArray;
}

let myArray = s.myMap(item => { return item * 2 });

console.log(myArray);