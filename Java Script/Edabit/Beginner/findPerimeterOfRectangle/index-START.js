/* 
Create a function that takes length and width and finds the perimeter of a rectangle.
resource : https://edabit.com/challenge/XnJ24rWW7iJkNrtsh;

*/

const findPerimeter = (length, width) => {
    const PERIMETER = (2 * length) + (2 * width);
    return PERIMETER;
}

module.exports = findPerimeter