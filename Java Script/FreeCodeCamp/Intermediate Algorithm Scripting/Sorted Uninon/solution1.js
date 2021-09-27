function uniteUnique(arr) {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].forEach(element => {
            if (newArr.indexOf(element) < 0) {
                newArr.push(element);
            } 
        });
    }
    // console.log(arr);
    return newArr;
}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

/*
1, 3, 2, 5, 2, 1, 4, 2, 1
*/