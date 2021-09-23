var bank_balance = 302.13;
var amount = 99.9;

if (amount < bank_balance) {
    console.log("I want to buy this phone");
}

//alternative condition if the condition isn't true, called an else clause

const ACCESSORY_PRICE = 9.99
var bank_balance = 302.13;
var amount = 99.9

// can we afford the extra purchase?
if (amount < bank_balance) {
    console.log("I'll take the accessory!");
    amount = amount + ACCESSORY_PRICE;
}
// otherwise
else {
    console.log("No, thanks.");

}