//scope
{
    function one() {
        // this `a` only belongs to the `one()` function
        var a = 1;
        console.log("variable a in function one :", a);
    }

    function two() {
        // this `a` only belongs to the `two()` function
        var a = 2;
        console.log("variable a in function two :", a);
    }

    one(); //1
    two(); //2
}

// nested scope
{
    function outer() {
        var a = 1;

        function inner() {
            var b = 2;

            //we can access both `a` and `b` here
            console.log(a + b); //3

        }

        inner();

        //we can only acces `a` here
        console.log(a); //1

    }

    outer();
}

//other lexical scope
{
    const TAX_RATE = 0.10;
    function calculateFinalPurchaseAmount(amt) {
        //calculate the new amount with the tax
        amt = amt + (amt * TAX_RATE);
        
        //returtn the new amount

        return amt;
    }
    /**
     * The TAX_RATE constant (variable) is accessible from inside 
     * the calculateFinalPurchaseAmount(..) function,
     * even though we didn't pass it in, because of lexical scope.
     */
}
