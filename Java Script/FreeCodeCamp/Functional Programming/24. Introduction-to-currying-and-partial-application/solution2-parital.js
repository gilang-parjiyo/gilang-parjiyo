function add(x, y, z) {
    return x + y + z;
}

let partialFunc = add.bind(this, 20, 30); // create bound function partialFunc

console.log(
    partialFunc(10)
);