function sayGreeting (){
    var greeting; // hoisting as variable undefined
    console.log(greeting);
    greeting = 'Hello' // reassign variable bugging.
    return greeting;
}

console.log(sayGreeting()); //result : undefined