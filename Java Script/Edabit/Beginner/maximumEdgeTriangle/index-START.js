/* 
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

Resource : https://edabit.com/challenge/nhXofMMyrowMyr9Nv

Note :
(side1 + side2) - 1 = maximum range of third edge.
The side lengths of the triangle are positive integers.
*/

const nextEdge = (side1, side2) => {
    const MAX_RANGE = (side1 + side2) - 1;
    return MAX_RANGE;
}

module.exports = nextEdge;