/**
 * prepareTea
 * getTea
 * teaCups
 */

const prepareTea = () => 'green tea';

const getTea = (numOfCups) => {
    const teaCups = [];

    for (let i = 1; i <= numOfCups; i++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}

const tea4TeamFCC = getTea(3);
console.log(tea4TeamFCC);

