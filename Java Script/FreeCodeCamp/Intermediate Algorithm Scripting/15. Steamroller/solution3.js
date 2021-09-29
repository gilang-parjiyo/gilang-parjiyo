function steamrollArray(arr = []) {
    return arr.toString()
        .replace(/,,/, ',')
        .split(',')
        .map(value => {
            if (value === '[object Object]') {
                return {};
            } else if (isNaN(value)) {
                return value;
            } else {
                return Number(value);
            }
        });

}

console.log(
    steamrollArray([1, { test: 'text' }, [3, [[4]]]])
);