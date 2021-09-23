{ // new syntax ES6
    "use strict"
    function foo(a = 2) { //default value function "2"
        console.log(a);
    }
    foo();  //2
    foo(4); //4

}

{ // Transpilling in older browser
    function foo2() {
        var a = arguments[0] !== void(0) /* or undefined */ ? arguments[0] : 2;
        console.log(a);
        
    }
    foo2(5);  // 5
    foo2(); // 2


}