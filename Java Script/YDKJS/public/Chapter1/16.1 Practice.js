const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 99.9;
const TAX_RATE = 0.08;
const SPENDING_THRESHOLD = 100;

var bank_balance = 1000;
var amount = 0;
var phone = 0;
var accessory = 0;




{

    function totalSpending() {
        while (bank_balance > amount + PHONE_PRICE + (PHONE_PRICE + ACCESSORY_PRICE * TAX_RATE)) {
            amount += PHONE_PRICE; // add phone price to total price
            phone += 1;

            if ((bank_balance > amount + ACCESSORY_PRICE) && (amount + ACCESSORY_PRICE < SPENDING_THRESHOLD)) {
                amount += ACCESSORY_PRICE // add accessory price to total price if total price is under spending threshold
                accessory += 1;
            }
        }
        amount = amount + (amount * TAX_RATE);
        return "Total Price $" + amount.toFixed(2) + " You buy " + accessory + " accessory" + " And " + phone + " phones.";

    }

    console.log(totalSpending());


}

