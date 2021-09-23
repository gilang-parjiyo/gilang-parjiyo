{// Strict Mode individual function.
    function foo1() {
        "use strict"

        //this function use strict mode
        function foo2() {
            //this function use strict mode.
        }
    }
    //this code is not strict mode
}

{// Strict Mode entire file or global
    "use strict"
    function foo3() {
        // this code is strict mode.
        function foo4() {
            // this code is strict mode.
        }

    }
    // this code is strict mode.
}

{ // Strict mode disallow auto-global declaration
    function foo5() {
        "use strict"
         f = 1;
         console.log(f); //ReferenceError: f is not defined
    }

    foo5();

    function foo6() {
        g = 1;
        console.log(g); // 1
    }

    foo6();
}