// return the sum value of two number (x + y)
function add (x, y){
    return x + y;
}

// return the value number divided by 2
function dividedByTwo(num){
    return num / 2;
}


var sum = add(5, 7); // call 'add' function and store the returned value in the 'sum' variables
var average = dividedByTwo(sum); // call the 'deividedbytwo' function and store the returned value in the 'average' variable

console.log(dividedByTwo(sum));