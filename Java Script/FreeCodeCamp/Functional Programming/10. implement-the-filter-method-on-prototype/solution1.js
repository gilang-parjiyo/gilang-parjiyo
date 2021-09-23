var s = ['1', '2', '3', '4', '5'];

Array.prototype.myFilter = function (callback) {
    let newArray = []; // array to hold 

    this.forEach(item => {
        if (callback(item) === true) { // filter item that equal true
            newArray.push(item); // push item equal true to new array
        }
    })
    return newArray;
}

let newFilter = s.myFilter((item) => {
    return item % 2 === 0; // filter item that even
})

console.log(
    newFilter
);
