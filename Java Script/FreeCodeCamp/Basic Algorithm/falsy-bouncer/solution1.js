function bouncer(arr) {
    const newArr = arr.filter(elem => Boolean(elem) === true);
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]))