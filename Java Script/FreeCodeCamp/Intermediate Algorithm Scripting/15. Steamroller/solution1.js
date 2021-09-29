function steamrollArr(arr = []) {
    let flat = [].concat(...arr); // 
    return flat.some(Array.isArray) ? steamrollArr(flat) : flat;
}

console.log(
    steamrollArr([1, [], [3, [[4]]]])
);

/*
codeFlow
- spread array 


*/