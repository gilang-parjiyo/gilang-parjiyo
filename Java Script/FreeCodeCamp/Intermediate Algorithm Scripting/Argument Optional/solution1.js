function addTogether(...args) {
    let [first, second] = args;

    function isNum(num) {
        return Number.isInteger(num);
    }

    if (!isNum(first)) {
        return undefined;
    } else if (second === undefined) {
        function addSecond(second) {
            if (!isNum(second)) {
                return undefined;
            }
            else {
                return first + second;
            }
        }
        return addSecond;
    } else if (!isNum(second)) {
        return undefined;
    } else {
        return first + second;
    }


}

console.log(
    addTogether(1)
);


//Check