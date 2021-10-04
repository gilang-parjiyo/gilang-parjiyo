/*  
Write a function that takes the base and height of a triangle and return its area.
The area of a triangle is: (base * height) / 2

Resource : https://edabit.com/challenge/3CaszbdZYGN4otQD8
*/

const triArea = (base, height) => {
    const AREA = base * height / 2;
    return AREA;
}

module.exports = triArea;