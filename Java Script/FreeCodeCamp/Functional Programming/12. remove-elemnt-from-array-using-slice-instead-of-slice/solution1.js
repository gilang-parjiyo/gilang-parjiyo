let cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

function sliceCities(arr) {
    return arr.slice(0, 3) // return new array from index 0 to index 2 because end at 3.
}

console.log(
    sliceCities(cities)
);

