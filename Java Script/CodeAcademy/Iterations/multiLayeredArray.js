const grades = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [11, 12, 13]
];


// reduce
const output = grades.reduce((accum, item) => {
    accum = [...accum, ...item];
    return accum;
}, []);

console.log(output);