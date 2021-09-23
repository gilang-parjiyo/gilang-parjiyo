{
    function printAmount() {
        console.log("without parameter", amount.toFixed(2));
    }

    var amount = 99.99;

    printAmount(); // "99.9"

    amount = amount * 2;

    printAmount(); // "199.98"
}

/**
 * Functions can optionally take arguments (aka parameters)
 * value you pass in. And they can also optionally return
 * value back
 */
{
    function printAmount2(param) {
        console.log("with parameter", param.toFixed(2));
    }

    function formatAmount2() {
        return "$" + amount2.toFixed(2);

    }

    var amount2 = 88.8890;

    printAmount2(amount2 * 2); //177.78

    amount2 = formatAmount2();

    console.log(amount2); //$88.89

    //input argument directly to functions
    printAmount2(90.980909); //90.98
}

//function to organize code

{
    const TAX_RATE = 0.08;
    
    function calculateFinalPurchaseAmount(param) {
        // calculate the new amount with the tax
        param = (param + (param * TAX_RATE)).toFixed(2);

        // return the new amount
        return param;
        
    }

    var amount3 = 99.99;

    amount3 = calculateFinalPurchaseAmount(amount3);

    console.log(amount3); //107.99
}