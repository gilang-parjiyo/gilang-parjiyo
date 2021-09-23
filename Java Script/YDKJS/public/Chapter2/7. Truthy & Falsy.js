//falsy
{
    console.log(Boolean("")); //false
    console.log(Boolean(0, -0, NaN)); //false
    console.log(Boolean(null)); //false
    console.log(false) //false
}

//Truthy

{
    console.log(Boolean("hello")); //true
    console.log(Boolean(42)); //true
    console.log(Boolean(true)); //true
    console.log(Boolean([], [1, "2"])); //true
    console.log(Boolean({}, { a: 42 })); //true
    console.log(Boolean(function foo() {})); //true
}
