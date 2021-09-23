function foo() {
    return 42;
}

foo.bar = "Hello World";

console.log(typeof foo);  //function
console.log(typeof foo()) //number
console.log(typeof foo.bar); //string


