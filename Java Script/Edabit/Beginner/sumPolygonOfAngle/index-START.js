/* 
Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

Notes :
n will always be greater than 2.
The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG
*/

const sumPolygon = (n) => {
    const SUM_ANGLE = (n - 2) * 180;
    return n < 2 ? 'Please insert sided greater than 2' : SUM_ANGLE;
}

sumPolygon(1)

module.exports = sumPolygon;