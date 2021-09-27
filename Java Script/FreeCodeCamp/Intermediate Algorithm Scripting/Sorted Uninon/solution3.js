function uniteUnique(...args) {
    // create an empty array to store our final result
    let finalArr = [];

    // loop trough arguments so function can take more than one arguments;
    for (let i = 0; i < arguments.length; i++) {
        var arrArgument = arguments[i];

        //loop trough array arguments
        for (let j = 0; j < arrArgument.length; j++) {
            let indexValue = arrArgument[j];

            // push value if not present
            if (finalArr.indexOf(indexValue) < 0) {
                finalArr.push(indexValue);
            }
        }
    }
    return finalArr;

}

console.log(
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);