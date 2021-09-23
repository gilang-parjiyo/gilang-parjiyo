//1. While statement
var numOfCustomers = 3;

while (numOfCustomers > 0) {
    console.log("How may i need help you");

    //help the customer...
    numOfCustomers--;
    console.log("while", numOfCustomers)

}

// 2. versus doWhile statment

var numOfCustomers2 = 3;

do {
    console.log("How may I help you");

    //help the customer..

    numOfCustomers2 -= 1;
    console.log("do while",numOfCustomers2)
} while (numOfCustomers2 > 0);

//3. break loops
var i = 0;

// a "while ture" loop would run forever
while (true) {
    if ((i <= 3) === false) {
        break;
    }
    console.log("while with break", i );
    i++;
}
// 0 1 2 3 4 5 6 7 8 9

//4. for loops

for (i = 0; i <= 3; i += 1) {
    console.log( "for loops",i );
}