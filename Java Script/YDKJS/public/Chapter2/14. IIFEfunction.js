{// Function IIFES or Imediatelly Invoke Function Expressions
    (function IIFE() {
        console.log("Hello World");
    })();
    // "Hello World"

}

{// Similiarities function foo and IIFE
    function foo() { // `foo` function reference expression, 
        console.log("function Foo")
    }
    foo(); // then "()"" executes it

    (function IIFEs() { // "IIFEs" function reference expression
        console.log("function IIFEs");
    })(); // then "()" executes it 
}

{ // IIFE for create variable inside IIFE scope
    var a = 42;
    (function IIFE2() {
        var a = 10;
        console.log(a); // log var a in variable scope function IIFE2
    })();

    console.log(a); // log var in global scope
}

{ // IIFE for return value

    var x = (function IIFE3() {
        return 43;
    })();

    console.log(x); // log variable function IIFE
}