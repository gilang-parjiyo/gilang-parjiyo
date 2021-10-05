/* 
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Resource : https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
*/

{
    const matchHouses = (step) => {
        const houseStick = (step * 6)
        const connectedStick = (step * 1)

        const matchStick = (houseStick - connectedStick) + 1;

        return matchStick;
    }
}

//

{
    const matchHouses = (step) => {
        return step ? ((6 * step) - (1 * step)) + 1 : 0;
    }
}


// TODO solution Take away reduce amount of step
{
    function matchHouses(step) {
        return step === 0 ? 0 : 5 * step + 1;
    }
    module.exports = matchHouses;
}