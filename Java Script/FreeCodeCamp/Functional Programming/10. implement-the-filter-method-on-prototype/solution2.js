var s = ['1', '2', '3', '4', '5', '6'];

Array.prototype.myFilter = function (callback) {
    let newArr = []; // hold new array

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let newFilter = s.myFilter(item => {
    return item % 2 === 0;
})

console.log(
    newFilter
);