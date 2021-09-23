// n
{
  var a = 2;

  foo(); //work because `foo()`
  //declaration is "hoisted"

  function foo() {
    a = 3;
    console.log(a);

    var a; //declaration is "hoisted"
    //to the top of `foo()`
  }
  console.log(a);
}

{
  // hoisting
  function codeHoist() {
    c = 10; // implicity create global variables
    let d = 50;
  }
  codeHoist();

  console.log(c); // 10
  console.log(d); // ReferenceError : d is not defined
}