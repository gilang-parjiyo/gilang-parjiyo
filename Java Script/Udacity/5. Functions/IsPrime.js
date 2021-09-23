function isPrime (integer){
    for(var x =2; x < integer; x++){
        if (integer % x === 0){
            console.log(integer + ' is divisible by ' + x);
            return false;
        }
    }
    return true;
}

isPrime(2);
console.log(isPrime(7));

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
  isThisWorking(3);