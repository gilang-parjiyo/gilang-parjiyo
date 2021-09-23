var amount = 99.9;
amount = amount * 2;
console.log( amount);

//convert amount to sring
// add "$" in the beginning
amountStr = "$" + String(amount);
console.log(amountStr);

/**
 * Constant when you declare variable with value and intend for that value to not change througout the programs.
 * You declare these constants, often at the top of a program, so that it's convenient for you to have one place to go to alter a value if you need to.
 * By convention, JavaScript variables as constants are usually capitalized, with underscores _ between multiple words.
*/

var TAX_RATE = 0.08 //8% sales
var amount = 99.99;
amount = amount * 2;
amount = amount + (amount * TAX_RATE);
console.log(amount);
console.log(amount.toFixed(2))


//Constant is variable with unchanged value.

const TAX_RATE2 = 0.08
var amount = 99.99;
console.log((amount + (amount * TAX_RATE2)).toFixed(2));