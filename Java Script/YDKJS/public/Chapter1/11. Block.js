//General block
var amount = 99.9

{
    amount = amount * 2;
    console.log(amount);
}

// Block attached to if

var amount = 99.9

//is amount big enough?
if (amount > 10){   // <--- block attached to if
    amount = amount * 2;
    console.log(amount); // 199.98
}