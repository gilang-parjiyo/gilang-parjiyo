/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */

// Write your code here
var row = 0; //initial valueof rwo
var seat = 0; //initial value of seat

// one loop inside another loop is called nested loop
// outer 'for' loop, to iterate over the rows

for (row = 0; row <= 25; row++) {
    // inner 'for' loop, to iterate over seats within row
    // In this loop, the value of 'row' variable would change only after 100 iterations
    for (let seat = 0; seat <= 99; seat++) {
        console.log(row + '-' + seat);

    }

}