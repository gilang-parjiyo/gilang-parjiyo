const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.9;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 100;
var amount = 0;

//calculate percentage tax
{
    function calculateTax() {
        return amount * TAX_RATE;
    }
}


//format amount
{

    function formatAmount() {
        return "$" + amount.toFixed(2);
    }
}
// keep buying phones while you still have money
{
    while (bank_balance > amount) {
        // buy  a new phone
        amount += PHONE_PRICE;

        //can we afford the accessory
        if (amount < SPENDING_THRESHOLD) {
            amount += ACCESSORY_PRICE;
        }

    }
}



//don't forget to pay goverment tax
{
    amount += calculateTax(amount);

    console.log(
        "Your purchase: " + formatAmount(amount)
    );
}

if (bank_balance < amount) {
    console.log(
        "You can't afford this purchase. :("
    );

}