var fixedValue = 4; 

function incrementter() {
    return fixedValue + 1;
}

console.log(incrementter()); // incrementer return value 5 with reference from fixed value;
console.log(fixedValue); // fixed value still 4;