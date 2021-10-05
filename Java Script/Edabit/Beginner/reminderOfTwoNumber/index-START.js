/* 
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

The tests only use positive and negative integers.

Note : if divider is greater will return

*/
const remainder = (x, y) => {
    const REMINDER = x % y;
    return REMINDER;
}

module.exports = remainder;